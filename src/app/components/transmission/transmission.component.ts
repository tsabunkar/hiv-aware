import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transmission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="transmission" id="transmission">
      <div class="container">
        <div class="section-header">
          <span class="section-tag font-mono">02 — How It Spreads</span>
          <h2 class="section-title font-display">How HIV <em>Spreads</em></h2>
          <div class="divider"></div>
          <p class="section-intro">HIV is transmitted through specific body fluids. It is NOT spread through casual contact. Understanding the facts prevents stigma and saves lives.</p>
        </div>

        <div class="transmission-layout">
          <div class="ways-column">
            <h3 class="col-title">
              <span class="col-badge yes">HOW IT SPREADS</span>
            </h3>
            <div class="way-card yes" *ngFor="let way of spreadsWays">
              <div class="way-icon">{{ way.icon }}</div>
              <div class="way-body">
                <h4>{{ way.title }}</h4>
                <p>{{ way.desc }}</p>
              </div>
            </div>
          </div>

          <div class="vs-divider">
            <div class="vs-line"></div>
            <span class="vs-label font-mono">vs</span>
            <div class="vs-line"></div>
          </div>

          <div class="ways-column">
            <h3 class="col-title">
              <span class="col-badge no">HOW IT DOES NOT SPREAD</span>
            </h3>
            <div class="way-card no" *ngFor="let way of doesNotSpread">
              <div class="way-icon">{{ way.icon }}</div>
              <div class="way-body">
                <h4>{{ way.title }}</h4>
                <p>{{ way.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="risk-section">
          <h3 class="risk-title font-display">Risk Reduction</h3>
          <p class="risk-intro">There are highly effective tools to prevent HIV transmission — for both HIV-negative and HIV-positive people.</p>
          <div class="risk-grid">
            <div class="risk-card" *ngFor="let item of riskItems">
              <div class="risk-badge font-mono">{{ item.badge }}</div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
              <div class="effectiveness">
                <div class="eff-bar">
                  <div class="eff-fill" [style.width]="item.effectiveness + '%'"></div>
                </div>
                <span class="eff-label font-mono">{{ item.effectiveness }}% effective when used correctly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transmission { padding: 7rem 0; background: var(--black); position: relative; }
    .section-header { margin-bottom: 4rem; }
    .section-tag { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--red); text-transform: uppercase; display: block; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
    .section-title em { font-style: italic; color: var(--red); }
    .divider { width: 60px; height: 3px; background: var(--red); margin-top: 1.5rem; margin-bottom: 1.5rem; }
    .section-intro { color: var(--muted); max-width: 560px; line-height: 1.7; }
    .transmission-layout { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; margin-bottom: 6rem; }
    .col-title { margin-bottom: 1.5rem; }
    .col-badge { display: inline-block; font-size: 0.65rem; letter-spacing: 0.12em; padding: 0.3rem 0.75rem; border-radius: 2px; font-family: \'DM Mono\', monospace; }
    .col-badge.yes { background: rgba(200,16,46,0.15); color: var(--red); border: 1px solid rgba(200,16,46,0.3); }
    .col-badge.no { background: rgba(26,176,160,0.1); color: var(--teal); border: 1px solid rgba(26,176,160,0.3); }
    .way-card { display: flex; gap: 1rem; padding: 1.25rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border); background: var(--surface); transition: border-color 0.3s; }
    .way-card.yes:hover { border-color: rgba(200,16,46,0.4); }
    .way-card.no:hover { border-color: rgba(26,176,160,0.4); }
    .way-card.yes { border-left: 3px solid var(--red); }
    .way-card.no { border-left: 3px solid var(--teal); }
    .way-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 0.1rem; }
    .way-body h4 { font-size: 0.95rem; font-weight: 500; color: var(--white); margin-bottom: 0.3rem; }
    .way-body p { font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5; }
    .vs-divider { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; padding: 0 1rem; }
    .vs-line { flex: 1; width: 1px; background: var(--border); }
    .vs-label { font-size: 0.75rem; color: var(--muted); letter-spacing: 0.1em; }
    .risk-section { margin-top: 2rem; }
    .risk-title { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem; }
    .risk-intro { color: var(--muted); margin-bottom: 2.5rem; }
    .risk-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
    .risk-card { background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 1.75rem; transition: border-color 0.3s; }
    .risk-card:hover { border-color: var(--amber); }
    .risk-badge { font-size: 0.6rem; letter-spacing: 0.15em; color: var(--amber); background: rgba(232,160,32,0.1); border: 1px solid rgba(232,160,32,0.25); display: inline-block; padding: 0.2rem 0.6rem; border-radius: 2px; margin-bottom: 1rem; }
    .risk-card h4 { font-family: \'Playfair Display\', serif; font-size: 1.05rem; color: var(--white); margin-bottom: 0.5rem; }
    .risk-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; }
    .eff-bar { height: 3px; background: var(--border); border-radius: 2px; margin-bottom: 0.4rem; }
    .eff-fill { height: 100%; background: var(--amber); border-radius: 2px; transition: width 0.6s; }
    .eff-label { font-size: 0.65rem; color: var(--muted); letter-spacing: 0.05em; }
    @media (max-width: 900px) { .transmission-layout { grid-template-columns: 1fr; } .vs-divider { display: none; } .risk-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .risk-grid { grid-template-columns: 1fr; } }
  `]
})
export class TransmissionComponent {
  spreadsWays = [
    { icon: "🩸", title: "Blood", desc: "Sharing needles, syringes, or other drug injection equipment. Blood transfusions with untested blood." },
    { icon: "💉", title: "Sexual Transmission", desc: "Unprotected vaginal, anal, or oral sex with an HIV-positive partner who has a detectable viral load." },
    { icon: "🤱", title: "Mother to Child", desc: "During pregnancy, childbirth, or breastfeeding. Treatment during pregnancy dramatically reduces this risk." },
    { icon: "🩹", title: "Needlestick Injuries", desc: "Healthcare workers can be exposed through accidental needlestick injuries from HIV-positive patients." }
  ];
  doesNotSpread = [
    { icon: "🤝", title: "Casual Contact", desc: "Shaking hands, hugging, sharing toilets, or casual kissing does not transmit HIV." },
    { icon: "🦟", title: "Insects or Mosquitoes", desc: "HIV cannot be transmitted through insect bites. The virus does not survive in insects." },
    { icon: "💧", title: "Air or Water", desc: "Breathing the same air, sharing pools, or using the same water supply cannot spread HIV." },
    { icon: "🍽️", title: "Sharing Food or Drinks", desc: "Eating together or sharing utensils does not spread HIV — the virus cannot survive in saliva." }
  ];
  riskItems = [
    { badge: "PREVENTION", title: "PrEP", desc: "Pre-Exposure Prophylaxis is a daily pill for HIV-negative people that drastically reduces transmission risk.", effectiveness: 99 },
    { badge: "PROTECTION", title: "Condoms", desc: "Male and female condoms are highly effective when used correctly and consistently every time.", effectiveness: 97 },
    { badge: "EMERGENCY", title: "PEP", desc: "Post-Exposure Prophylaxis is emergency medication taken within 72 hours of potential HIV exposure.", effectiveness: 92 },
    { badge: "TREATMENT", title: "U=U", desc: "Undetectable = Untransmittable. People on effective ART with undetectable viral loads cannot transmit HIV.", effectiveness: 100 }
  ];
}
