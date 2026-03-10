import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type VideoCard = {
  title: string;
  src: string;
  safeSrc: SafeResourceUrl;
};

@Component({
  selector: 'app-learn-from-champs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-from-champs.component.html',
  styleUrls: ['./learn-from-champs.component.scss']
})
export class LearnFromChampsComponent {
  videos: VideoCard[] = [
    {
      title: 'Learn from Champs — Video 1',
      src: 'https://www.youtube.com/embed/Vjpr8_8H7EU?si=D4PEuw81_wJTWcIH',
      safeSrc: ''
    },
    {
      title: 'Learn from Champs — Video 2',
      src: 'https://www.youtube.com/embed/yJMPy6qNxvo?si=Ss2PgUXnCL2XvH-z',
      safeSrc: ''
    },
    {
      title: 'Learn from Champs — Video 3',
      src: 'https://www.youtube.com/embed/ntzgfRsEgVM?si=jxTrNdbyLBoP4sjL',
      safeSrc: ''
    },
    {
      title: 'Learn from Champs — Video 4',
      src: 'https://www.youtube.com/embed/p_JNT13K-Po?si=9_RacxJ9Hib_dGni',
      safeSrc: ''
    },
    {
      title: 'Learn from Champs — Video 5',
      src: 'https://www.youtube.com/embed/NTxp4GQDWNM?si=mf9WhcPCocfIzre_',
      safeSrc: ''
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.videos.map(video => ({
      ...video,
      safeSrc: this.sanitizer.bypassSecurityTrustResourceUrl(video.src)
    }));
  }

  currentIndex = 0;

  get total(): number {
    return this.videos.length;
  }

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.total) % this.total;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.total;
  }

  goTo(index: number) {
    if (index < 0 || index >= this.total) return;
    this.currentIndex = index;
  }
}
