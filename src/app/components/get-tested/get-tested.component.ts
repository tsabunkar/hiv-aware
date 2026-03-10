import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-tested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-tested.component.html',
  styleUrls: ['./get-tested.component.scss']
})
export class GetTestedComponent {
  steps = [
    {
      num: '01',
      title: 'Get Tested',
      urgency: 'Do this immediately',
      desc: 'Contact your doctor, a sexual health clinic, or local health department. HIV tests are quick, confidential, and often free. The sooner you know, the sooner you can act.',
      action: 'Find a testing center near you'
    },
    {
      num: '02',
      title: 'Ask About PEP',
      urgency: 'Within 72 hours of exposure',
      desc: 'If you believe you were exposed to HIV very recently (within 72 hours), ask a doctor about PEP (Post-Exposure Prophylaxis). It\'s a course of HIV medicines taken for 28 days that can prevent infection.',
      action: 'Go to an emergency room or clinic now'
    },
    {
      num: '03',
      title: 'Start Treatment',
      urgency: 'As soon as diagnosed',
      desc: 'If you test positive, start antiretroviral therapy (ART) as soon as possible — ideally the same day. Early treatment keeps you healthy and prevents transmission to partners.',
      action: 'Ask for a referral to an HIV specialist'
    },
    {
      num: '04',
      title: 'Tell Your Partners',
      urgency: 'As soon as you are able',
      desc: 'Notifying sexual partners so they can be tested is important. Many health departments offer partner notification assistance — a confidential service where health workers inform partners without revealing your name.',
      action: 'Talk to your healthcare provider about options'
    },
    {
      num: '05',
      title: 'Build Your Support',
      urgency: 'You don\'t have to do this alone',
      desc: 'Seek counseling, connect with HIV support groups, and lean on trusted people. Mental health is as important as physical health. Many people with HIV live thriving, fulfilling lives.',
      action: 'Find local support groups and counseling'
    }
  ];

  testTypes = [
    { name: 'Rapid Antigen/Antibody Test', time: 'Results in 20–30 min', window: 'Detects HIV 18–45 days after exposure', note: 'Available at clinics & pharmacies' },
    { name: 'Lab Antigen/Antibody Test', time: 'Results in a few days', window: 'Detects HIV 18–45 days after exposure', note: 'Most common test' },
    { name: 'Nucleic Acid Test (NAT)', time: 'Results in a few days', window: 'Detects HIV 10–33 days after exposure', note: 'Most accurate early test' },
    { name: 'Home Self-Test', time: 'Results in 20 min', window: 'Detects HIV 23–90 days after exposure', note: 'OraQuick and others available' },
  ];
}
