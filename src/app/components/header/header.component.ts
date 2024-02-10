import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {

    this.primengConfig.ripple = true;


    this.items = [
      {
        label: 'File',
        //routerLink: 'https://stackoverflow.com/questions/68434448/dynamically-add-menuitems-to-primeng-menu-after-angular-get-request'
      },
      {
        label: 'Edit',
        //icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ],
      },
      {
        label: 'O Link e sobre'
      },
      {
        label: 'Teste'
      }
    ];
  }

  // openMenu() {
  // this.menuVariable =! this.menuVariable;
  // this.menu_icon_variable =! this.menu_icon_variable;
  // }

}
