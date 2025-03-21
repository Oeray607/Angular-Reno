import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clio-incele',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './clio-incele.component.html',
  styleUrl: './clio-incele.component.css'
})
export class ClioInceleComponent {
  isMessageVisible = false;
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      
      confirmButtonText: 'Tamam'
    });
  }
}
