import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-spreads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-spreads.component.html',
  styleUrls: ['./how-it-spreads.component.scss']
})
export class HowItSpreadsComponent {
  canTransmit = [
    { method: 'Unprotected sex', detail: 'Anal sex carries the highest risk. Vaginal sex also transmits HIV. Oral sex is very low risk.' },
    { method: 'Sharing needles', detail: 'Sharing syringes, needles, or other drug-use equipment with someone who has HIV.' },
    { method: 'Blood transfusion', detail: 'Receiving blood products contaminated with HIV. Rare in countries with blood-screening programs.' },
    { method: 'Mother to child', detail: 'During pregnancy, birth, or breastfeeding. Preventable with proper treatment during pregnancy.' },
  ];

  cannotTransmit = [
    'Hugging or touching',
    'Sharing food or drinks',
    'Coughing or sneezing',
    'Mosquito or insect bites',
    'Saliva, tears, or sweat',
    'Using a toilet or shower',
    'Shaking hands',
    'Air or water',
  ];

  preventions = [
    { icon: '🛡️', label: 'Use condoms', sub: 'Every time. Consistently and correctly.' },
    { icon: '💉', label: 'PrEP', sub: 'Pre-exposure prophylaxis — a daily pill that prevents HIV.' },
    { icon: '🏥', label: 'PEP', sub: 'Post-exposure prophylaxis — taken within 72 hours of exposure.' },
    { icon: '🩺', label: 'Get tested', sub: 'Know your status and your partner\'s status.' },
    { icon: '♻️', label: 'Clean needles', sub: 'Never share injecting equipment.' },
    { icon: '🤱', label: 'Prenatal care', sub: 'ART during pregnancy prevents mother-to-child transmission.' },
  ];
}
