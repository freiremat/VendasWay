import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-privacyPolicy',
  templateUrl: './privacyPolicy.component.html'
})
@Output()

export class PrivacyPolicyComponent {

  constructor(private router: Router){}

  privacyPolicy(){
    alert('teste')
  }

  teste = false;
}
