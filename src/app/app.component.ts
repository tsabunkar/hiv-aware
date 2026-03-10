import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhatIsHivComponent } from './components/what-is-hiv/what-is-hiv.component';
import { HowItSpreadsComponent } from './components/how-it-spreads/how-it-spreads.component';
import { GetTestedComponent } from './components/get-tested/get-tested.component';
import { LivingWithHivComponent } from './components/living-with-hiv/living-with-hiv.component';
import { LearnFromChampsComponent } from './components/learn-from-champs/learn-from-champs.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WhatIsHivComponent,
    HowItSpreadsComponent,
    GetTestedComponent,
    LivingWithHivComponent,
    LearnFromChampsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HIV Awareness & Living Well';
}
