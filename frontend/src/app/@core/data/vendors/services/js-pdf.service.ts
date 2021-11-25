import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

  @Injectable({
  providedIn: 'root',
})
export class JsPDFService {

  constructor(

  ) { }



  public  downloadPDF(div_id): boolean{
    const div = document.getElementById(div_id);
    const options = {
      background: 'white',
      allowTaint:true
    };


    var HTML_Width = div.clientWidth;
    var HTML_Height = div.clientHeight;
    var top_left_margin = 0;
    var PDF_Width = HTML_Width;
    var PDF_Height = HTML_Height;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;


    html2canvas(div, options).then(canvas => {

      canvas.getContext('2d');

			console.log(canvas.height+"  "+canvas.width);

			var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
		    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
        pdf.addPage(PDF_Width, PDF_Height);



        pdf.save(`${new Date().toLocaleString()}_Orienta-T.pdf`) ;
      });

      return true;
  }

  private createElementFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }
  private footer(doc: jsPDF, pw, ph) {

    doc.setFontSize(10);
    doc.line(15, ph - 20, pw, ph - 20); // horizontal line

    doc.text(
      `Orienta-T - Universidad del Norte.
      Todos los Derechos Reservados`,
      pw / 2, ph - 10, {'align': 'center'});

  }

  private header(doc: jsPDF, pw, ph) {
    const imgUN = new Image();
    imgUN.src = 'assets/img/LogoUninorte.png';
    doc.addImage(imgUN, 'png', 10, 10, 100, 31, 'uni','FAST');

    const imgObs = new Image();
    imgObs.src = 'assets/Orienta-t/Logo/PNG/Oriéntate_Azul.png';
    doc.addImage(imgObs, 'png', pw - 90, 10, 80, 29, 'obs','FAST');

    doc.line(15, 45, pw - 15, 45); // horizontal line
  }

  private setConvention(doc: jsPDF, layer: any, pw, ph) {
    if (layer.convention) {

      const imgCnv = new Image();
      imgCnv.src  = layer.convention;
      const imgProps = (doc as any).getImageProperties(imgCnv);
      // Add image Canvas to PDF
      const bufferX = pw - 100;
      const bufferY = (ph / 2) - (250 / 2);
      const imgWidth = pw - 2 * bufferX;
      const imgHeight = (imgProps.height * pw) / imgProps.width;
      doc.addImage(imgCnv, 'PNG', 10, 140, imgProps.width/2,  imgProps.height/2,'conv','FAST');

    }

  }

}
