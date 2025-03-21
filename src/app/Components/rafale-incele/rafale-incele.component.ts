import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rafale-incele',
  imports: [],
  templateUrl: './rafale-incele.component.html',
  styleUrl: './rafale-incele.component.css'
})
export class RafaleInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }
}
