import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  pedirPermiso(): void{
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"  });
    };
    probarNotificacion() {
      Swal.fire({
        title: '¿Permitir notificaciones?',
        text: 'La aplicación quiere mostrarte notificaciones',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Permitir',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              Swal.fire('✅ Listo', 'Notificaciones activadas', 'success');
            } else {
              Swal.fire('❌ Denegado', 'No activaste las notificaciones', 'error');
            }
          });
        }
      });
    }
}
