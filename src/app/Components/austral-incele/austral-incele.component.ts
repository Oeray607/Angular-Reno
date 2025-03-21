import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-austral-incele',
  imports: [CommonModule],
  templateUrl: './austral-incele.component.html',
  styleUrl: './austral-incele.component.css'
})
export class AustralInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }

}
