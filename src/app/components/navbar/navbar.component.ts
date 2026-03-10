import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()">
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="logo-mark">HIV</span>
          <span class="logo-text">Aware</span>
        </div>

        <button class="hamburger" (click)="toggleMenu()" [class.open]="menuOpen()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav-links" [class.open]="menuOpen()">
          <li><a href="#what-is-hiv" (click)="closeMenu()">About HIV</a></li>
          <li><a href="#how-it-spreads" (click)="closeMenu()">How It Spreads</a></li>
          <li><a href="#get-tested" (click)="closeMenu()">If You're Infected</a></li>
          <li><a href="#living-with-hiv" (click)="closeMenu()">Living With HIV</a></li>
          <li><a href="#get-help" class="cta-link" (click)="closeMenu()">Get Help</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 1.5rem 2rem;
      transition: all 0.4s ease;
      border-bottom: 1px solid transparent;
    }

    nav.scrolled {
      background: rgba(10, 10, 10, 0.96);
      backdrop-filter: blur(12px);
      padding: 1rem 2rem;
      border-bottom-color: rgba(255,255,255,0.06);
    }

    .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      cursor: default;
    }

    .logo-mark {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      background: var(--red);
      color: white;
      padding: 0.3rem 0.5rem;
      border-radius: 2px;
      font-weight: 500;
    }

    .logo-text {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--white);
      letter-spacing: -0.02em;
    }

    .nav-links {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }

    .nav-links a {
      color: rgba(245, 242, 238, 0.7);
      text-decoration: none;
      font-size: 0.875rem;
      letter-spacing: 0.03em;
      font-weight: 400;
      transition: color 0.2s;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -3px; left: 0; right: 0;
      height: 1px;
      background: var(--red);
      transform: scaleX(0);
      transition: transform 0.25s;
    }

    .nav-links a:hover { color: var(--white); }
    .nav-links a:hover::after { transform: scaleX(1); }

    .cta-link {
      color: var(--white) !important;
      background: var(--red);
      padding: 0.5rem 1.2rem;
      border-radius: 2px;
      font-weight: 500 !important;
      letter-spacing: 0.05em !important;
      transition: background 0.2s !important;
    }

    .cta-link::after { display: none !important; }
    .cta-link:hover { background: var(--red-bright) !important; }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    .hamburger span {
      display: block;
      width: 24px;
      height: 1.5px;
      background: var(--white);
      transition: all 0.3s;
    }

    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 4px); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -4px); }

    @media (max-width: 768px) {
      .hamburger { display: flex; }

      .nav-links {
        position: fixed;
        top: 0; right: -100%;
        width: 80%;
        max-width: 320px;
        height: 100vh;
        background: var(--deep);
        flex-direction: column;
        align-items: flex-start;
        padding: 6rem 2.5rem 2rem;
        gap: 2rem;
        transition: right 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        border-left: 1px solid var(--border);
      }

      .nav-links.open { right: 0; }
      .nav-links a { font-size: 1.1rem; }
    }
  `]
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
