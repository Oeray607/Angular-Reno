import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-duster-incele',
  imports: [],
  templateUrl: './duster-incele.component.html',
  styleUrl: './duster-incele.component.css'
})
export class DusterInceleComponent {
  UyariMesaji() {
    Swal.fire({
      title: 'Bilgilendirme',
      text: 'Bu özellik şimdilik aktif değil.',
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }
}
