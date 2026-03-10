import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatIsHivComponent } from '../../components/what-is-hiv/what-is-hiv.component';
import { HowItSpreadsComponent } from '../../components/how-it-spreads/how-it-spreads.component';
import { GetTestedComponent } from '../../components/get-tested/get-tested.component';
import { LivingWithHivComponent } from '../../components/living-with-hiv/living-with-hiv.component';
import { LearnFromChampsComponent } from '../../components/learn-from-champs/learn-from-champs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    WhatIsHivComponent,
    HowItSpreadsComponent,
    GetTestedComponent,
    LivingWithHivComponent,
    LearnFromChampsComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>

      <!-- Defer loading components until they are about to enter viewport -->
      @defer (on viewport) {
        <app-what-is-hiv></app-what-is-hiv>
      } @placeholder {
        <div class="section-placeholder"></div>
      }

      @defer (on viewport) {
        <app-how-it-spreads></app-how-it-spreads>
      } @placeholder {
        <div class="section-placeholder"></div>
      }

      @defer (on viewport) {
        <app-get-tested></app-get-tested>
      } @placeholder {
        <div class="section-placeholder"></div>
      }

      @defer (on viewport) {
        <app-living-with-hiv></app-living-with-hiv>
      } @placeholder {
        <div class="section-placeholder"></div>
      }

      @defer (on viewport) {
        <app-learn-from-champs></app-learn-from-champs>
      } @placeholder {
        <div class="section-placeholder"></div>
      }
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .section-placeholder {
      min-height: 200px;
      background: var(--black);
    }
  `]
})
export class HomeComponent {}
