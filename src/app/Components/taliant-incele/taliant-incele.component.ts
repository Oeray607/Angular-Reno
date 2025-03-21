import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taliant-incele',
  imports: [],
  templateUrl: './taliant-incele.component.html',
  styleUrl: './taliant-incele.component.css'
})
export class TaliantInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }
}
