import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-living',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="living" id="living">
      <div class="container">
        <div class="section-header">
          <span class="section-tag font-mono">04 — Living With HIV</span>
          <h2 class="section-title font-display">Medications &amp; <em>Thriving</em></h2>
          <div class="divider"></div>
          <p class="section-intro">Living with HIV today looks very different from decades past. With modern treatment, HIV is a manageable chronic condition — like diabetes or hypertension.</p>
        </div>

        <div class="art-section">
          <div class="art-intro">
            <h3 class="font-display">Antiretroviral Therapy (ART)</h3>
            <p>ART is the cornerstone of HIV treatment. It does not cure HIV, but it keeps the virus suppressed — protecting your immune system and preventing transmission.</p>
            <div class="art-goal">
              <div class="goal-item">
                <span class="goal-num">3–6</span>
                <span class="goal-label">months to reach undetectable viral load</span>
              </div>
              <div class="goal-item">
                <span class="goal-num">1</span>
                <span class="goal-label">pill daily for most modern regimens</span>
              </div>
              <div class="goal-item">
                <span class="goal-num">0</span>
                <span class="goal-label">HIV transmissions when undetectable (U=U)</span>
              </div>
            </div>
          </div>
          <div class="art-visual">
            <div class="viral-meter">
              <div class="meter-label font-mono">VIRAL LOAD METER</div>
              <div class="meter-track">
                <div class="meter-bar detected">
                  <span class="bar-label">Without ART</span>
                  <span class="bar-num">High</span>
                </div>
                <div class="meter-bar undetectable">
                  <span class="bar-label">With ART</span>
                  <span class="bar-num">Undetectable</span>
                </div>
              </div>
              <p class="meter-note font-mono">Undetectable = Cannot transmit HIV</p>
            </div>
          </div>
        </div>

        <div class="drug-classes-section">
          <h3 class="sub-title font-display">How ART Medications Work</h3>
          <p class="sub-intro">HIV medications work in different ways to block the virus from replicating. Most people take a combination (called a regimen) that uses multiple classes.</p>
          <div class="drug-grid">
            <div class="drug-card" *ngFor="let drug of drugClasses">
              <div class="drug-header">
                <span class="drug-abbr font-mono">{{ drug.abbr }}</span>
                <span class="drug-name">{{ drug.name }}</span>
              </div>
              <p>{{ drug.howItWorks }}</p>
              <div class="drug-examples">
                <span class="ex-label font-mono">Examples</span>
                <div class="examples-list">
                  <span class="example-tag" *ngFor="let ex of drug.examples">{{ ex }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lifestyle-section" id="resources">
          <h3 class="sub-title font-display">Healthy Living With HIV</h3>
          <p class="sub-intro">Medication is only one part of the equation. A healthy lifestyle enhances treatment effectiveness and quality of life.</p>
          <div class="lifestyle-grid">
            <div class="lifestyle-item" *ngFor="let item of lifestyleItems">
              <div class="ls-icon">{{ item.icon }}</div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="resources-banner">
          <div class="banner-content">
            <h3 class="font-display">Global HIV Resources</h3>
            <p>These organizations provide evidence-based information, support, and access to treatment worldwide.</p>
          </div>
          <div class="resource-links">
            <a class="resource-link" *ngFor="let res of resources" href="{{ res.url }}" target="_blank" rel="noopener">
              <span class="res-org font-mono">{{ res.org }}</span>
              <span class="res-name">{{ res.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .living { padding: 7rem 0; background: var(--black); position: relative; }
    .section-header { margin-bottom: 4rem; }
    .section-tag { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--red); text-transform: uppercase; display: block; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
    .section-title em { font-style: italic; color: var(--red); }
    .divider { width: 60px; height: 3px; background: var(--red); margin: 1.5rem 0; }
    .section-intro { color: var(--muted); max-width: 560px; line-height: 1.7; }
    .art-section { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; margin-bottom: 6rem; background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 3rem; }
    .art-intro h3 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem; }
    .art-intro p { color: var(--muted); line-height: 1.7; margin-bottom: 2rem; }
    .art-goal { display: flex; flex-direction: column; gap: 1.5rem; }
    .goal-item { display: flex; align-items: center; gap: 1rem; }
    .goal-num { font-family: \'Playfair Display\', serif; font-size: 2.5rem; font-weight: 700; color: var(--red); line-height: 1; min-width: 60px; }
    .goal-label { font-size: 0.875rem; color: var(--muted); line-height: 1.4; }
    .viral-meter { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 2rem; }
    .meter-label { font-size: 0.6rem; letter-spacing: 0.2em; color: var(--muted); margin-bottom: 1.5rem; display: block; }
    .meter-track { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
    .meter-bar { display: flex; align-items: center; justify-content: space-between; height: 48px; padding: 0 1rem; border-radius: 3px; position: relative; }
    .meter-bar.detected { background: rgba(200,16,46,0.15); border: 1px solid rgba(200,16,46,0.3); flex: 1; }
    .meter-bar.undetectable { background: rgba(26,176,160,0.1); border: 1px solid rgba(26,176,160,0.3); flex: 0 0 30%; width: 30%; }
    .bar-label { font-size: 0.75rem; color: var(--muted); }
    .bar-num { font-family: \'DM Mono\', monospace; font-size: 0.75rem; font-weight: 500; }
    .meter-bar.detected .bar-num { color: var(--red); }
    .meter-bar.undetectable .bar-num { color: var(--teal); }
    .meter-note { font-size: 0.65rem; color: var(--teal); letter-spacing: 0.08em; text-align: center; }
    .sub-title { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
    .sub-intro { color: var(--muted); margin-bottom: 2rem; line-height: 1.7; max-width: 600px; }
    .drug-classes-section { margin-bottom: 5rem; }
    .drug-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .drug-card { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 1.75rem; transition: border-color 0.3s; }
    .drug-card:hover { border-color: rgba(200,16,46,0.3); }
    .drug-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
    .drug-abbr { font-size: 0.65rem; letter-spacing: 0.12em; color: var(--red); background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.2); padding: 0.2rem 0.5rem; border-radius: 2px; }
    .drug-name { font-weight: 500; font-size: 0.9rem; color: var(--white); }
    .drug-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; }
    .drug-examples { }
    .ex-label { font-size: 0.6rem; letter-spacing: 0.15em; color: var(--muted); display: block; margin-bottom: 0.5rem; }
    .examples-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .example-tag { font-size: 0.7rem; background: var(--card); border: 1px solid var(--border); border-radius: 2px; padding: 0.15rem 0.5rem; color: var(--muted); }
    .lifestyle-section { margin-bottom: 5rem; }
    .lifestyle-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
    .lifestyle-item { background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 1.5rem; text-align: center; transition: border-color 0.3s; }
    .lifestyle-item:hover { border-color: var(--amber); }
    .ls-icon { font-size: 2rem; margin-bottom: 0.75rem; }
    .lifestyle-item h4 { font-family: \'Playfair Display\', serif; font-size: 1rem; color: var(--white); margin-bottom: 0.5rem; }
    .lifestyle-item p { font-size: 0.8rem; color: var(--muted); line-height: 1.5; margin: 0; }
    .resources-banner { background: linear-gradient(135deg, var(--card), var(--surface)); border: 1px solid var(--border); border-radius: 4px; padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
    .banner-content h3 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.75rem; }
    .banner-content p { color: var(--muted); line-height: 1.7; }
    .resource-links { display: flex; flex-direction: column; gap: 0.75rem; justify-content: center; }
    .resource-link { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: var(--black); border: 1px solid var(--border); border-radius: 3px; text-decoration: none; transition: border-color 0.2s; }
    .resource-link:hover { border-color: var(--red); }
    .res-org { font-size: 0.6rem; letter-spacing: 0.15em; color: var(--red); }
    .res-name { font-size: 0.875rem; color: var(--white); }
    @media (max-width: 1024px) { .drug-grid { grid-template-columns: repeat(2, 1fr); } .lifestyle-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 900px) { .art-section { grid-template-columns: 1fr; } .resources-banner { grid-template-columns: 1fr; } }
    @media (max-width: 600px) { .drug-grid { grid-template-columns: 1fr; } .lifestyle-grid { grid-template-columns: 1fr; } }
  `]
})
export class LivingComponent {
  drugClasses = [
    { abbr: "NRTIs", name: "Nucleoside Reverse Transcriptase Inhibitors", howItWorks: "Block the reverse transcriptase enzyme, preventing HIV from copying its genetic material into the host cell DNA.", examples: ["Tenofovir", "Emtricitabine", "Lamivudine", "Abacavir"] },
    { abbr: "NNRTIs", name: "Non-Nucleoside RTIs", howItWorks: "Bind to and disable the reverse transcriptase enzyme, stopping HIV replication inside cells.", examples: ["Efavirenz", "Rilpivirine", "Doravirine", "Nevirapine"] },
    { abbr: "PIs", name: "Protease Inhibitors", howItWorks: "Block the protease enzyme that HIV uses to assemble new copies of the virus from infected cells.", examples: ["Darunavir", "Atazanavir", "Lopinavir", "Ritonavir"] },
    { abbr: "INSTIs", name: "Integrase Strand Transfer Inhibitors", howItWorks: "Prevent HIV from integrating its DNA into the chromosomes of human immune cells — the most modern and preferred class.", examples: ["Dolutegravir", "Bictegravir", "Raltegravir", "Cabotegravir"] },
    { abbr: "CCR5", name: "CCR5 Antagonists", howItWorks: "Block a receptor on the surface of CD4 cells that HIV uses as an entry point. Only works for CCR5-tropic HIV strains.", examples: ["Maraviroc"] },
    { abbr: "FIs", name: "Fusion Inhibitors", howItWorks: "Prevent HIV from fusing with and entering human CD4 cells, stopping the infection process at the very first step.", examples: ["Enfuvirtide (T-20)", "Ibalizumab"] }
  ];
  lifestyleItems = [
    { icon: "🥗", title: "Nutrition", desc: "A balanced diet supports immune function. Focus on whole foods, lean proteins, fruits, and vegetables." },
    { icon: "🏃", title: "Exercise", desc: "Regular physical activity strengthens the immune system and improves mental health and energy levels." },
    { icon: "😴", title: "Sleep", desc: "Adequate sleep is critical for immune health. Aim for 7–9 hours per night consistently." },
    { icon: "🧠", title: "Mental Health", desc: "Depression and anxiety are common with HIV. Seek therapy, join support groups, and prioritize mental wellness." },
    { icon: "🚭", title: "Avoid Substances", desc: "Smoking, heavy alcohol, and drug use weaken the immune system and interfere with medication effectiveness." },
    { icon: "💉", title: "Vaccinations", desc: "Stay up to date on vaccines (flu, pneumococcal, hepatitis A/B). HIV weakens immunity, making vaccines critical." },
    { icon: "🔁", title: "Adherence", desc: "Take your ART medication every day, at the same time. Missing doses allows the virus to replicate and become resistant." },
    { icon: "🩺", title: "Regular Check-ups", desc: "See your HIV specialist every 3–6 months. Monitor your CD4 count and viral load regularly." }
  ];
  resources = [
    { org: "WHO", name: "World Health Organization — HIV/AIDS Program", url: "https://www.who.int/health-topics/hiv-aids" },
    { org: "UNAIDS", name: "Joint UN Programme on HIV/AIDS", url: "https://www.unaids.org" },
    { org: "CDC", name: "US Centers for Disease Control — HIV Info", url: "https://www.cdc.gov/hiv" },
    { org: "AVERT", name: "Global HIV & AIDS Education Charity", url: "https://www.avert.org" }
  ];
}
