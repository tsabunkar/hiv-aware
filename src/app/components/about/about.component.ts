import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="section-header">
          <span class="section-tag font-mono">01 — What Is HIV</span>
          <h2 class="section-title font-display">Understanding <em>HIV</em></h2>
          <div class="divider"></div>
        </div>
        <div class="about-grid">
          <div class="about-main">
            <p class="lead-text">HIV stands for <strong>Human Immunodeficiency Virus</strong>. It attacks the body's immune system — specifically the CD4 cells that help the body fight infections.</p>
            <p>If left untreated, HIV can progress to AIDS (Acquired Immunodeficiency Syndrome). With modern medicine, people with HIV live long, healthy lives and never develop AIDS.</p>
            <p>HIV is <em>not</em> the same as AIDS. AIDS is a condition that can develop if HIV goes untreated. Most people with HIV today never reach this stage.</p>
            <div class="callout">
              <div class="callout-icon">💡</div>
              <p><strong>Simple analogy:</strong> HIV is the virus (the cause). AIDS is the most severe late stage (the effect — preventable with treatment).</p>
            </div>
          </div>
          <div class="about-sidebar">
            <div class="info-card" *ngFor="let card of infoCards">
              <div class="card-icon">{{ card.icon }}</div>
              <h4>{{ card.title }}</h4>
              <p>{{ card.text }}</p>
            </div>
          </div>
        </div>
        <div class="stages-section">
          <h3 class="stages-title font-display">The Three Stages of HIV</h3>
          <div class="stages-grid">
            <div class="stage-card" *ngFor="let stage of stages">
              <div class="stage-number font-mono">{{ stage.num }}</div>
              <h4>{{ stage.title }}</h4>
              <p>{{ stage.desc }}</p>
              <ul><li *ngFor="let point of stage.points">{{ point }}</li></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about { padding: 7rem 0; background: var(--deep); position: relative; }
    .about::before { content: \'\'; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--red), transparent); }
    .section-header { margin-bottom: 4rem; }
    .section-tag { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--red); text-transform: uppercase; display: block; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
    .section-title em { font-style: italic; color: var(--red); }
    .divider { width: 60px; height: 3px; background: var(--red); margin-top: 1.5rem; }
    .about-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 5rem; margin-bottom: 6rem; }
    .lead-text { font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; color: var(--white); }
    p { color: var(--muted); line-height: 1.8; margin-bottom: 1.25rem; }
    p strong { color: var(--white); }
    p em { color: var(--teal); font-style: normal; font-weight: 500; }
    .callout { display: flex; gap: 1rem; background: rgba(26,176,160,0.08); border-left: 3px solid var(--teal); padding: 1.25rem 1.5rem; margin-top: 2rem; }
    .callout-icon { font-size: 1.25rem; flex-shrink: 0; }
    .callout p { margin: 0; }
    .callout strong { color: var(--teal); }
    .info-card { background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 1.75rem; margin-bottom: 1rem; transition: border-color 0.3s, transform 0.3s; }
    .info-card:hover { border-color: rgba(200,16,46,0.3); transform: translateX(4px); }
    .card-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
    .info-card h4 { font-family: \'Playfair Display\', serif; font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--white); }
    .info-card p { font-size: 0.875rem; margin: 0; line-height: 1.6; }
    .stages-section { margin-top: 1rem; }
    .stages-title { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 2.5rem; }
    .stages-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .stage-card { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 2rem; transition: border-color 0.3s; }
    .stage-card:hover { border-color: var(--red); }
    .stage-number { font-size: 0.65rem; letter-spacing: 0.2em; color: var(--red); margin-bottom: 1rem; display: block; }
    .stage-card h4 { font-family: \'Playfair Display\', serif; font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--white); }
    .stage-card p { font-size: 0.875rem; margin-bottom: 1rem; }
    .stage-card ul { list-style: none; padding: 0; }
    .stage-card li { font-size: 0.8rem; color: var(--muted); padding: 0.3rem 0 0.3rem 1rem; border-bottom: 1px solid var(--border); position: relative; }
    .stage-card li::before { content: \'—\'; position: absolute; left: 0; color: var(--red); }
    @media (max-width: 1024px) { .about-grid { grid-template-columns: 1fr; gap: 3rem; } .stages-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent {
  infoCards = [
    { icon: "🦠", title: "What HIV Does", text: "HIV targets CD4+ T-cells — the commanders of your immune system. Without treatment, your body loses its ability to fight disease." },
    { icon: "🔬", title: "How It Is Detected", text: "A simple blood or saliva test can detect HIV. Many clinics offer free, confidential testing. Early detection saves lives." },
    { icon: "💊", title: "It Is Manageable", text: "Antiretroviral therapy (ART) keeps the virus undetectable. People on treatment live normal, full lifespans." }
  ];
  stages = [
    { num: "Stage 01", title: "Acute HIV Infection", desc: "Occurs 2–4 weeks after exposure. The virus multiplies rapidly in the body.", points: ["Flu-like symptoms may appear", "Fever, swollen glands, sore throat", "Very high viral load — highly contagious", "Most people do not know they are infected"] },
    { num: "Stage 02", title: "Chronic HIV Infection", desc: "Virus is active but reproducing slowly. Can last 10+ years without symptoms.", points: ["Often no visible symptoms", "Still transmissible to others", "ART can keep you at this stage indefinitely", "Viral load rises gradually if untreated"] },
    { num: "Stage 03", title: "AIDS", desc: "Late-stage HIV when the immune system is severely damaged. Preventable with treatment.", points: ["CD4 count below 200 cells/mm3", "Opportunistic infections develop", "Very high viral load", "Entirely preventable with ART treatment"] }
  ];
}
