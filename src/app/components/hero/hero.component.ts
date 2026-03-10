import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <!-- Grain overlay -->
      <div class="grain"></div>

      <!-- Background grid lines -->
      <div class="grid-lines">
        <div *ngFor="let i of lines" class="line"></div>
      </div>

      <!-- Big decorative text -->
      <div class="bg-text">HIV</div>

      <div class="hero-content container">
        <div class="hero-label">
          <span class="label-dot"></span>
          <span class="font-mono">World Health Awareness</span>
        </div>

        <h1 class="hero-title">
          <span class="line-1">Know The</span>
          <em class="line-2">Truth</em>
          <span class="line-3">About HIV</span>
        </h1>

        <p class="hero-sub">
          HIV is not a death sentence. With the right knowledge, prevention
          strategies, and modern treatment, millions live full, healthy lives.
          Start here.
        </p>

        <div class="hero-actions">
          <a href="#what-is-hiv" class="btn-primary">Learn About HIV</a>
          <a href="#get-tested" class="btn-ghost">Recently Diagnosed?</a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">39M</span>
            <span class="stat-label">People living with HIV worldwide</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">29M</span>
            <span class="stat-label"
              >On life-saving antiretroviral therapy</span
            >
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">U=U</span>
            <span class="stat-label">Undetectable = Untransmittable</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-hint">
        <span class="font-mono">Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(
            ellipse at 70% 50%,
            rgba(200, 16, 46, 0.12) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse at 20% 80%,
            rgba(26, 176, 160, 0.05) 0%,
            transparent 50%
          ),
          var(--black);
      }

      .grain {
        position: absolute;
        inset: -50%;
        width: 200%;
        height: 200%;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        animation: grain 8s steps(1) infinite;
        pointer-events: none;
      }

      .grid-lines {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: space-around;
        pointer-events: none;
      }

      .line {
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          transparent,
          rgba(255, 255, 255, 0.04) 30%,
          rgba(255, 255, 255, 0.04) 70%,
          transparent
        );
      }

      .bg-text {
        position: absolute;
        right: -2rem;
        top: 50%;
        transform: translateY(-50%);
        font-family: "Playfair Display", serif;
        font-size: clamp(180px, 22vw, 400px);
        font-weight: 900;
        color: transparent;
        -webkit-text-stroke: 1px rgba(200, 16, 46, 0.1);
        letter-spacing: -0.05em;
        line-height: 1;
        pointer-events: none;
        user-select: none;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 8rem;
        padding-bottom: 4rem;
        max-width: 900px;
      }

      .hero-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 2rem;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        color: var(--muted);
        text-transform: uppercase;
        animation: slideRight 0.8s 0.2s both;
      }

      .label-dot {
        width: 6px;
        height: 6px;
        background: var(--red);
        border-radius: 50%;
        display: inline-block;
        animation: pulse-red 2s infinite;
      }

      .hero-title {
        font-family: "Playfair Display", serif;
        font-size: clamp(3rem, 8vw, 7rem);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.03em;
        margin-bottom: 2rem;
      }

      .line-1 {
        display: block;
        animation: fadeUp 0.8s 0.3s both;
      }

      .line-2 {
        display: block;
        font-style: italic;
        color: var(--red);
        animation: fadeUp 0.8s 0.45s both;
      }

      .line-3 {
        display: block;
        animation: fadeUp 0.8s 0.6s both;
      }

      .hero-sub {
        font-size: clamp(1rem, 1.5vw, 1.125rem);
        color: var(--muted);
        max-width: 520px;
        line-height: 1.8;
        margin-bottom: 3rem;
        animation: fadeUp 0.8s 0.75s both;
      }

      .hero-actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
        animation: fadeUp 0.8s 0.9s both;
        margin-bottom: 5rem;
      }

      .btn-primary {
        display: inline-block;
        background: var(--red);
        color: white;
        text-decoration: none;
        padding: 0.9rem 2rem;
        font-weight: 500;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
        border-radius: 2px;
        transition:
          background 0.2s,
          transform 0.2s;
      }

      .btn-primary:hover {
        background: var(--red-bright);
        transform: translateY(-2px);
      }

      .btn-ghost {
        display: inline-block;
        color: var(--white);
        text-decoration: none;
        padding: 0.9rem 2rem;
        font-weight: 400;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
        border: 1px solid var(--border);
        border-radius: 2px;
        transition:
          border-color 0.2s,
          background 0.2s;
      }

      .btn-ghost:hover {
        border-color: var(--red);
        background: rgba(200, 16, 46, 0.08);
      }

      .hero-stats {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        flex-wrap: wrap;
        animation: fadeUp 0.8s 1.05s both;
      }

      .stat-num {
        display: block;
        font-family: "Playfair Display", serif;
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--white);
        letter-spacing: -0.02em;
      }

      .stat-label {
        display: block;
        font-size: 0.75rem;
        color: var(--muted);
        max-width: 140px;
        line-height: 1.4;
        margin-top: 0.25rem;
      }

      .stat-divider {
        width: 1px;
        height: 50px;
        background: var(--border);
      }

      .scroll-hint {
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        color: var(--faint);
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        animation: fadeIn 1s 1.5s both;
      }

      .scroll-line {
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, var(--red), transparent);
        animation: fadeUp 1s 1.5s infinite alternate;
      }

      @media (max-width: 768px) {
        .hero-stats {
          gap: 1.5rem;
        }
        .stat-divider {
          display: none;
        }
        .bg-text {
          display: none;
        }
      }
    `,
  ],
})
export class HeroComponent {
  lines = Array.from({ length: 8 });
}
