import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private router: Router) {}
  isHovered: boolean = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  AustralSayfasinaGit() {
    this.router.navigate(['/Austral']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  DusterSayfasinaGit() {
    this.router.navigate(['/Duster']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  CapturSayfasinaGit() {
    this.router.navigate(['/Captur']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  AustralInceleSayfasinaGit() {
    this.router.navigate(['/AustralIncele']);
  }
  ClioInceleSayfasinaGit() {
    this.router.navigate(['/ClioIncele']);
  }
  DusterInceleSayfasinaGit() {
    this.router.navigate(['/DusterIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  MeganeInceleSayfasinaGit() {
    this.router.navigate(['/MeganeIncele']);
  }
  TaliantInceleSayfasinaGit() {
    this.router.navigate(['/TaliantIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  CapturInceleSayfasinaGit() {
    this.router.navigate(['/CapturIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  TalismanInceleSayfasinaGit() {
    this.router.navigate(['/TalismanIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  RafaleInceleSayfasinaGit() {
    this.router.navigate(['/RafaleIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
  KoleosInceleSayfasinaGit() {
    this.router.navigate(['/KoleosIncele']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }
}
