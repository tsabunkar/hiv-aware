import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-is-hiv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-is-hiv.component.html',
  styleUrls: ['./what-is-hiv.component.scss']
})
export class WhatIsHivComponent {
  facts = [
    {
      icon: '🧬',
      title: 'A Virus, Not a Sentence',
      text: 'HIV (Human Immunodeficiency Virus) attacks the body\'s immune system — specifically CD4 cells (T cells) that help fight infection. With modern treatment, people with HIV live long, healthy lives.'
    },
    {
      icon: '⚠️',
      title: 'HIV vs. AIDS',
      text: 'HIV is the virus. AIDS (Acquired Immunodeficiency Syndrome) is a stage of HIV infection that occurs when the immune system is severely damaged. With treatment, most people with HIV never develop AIDS.'
    },
    {
      icon: '💊',
      title: 'No Cure, But Treatable',
      text: 'There is currently no cure for HIV, but antiretroviral therapy (ART) controls the virus so effectively that it becomes undetectable in the blood — meaning it cannot be sexually transmitted.'
    },
    {
      icon: '🌍',
      title: 'It Affects Everyone',
      text: 'HIV does not discriminate. It can affect anyone, regardless of age, gender, sexuality, or background. Stigma is the biggest barrier to testing and treatment. Understanding breaks that barrier.'
    }
  ];

  stages = [
    { phase: 'Acute HIV', time: '2–4 weeks after infection', desc: 'Flu-like symptoms may appear. The virus multiplies rapidly. Very contagious at this stage.', color: '#c0392b' },
    { phase: 'Chronic HIV', time: 'Months to years', desc: 'The virus is active but reproduces at low levels. May have no symptoms. Without treatment, this stage can last a decade.', color: '#d4956a' },
    { phase: 'AIDS', time: 'If untreated', desc: 'The immune system is severely compromised. Opportunistic infections occur. CD4 count drops below 200. Preventable with early treatment.', color: '#5a5750' },
  ];
}
