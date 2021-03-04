import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  constructor(private accessChecker: NbAccessChecker) { }
  getSubMenuItem = function (subMenuItems: NbMenuItem[]) {
    if (subMenuItems) {
      for (let i = 0; i < subMenuItems.length; i++) {
        if (subMenuItems[i].data) { // Check if menu item has dada.permision
          this.accessChecker.isGranted(
            subMenuItems[i].data.permission, 'all',
          ).subscribe(res => {
            subMenuItems[i].hidden = !res;
          });
        }
        this.getSubMenuItem(subMenuItems[i].children);
        // if (found) return found;
      }
    }
  };

  setMenuItemVisibility(menuItems: NbMenuItem[]) {
    const menuItem = this.getSubMenuItem(menuItems);
    if (menuItem == null) return;
    // Verify freturnet menu item if user has som permision
    // this.accessChecker.isGranted(menuItem.data.permission, 'all').subscribe(res => { menuItem.hidden = !res; });
  }

}
