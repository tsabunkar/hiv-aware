import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo">
                <span class="logo-mark font-mono">HIV</span>
                <span class="logo-text font-display">Aware</span>
              </div>
              <p>Evidence-based HIV information in plain language. Know the facts. Break the stigma. Live fully.</p>
              <div class="footer-badges">
                <span class="badge font-mono">SCIENCE-BASED</span>
                <span class="badge font-mono">STIGMA-FREE</span>
              </div>
            </div>

            <div class="footer-col">
              <h5 class="font-mono">Information</h5>
              <ul>
                <li><a href="#what-is-hiv">What Is HIV?</a></li>
                <li><a href="#how-it-spreads">How It Spreads</a></li>
                <li><a href="#get-tested">If You Are Diagnosed</a></li>
                <li><a href="#living-with-hiv">Living With HIV</a></li>
              </ul>
            </div>

            <div class="footer-col" id="get-help">
              <h5 class="font-mono">Resources</h5>
              <ul>
                <li><a href="https://www.who.int/health-topics/hiv-aids" target="_blank" rel="noopener">WHO HIV/AIDS</a></li>
                <li><a href="https://www.unaids.org" target="_blank" rel="noopener">UNAIDS</a></li>
                <li><a href="https://www.cdc.gov/hiv" target="_blank" rel="noopener">CDC HIV Info</a></li>
                <li><a href="https://www.avert.org" target="_blank" rel="noopener">AVERT</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h5 class="font-mono">Quick Facts</h5>
              <div class="quick-facts">
                <div class="fact" *ngFor="let fact of facts">
                  <span class="fact-val">{{ fact.val }}</span>
                  <span class="fact-lbl">{{ fact.lbl }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="disclaimer">This website provides general health information for educational purposes only. It is not a substitute for professional medical advice. If you think you may have HIV, please consult a qualified healthcare provider.</p>
          <p class="copy font-mono">HIV AWARE — Breaking Stigma Through Knowledge &nbsp;|&nbsp; Information sourced from WHO, CDC, UNAIDS</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: var(--deep); border-top: 1px solid var(--border); }
    .footer-top { padding: 5rem 0; }
    .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 3rem; }
    .footer-brand .logo { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; }
    .logo-mark { font-size: 0.7rem; letter-spacing: 0.12em; background: var(--red); color: white; padding: 0.25rem 0.45rem; border-radius: 2px; }
    .logo-text { font-size: 1.3rem; font-weight: 700; color: var(--white); letter-spacing: -0.02em; }
    .footer-brand p { font-size: 0.875rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.25rem; }
    .footer-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .badge { font-size: 0.55rem; letter-spacing: 0.12em; border: 1px solid var(--border); color: var(--muted); padding: 0.2rem 0.6rem; border-radius: 2px; }
    .footer-col h5 { font-size: 0.65rem; letter-spacing: 0.18em; color: var(--red); text-transform: uppercase; margin-bottom: 1.25rem; }
    .footer-col ul { list-style: none; padding: 0; }
    .footer-col li { margin-bottom: 0.6rem; }
    .footer-col a { text-decoration: none; font-size: 0.875rem; color: var(--muted); transition: color 0.2s; }
    .footer-col a:hover { color: var(--white); }
    .quick-facts { display: flex; flex-direction: column; gap: 0.75rem; }
    .fact { display: flex; align-items: baseline; gap: 0.6rem; }
    .fact-val { font-family: \'Playfair Display\', serif; font-size: 1.3rem; font-weight: 700; color: var(--red); }
    .fact-lbl { font-size: 0.75rem; color: var(--muted); line-height: 1.3; }
    .footer-bottom { border-top: 1px solid var(--border); padding: 2rem 0; }
    .disclaimer { font-size: 0.75rem; color: rgba(245,242,238,0.3); line-height: 1.6; margin-bottom: 0.75rem; }
    .copy { font-size: 0.6rem; letter-spacing: 0.1em; color: rgba(245,242,238,0.2); }
    @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } }
  `]
})
export class FooterComponent {
  facts = [
    { val: "39M+", lbl: "People living with HIV globally" },
    { val: "U=U", lbl: "Undetectable is Untransmittable" },
    { val: "95%", lbl: "UNAIDS 95-95-95 treatment target" },
    { val: "1 pill", lbl: "Daily for most modern ART regimens" }
  ];
}
