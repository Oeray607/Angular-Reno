import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-megane-incele',
  imports: [],
  templateUrl: './megane-incele.component.html',
  styleUrl: './megane-incele.component.css'
})
export class MeganeInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }
}
