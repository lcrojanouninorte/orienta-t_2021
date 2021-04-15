import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"><b><a href="#" target="_blank">Uninorte - Onu Mujeres</a></b> 2021</span>
    <div class="socials">

      <a href="http://www.facebook.com/onumujeres" target="_blank" class="ion ion-social-facebook"></a>
      <a href="http://www.twitter.com/onumujeres" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.instagram.com/unwomen" target="_blank" class="ion ion-social-instagram"></a>
    </div>
  `,
})
export class FooterComponent {
}
