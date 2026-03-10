import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infected',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="infected" id="infected">
      <div class="infected-bg-text font-display">ACT</div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag font-mono">03 — If You Are Infected</span>
          <h2 class="section-title font-display">Newly <em>Diagnosed</em>?<br>Here Is What To Do</h2>
          <div class="divider"></div>
          <p class="section-intro">A positive HIV diagnosis can feel overwhelming. But this is not the end — it is the beginning of taking control of your health.</p>
        </div>

        <div class="steps-section">
          <div class="step-card" *ngFor="let step of steps; let i = index">
            <div class="step-left">
              <div class="step-num font-mono">{{ step.number }}</div>
              <div class="step-line" *ngIf="i < steps.length - 1"></div>
            </div>
            <div class="step-right">
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
              <div class="step-tips">
                <div class="tip" *ngFor="let tip of step.tips">
                  <span class="tip-dot"></span>
                  {{ tip }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="emotional-section">
          <div class="emotional-content">
            <div class="eq">&#8220;</div>
            <blockquote>
              HIV does not define you. Millions of people are living healthy, fulfilling,
              loving lives with HIV. You are not alone — and with today's treatment, you can thrive.
            </blockquote>
            <cite class="font-mono">— UNAIDS, World AIDS Report</cite>
          </div>
          <div class="support-cards">
            <div class="support-card" *ngFor="let card of supportCards">
              <div class="support-icon">{{ card.icon }}</div>
              <h4>{{ card.title }}</h4>
              <p>{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .infected { padding: 7rem 0; background: var(--deep); position: relative; overflow: hidden; }
    .infected::before { content: \'\'; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--red), transparent); }
    .infected-bg-text { position: absolute; right: -3rem; bottom: -3rem; font-size: clamp(120px, 20vw, 350px); font-weight: 900; color: transparent; -webkit-text-stroke: 1px rgba(200,16,46,0.06); pointer-events: none; user-select: none; }
    .section-header { margin-bottom: 4rem; }
    .section-tag { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--red); text-transform: uppercase; display: block; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; }
    .section-title em { font-style: italic; color: var(--red); }
    .divider { width: 60px; height: 3px; background: var(--red); margin: 1.5rem 0; }
    .section-intro { color: var(--muted); max-width: 560px; line-height: 1.7; }
    .steps-section { margin-bottom: 5rem; }
    .step-card { display: grid; grid-template-columns: 80px 1fr; gap: 0; margin-bottom: 0; }
    .step-left { display: flex; flex-direction: column; align-items: center; padding-top: 0.5rem; }
    .step-num { font-size: 0.65rem; letter-spacing: 0.15em; color: var(--red); background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.2); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .step-line { flex: 1; width: 1px; background: var(--border); margin: 0.5rem 0; min-height: 20px; }
    .step-right { padding: 0 0 3rem 1.5rem; }
    .step-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
    .step-right h3 { font-family: \'Playfair Display\', serif; font-size: 1.4rem; font-weight: 700; color: var(--white); margin-bottom: 0.75rem; }
    .step-right p { color: var(--muted); line-height: 1.7; margin-bottom: 1rem; }
    .step-tips { display: flex; flex-direction: column; gap: 0.5rem; }
    .tip { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.875rem; color: var(--muted); }
    .tip-dot { width: 5px; height: 5px; background: var(--red); border-radius: 50%; flex-shrink: 0; margin-top: 0.45rem; }
    .emotional-section { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 3rem; }
    .eq { font-family: \'Playfair Display\', serif; font-size: 6rem; line-height: 0.5; color: var(--red); opacity: 0.3; margin-bottom: 1rem; }
    blockquote { font-family: \'Playfair Display\', serif; font-size: 1.3rem; font-style: italic; line-height: 1.6; color: var(--white); margin-bottom: 1.5rem; }
    cite { font-size: 0.7rem; letter-spacing: 0.12em; color: var(--muted); }
    .support-cards { display: flex; flex-direction: column; gap: 1rem; }
    .support-card { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 1.25rem 1.5rem; display: flex; gap: 1rem; align-items: flex-start; }
    .support-icon { font-size: 1.4rem; flex-shrink: 0; }
    .support-card h4 { font-size: 0.95rem; font-weight: 500; color: var(--white); margin-bottom: 0.3rem; }
    .support-card p { font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5; }
    @media (max-width: 900px) { .emotional-section { grid-template-columns: 1fr; } }
    @media (max-width: 600px) { .step-card { grid-template-columns: 50px 1fr; } }
  `]
})
export class InfectedComponent {
  steps = [
    {
      number: "01",
      icon: "🧘",
      title: "Take a Breath — You Will Be Okay",
      desc: "Your first reaction may be fear, shock, or denial. All of these are normal. HIV is a manageable chronic condition, not a death sentence. People diagnosed today can live normal lifespans.",
      tips: ["Allow yourself to feel your emotions without judgment", "Avoid making major life decisions immediately", "Reach out to a trusted person or counselor for support", "Remember: millions of people live full, healthy lives with HIV"]
    },
    {
      number: "02",
      icon: "🏥",
      title: "See a Doctor or HIV Specialist",
      desc: "As soon as possible, schedule an appointment with a healthcare provider experienced in HIV care. They will run blood tests and help you understand your health status.",
      tips: ["Ask about your CD4 count and viral load — these guide treatment", "Look for an HIV clinic or infectious disease specialist", "Government health programs often provide free or low-cost HIV care", "Bring a trusted friend or family member for support if needed"]
    },
    {
      number: "03",
      icon: "💊",
      title: "Start Antiretroviral Therapy (ART)",
      desc: "Modern HIV treatment is a once-daily pill that keeps the virus suppressed. The sooner you start, the better. Most people reach an undetectable viral load within 3–6 months.",
      tips: ["ART is recommended for everyone diagnosed with HIV, at any CD4 count", "Side effects are generally mild and often go away after a few weeks", "Taking your medication daily is the most important thing you can do", "Once undetectable, you cannot transmit HIV to sexual partners (U=U)"]
    },
    {
      number: "04",
      icon: "🛡️",
      title: "Protect Your Partners",
      desc: "Being honest with sexual partners is both ethically important and, in some regions, legally required. There are effective tools to protect the people you care about.",
      tips: ["Use condoms consistently until your viral load is undetectable", "Tell partners about your status so they can consider PrEP", "Ask your doctor about partner testing and counseling services", "Undetectable viral load means you cannot transmit HIV sexually"]
    },
    {
      number: "05",
      icon: "🌱",
      title: "Build Your Support System",
      desc: "HIV is easier to manage when you are not alone. Support groups, counselors, and community organizations can provide emotional and practical support.",
      tips: ["Consider joining an HIV support group (in-person or online)", "Mental health support is a vital part of HIV care", "Stigma still exists — choose who you disclose to carefully", "You are not obligated to disclose to everyone — only those at risk"]
    }
  ];
  supportCards = [
    { icon: "📞", title: "National HIV Hotlines", text: "Free, confidential information and referrals 24/7. Trained counselors can help you find local resources." },
    { icon: "🏘️", title: "Community Support Groups", text: "Peer support from others living with HIV. Shared experiences reduce isolation and stigma." },
    { icon: "🧠", title: "Mental Health Counseling", text: "A diagnosis can trigger anxiety or depression. Counseling and therapy are important parts of HIV care." }
  ];
}
