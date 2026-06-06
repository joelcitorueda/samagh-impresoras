import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Servicio {
  icono: string;
  titulo: string;
  descripcion: string;
  color: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor, TranslatePipe],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios: Servicio[] = [
    {
      icono: 'fas fa-tint',
      titulo: 'Venta de Consumibles Lexmark',
      descripcion: 'Comercializamos toners y consumibles originales Lexmark. Garantizamos autenticidad y calidad en cada producto como distribuidores autorizados.',
      color: '#CC0000'
    },
    {
      icono: 'fas fa-print',
      titulo: 'Venta de Impresoras Lexmark',
      descripcion: 'Ofrecemos impresoras multifuncionales Lexmark nuevas y originales. Equipos con garantía de fábrica y soporte técnico especializado.',
      color: '#990000'
    },
    {
      icono: 'fas fa-tools',
      titulo: 'Repuestos Lexmark Originales',
      descripcion: 'Contamos con unidades de imagen, kits de mantenimiento y repuestos originales Lexmark. Calidad certificada para tu equipo.',
      color: '#404040'
    },
    {
      icono: 'fas fa-truck',
      titulo: 'Envíos a todo Bolivia',
      descripcion: 'Realizamos entregas en Santa Cruz y despachos a todo Bolivia. Coordinamos tu entrega en el menor tiempo posible.',
      color: '#CC0000'
    },
    {
      icono: 'fas fa-handshake',
      titulo: 'Distribuidores Autorizados',
      descripcion: 'Como distribuidores autorizados Lexmark, ofrecemos productos originales con garantía y los mejores precios del mercado.',
      color: '#990000'
    }
  ];
}
