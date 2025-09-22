import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  pedirPermiso() {
  alert('Permiso solicitado');
};
  
  probarNotificacion(): void {
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
