import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf'

  @Injectable({
  providedIn: 'root',
})
export class JsPDFService {

  constructor(

  ) { }
   lMargin = 55; // left margin in px
   rMargin = 55; // right margin in px
   pdfInMM = 816;  // width of paper in px
  public  downloadMapPDF(layer: any, _mapService): boolean{
     _mapService.getMap().subscribe(gl_map => {
        const doc = new jsPDF('l', 'px', 'letter', true);
        const pw = doc.internal.pageSize.getWidth();
        const ph = doc.internal.pageSize.getHeight();
        this.header(doc, pw, ph);

        // Titulos
        doc.setFontSize(22);
        doc.text('Observatorio del Río Magdalena',  pw / 2, 65, {'align': 'center'});
        doc.setFontSize(10);
        doc.text(`Fecha: ${new Date().toLocaleString()}`,   pw / 2, 75, {'align': 'center'});
        doc.setFontSize(12);

        // Title and desc
        doc.text('CATEGORÍA: '+ layer.category.name, 20, 90, {'align': 'left'});
        doc.text('TITULO: '+ layer.name, 20, 100, {'align': 'left'});
        const splitTitle = doc.splitTextToSize('DESCRIPCIÓN: ' + layer.desc, pw - 50 );
        doc.text(splitTitle, 20, 110);

        // Mapa
        const img = gl_map.getCanvas().toDataURL('image/PNG');
        // Add image Canvas to PDF
        const bufferX = 20;
        const bufferY = 140;
        const imgProps = (doc as any).getImageProperties(img);
        const imgWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const imgHeight = (imgProps.height * pw) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, imgWidth, imgHeight, '','FAST');

        // Convenciones
        this.setConvention(doc, layer, pw, ph);
        this.footer(doc, pw, ph);
        if(layer.references){
          doc.addPage();
          // Titulos
          doc.setFontSize(22);
          doc.text('Observatorio del Río Magdalena',  pw / 2, 65, {'align': 'center'});
          doc.setFontSize(10);
          doc.text(`Fecha: ${new Date().toLocaleString()}`,   pw / 2, 75, {'align': 'center'});
          doc.setFontSize(12);
          // Title and desc
          
          doc.fromHTML( layer.references, 10,100 ,{
            'width': 550,
          });
           this.footer(doc, pw, ph);

        }
       
        doc.save(`${new Date().toLocaleString()}_OBSRío_Magdalena.pdf`) ;
      });
     
      return true;
  }

  public createElementFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
  }
  public footer(doc: jsPDF, pw, ph) {

    doc.setFontSize(10);
    doc.line(15, ph - 20, pw, ph - 20); // horizontal line

    doc.text(
      `Observatorio del Río Magdalena - Universidad del Norte.
      Todos los Derechos Reservados 2020`,
      pw / 2, ph - 10, {'align': 'center'});

  }

  public header(doc: jsPDF, pw, ph) {
    const imgUN = new Image();
    imgUN.src = 'assets/img/LogoUninorte.png';
    doc.addImage(imgUN, 'png', 10, 10, 100, 31, 'uni','FAST');

    const imgObs = new Image();
    imgObs.src = 'assets/img/logo.png';
    doc.addImage(imgObs, 'png', pw - 90, 10, 80, 29, 'obs','FAST');

    doc.line(15, 45, pw - 15, 45); // horizontal line
  }

  public setConvention(doc: jsPDF, layer: any, pw, ph) {
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
