import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    // this.primengConfig.ripple = true;
  }
}
