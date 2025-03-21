import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-koleos-incele',
  imports: [],
  templateUrl: './koleos-incele.component.html',
  styleUrl: './koleos-incele.component.css'
})
export class KoleosInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
    
  }

}
