import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-living-with-hiv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './living-with-hiv.component.html',
  styleUrls: ['./living-with-hiv.component.scss']
})
export class LivingWithHivComponent {
  artMeds = [
    { name: 'NRTIs', full: 'Nucleoside Reverse Transcriptase Inhibitors', examples: 'Tenofovir, Emtricitabine', role: 'Block HIV from copying its genetic material inside cells.' },
    { name: 'NNRTIs', full: 'Non-Nucleoside RTIs', examples: 'Efavirenz, Rilpivirine', role: 'Bind directly to reverse transcriptase enzyme to block HIV replication.' },
    { name: 'PIs', full: 'Protease Inhibitors', examples: 'Darunavir, Atazanavir', role: 'Block the protease enzyme HIV needs to make infectious copies.' },
    { name: 'INSTIs', full: 'Integrase Inhibitors', examples: 'Dolutegravir, Bictegravir', role: 'Prevent HIV DNA from integrating into the host cell nucleus.' },
  ];

  pillars = [
    { icon: '💊', title: 'Take ART Daily', desc: 'Antiretroviral therapy must be taken every day without skipping. Consistency is what keeps viral load undetectable.' },
    { icon: '📅', title: 'Regular Checkups', desc: 'Visit your HIV doctor every 3–6 months. Blood tests monitor your CD4 count and viral load to ensure treatment is working.' },
    { icon: '🥗', title: 'Healthy Lifestyle', desc: 'A nutritious diet, regular exercise, adequate sleep, and avoiding smoking strengthen your immune system.' },
    { icon: '🧠', title: 'Mental Wellbeing', desc: 'Depression and anxiety are common with HIV diagnosis. Counseling, therapy, and support groups help immensely.' },
    { icon: '🚭', title: 'Avoid Drug & Alcohol Abuse', desc: 'Substance use can interfere with adherence to medication and weaken the immune system.' },
    { icon: '👨‍👩‍👧', title: 'Healthy Relationships', desc: 'Disclose your status to sexual partners. Use protection. U=U means with an undetectable viral load, you cannot transmit HIV sexually.' },
  ];

  milestones = [
    { label: 'Within days of starting ART', event: 'Viral load starts dropping' },
    { label: '1–3 months', event: 'Many people reach undetectable viral load' },
    { label: '3–6 months', event: 'First follow-up bloodwork to confirm undetectable' },
    { label: 'Ongoing', event: 'Maintain undetectable status with daily medication' },
    { label: 'Undetectable = Untransmittable', event: 'U=U — you cannot sexually transmit HIV' },
  ];
}
