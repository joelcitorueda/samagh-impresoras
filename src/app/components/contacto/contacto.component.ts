import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  abrirWhatsApp() {
    const mensaje = encodeURIComponent('¡Hola! Quiero más información sobre sus productos Lexmark.');
    window.open(`https://wa.me/59172988845?text=${mensaje}`, '_blank');
  }
}
