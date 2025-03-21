import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-captur-incele',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './captur-incele.component.html',
  styleUrl: './captur-incele.component.css'
})
export class CapturInceleComponent {
    UyariMesaji() {
      Swal.fire({
        title: 'Bilgilendirme',

        text: 'Bu özellik şimdilik aktif değil.',
        icon: 'info',
        
        confirmButtonText: 'Tamam'
      });
    }
}
