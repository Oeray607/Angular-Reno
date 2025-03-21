import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-talisman-incele',
  imports: [],
  templateUrl: './talisman-incele.component.html',
  styleUrl: './talisman-incele.component.css'
})
export class TalismanInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }
}
