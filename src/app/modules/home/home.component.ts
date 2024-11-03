import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

declare var $: any;
declare function HOME_INIT([]): any;
declare function INIT_SWIPPER([]):any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit() {
    setTimeout(() => {
      HOME_INIT($);
      INIT_SWIPPER($);
    }, 50);
  }
}
