import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  categoria: string;
  descripcion: string;
  icono: string;
  color: string;
  imagen: string;
  destacado?: boolean;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, TranslatePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  categoriaActiva: string = 'todos';
  searchTerm: string = '';

  // Número de WhatsApp de la empresa (sin + ni espacios)
  private readonly whatsappNumero = '59172988845';

  categorias = [
    { id: 'todos', nombre: 'Todos', icono: 'fas fa-th-large' },
    { id: 'toner', nombre: 'Toners', icono: 'fas fa-tint' },
    { id: 'impresoras', nombre: 'Impresoras', icono: 'fas fa-print' },
    { id: 'suministros', nombre: 'Suministros', icono: 'fas fa-tools' }
  ];

  productos: Producto[] = [
    // ── TONERS NEGROS ──
    { id: 1,  nombre: 'Tóner Negro',           codigo: '56F4000',  categoria: 'toner',      descripcion: 'Tóner original negro de alta capacidad para impresoras láser. Ideal para alto volumen de impresión.',    icono: 'fas fa-tint',    color: '#1a1a1a', imagen: 'images/NEGRO 56F4000.webp',   destacado: true },
    { id: 2,  nombre: 'Tóner Negro Premium',   codigo: '56F4X00',  categoria: 'toner',      descripcion: 'Tóner original negro extra capacidad. Rendimiento superior para entornos empresariales.',                 icono: 'fas fa-tint',    color: '#2d2d2d', imagen: 'images/NEGRO 56F4X00 .webp',  destacado: true },
    { id: 3,  nombre: 'Tóner Negro Estándar',  codigo: '56F4H00',  categoria: 'toner',      descripcion: 'Tóner original negro calidad estándar. Perfecto para uso diario en oficina.',                             icono: 'fas fa-tint',    color: '#404040', imagen: 'images/NEGRO 56F4H00.webp' },
    { id: 4,  nombre: 'Tóner Negro Profesional', codigo: '56F4U00', categoria: 'toner',     descripcion: 'Tóner original profesional para impresiones de alta definición.',                                         icono: 'fas fa-tint',    color: '#505050', imagen: 'images/NEGRO 56F4U00.webp' },
    { id: 5,  nombre: 'Tóner Negro',           codigo: '78C4XK0',  categoria: 'toner',      descripcion: 'Tóner original negro para impresoras de la serie 78. Alta calidad y rendimiento.',                       icono: 'fas fa-tint',    color: '#1a1a1a', imagen: 'images/NEGRO 78C4XK.webp',    destacado: true },
    { id: 18, nombre: 'Tóner Negro',           codigo: '58D4H00',  categoria: 'toner',      descripcion: 'Tóner original negro de alta capacidad para impresoras de la serie 58.',                                  icono: 'fas fa-tint',    color: '#1a1a1a', imagen: 'images/NEGRO 58D4H00 .webp' },
    { id: 19, nombre: 'Tóner Negro',           codigo: '58D4U00',  categoria: 'toner',      descripcion: 'Tóner original negro ultra capacidad para impresoras de la serie 58.',                                    icono: 'fas fa-tint',    color: '#2d2d2d', imagen: 'images/NEGRO 58D4U00.webp' },
    { id: 20, nombre: 'Tóner Negro',           codigo: '58D4X00',  categoria: 'toner',      descripcion: 'Tóner original negro extra capacidad para impresoras de la serie 58.',                                    icono: 'fas fa-tint',    color: '#404040', imagen: 'images/NEGRO 58D4X00.webp' },
    // ── TONERS COLOR ──
    { id: 6,  nombre: 'Tóner Magenta',         codigo: '78C4XM0',  categoria: 'toner',      descripcion: 'Tóner original magenta. Color vibrante y duradero para impresiones profesionales.',                      icono: 'fas fa-palette', color: '#CC0066', imagen: 'images/MAGENTA 78C4XM0 .webp' },
    { id: 7,  nombre: 'Tóner Yellow',          codigo: '78C4XY0',  categoria: 'toner',      descripcion: 'Tóner original amarillo. Color brillante para impresiones a todo color.',                                 icono: 'fas fa-palette', color: '#CCAA00', imagen: 'images/YELLOW 78C4XY0.webp' },
    { id: 8,  nombre: 'Tóner Cyan',            codigo: '78C4XC0',  categoria: 'toner',      descripcion: 'Tóner original cyan. Color preciso para documentos profesionales.',                                        icono: 'fas fa-palette', color: '#0066CC', imagen: 'images/CYAN 78C4XC0  .webp' },
    // ── IMPRESORAS ──
    { id: 9,  nombre: 'Impresora',   codigo: 'LEXMARK', categoria: 'impresoras', descripcion: 'Impresora funcional',                    icono: 'fas fa-print', color: '#CC0000', imagen: 'images/LEXMARK-1.webp' },
    { id: 10, nombre: 'Impresora',   codigo: 'LEXMARK', categoria: 'impresoras', descripcion: 'Impresora funcional', icono: 'fas fa-print', color: '#990000', imagen: 'images/LEXMARK-2.webp' },
    { id: 11, nombre: 'Impresora', codigo: 'LEXMARK', categoria: 'impresoras', descripcion: 'Impresora funcional',     icono: 'fas fa-print', color: '#2d2d2d', imagen: 'images/LEXMARK-3.webp' },
    { id: 12, nombre: 'Impresora',         codigo: 'LEXMARK', categoria: 'impresoras', descripcion: 'Impresora funcional',     icono: 'fas fa-print', color: '#CC0000', imagen: 'images/LEXMARK-4.webp' },
    // ── SUMINISTROS ──
    { id: 13, nombre: 'Unidad de Imagen',      codigo: '56F0Z00',  categoria: 'suministros', descripcion: 'Unidad de imagen original para impresoras láser. Calidad de impresión superior.',           icono: 'fas fa-camera',    color: '#404040', imagen: 'images/IMAGEN 56F0Z00 .webp', destacado: true },
    { id: 14, nombre: 'Unidad de Imagen',      codigo: '78C0ZV0',  categoria: 'suministros', descripcion: 'Unidad de imagen original para la serie 78. Reemplazo oficial recomendado.',                 icono: 'fas fa-camera',    color: '#505050', imagen: 'images/IMAGEN 78C0ZV0 .webp' },
    { id: 15, nombre: 'Botellón Residual',     codigo: '78C0W00',  categoria: 'suministros', descripcion: 'Botellón recolector de tóner residual original. Mantenimiento esencial.',                    icono: 'fas fa-trash-alt', color: '#606060', imagen: 'images/RESIDUAL 78C0W00 .webp' },
    { id: 16, nombre: 'Kit de Mantenimiento',  codigo: '40X7540',  categoria: 'suministros', descripcion: 'Kit de mantenimiento completo. Incluye piezas de recambio originales.',                      icono: 'fas fa-toolbox',   color: '#CC0000', imagen: 'images/MANTENIMIENTO 40X7540 .webp', destacado: true },
    { id: 17, nombre: 'Kit de Mantenimiento',  codigo: '44X2237',  categoria: 'suministros', descripcion: 'Kit de mantenimiento profesional. Para maximizar la vida útil de tu impresora.',             icono: 'fas fa-toolbox',   color: '#990000', imagen: 'images/MANTENIMIENTO 44X2237.webp' },
    { id: 21, nombre: 'Kit de Mantenimiento',  codigo: '41X1225',  categoria: 'suministros', descripcion: 'Kit de mantenimiento original Lexmark para revisión y recambio de piezas clave.',           icono: 'fas fa-toolbox',   color: '#AA0000', imagen: 'images/MANTENIMIENTO 41X1225.webp' },
  ];

  get productosFiltrados(): Producto[] {
    let filtrados = this.productos;

    if (this.categoriaActiva !== 'todos') {
      filtrados = filtrados.filter(p => p.categoria === this.categoriaActiva);
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase().trim();
      filtrados = filtrados.filter(p =>
        p.nombre.toLowerCase().includes(term) ||
        p.codigo.toLowerCase().includes(term) ||
        p.descripcion.toLowerCase().includes(term)
      );
    }

    return filtrados;
  }

  get productosDestacados(): Producto[] {
    // Solo toners y suministros pueden ser destacados
    return this.productos.filter(p => p.destacado);
  }

  filtrar(categoria: string) {
    this.categoriaActiva = categoria;
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
  }

  clearSearch() {
    this.searchTerm = '';
  }

  /**
   * Abre WhatsApp con un mensaje pre-armado con los datos del producto.
   */
  cotizarPorWhatsApp(producto: Producto) {
    let mensaje = '';

    if (producto.categoria === 'impresoras') {
      mensaje = 'Hola! Me interesan las Impresoras Lexmark que tienen publicadas en la página web de SAMAGH Bienes %26 Servicios.%0A%0APor favor, %C2%BFme pueden indicar si tienen equipos disponibles para venta/cotizaci%C3%B3n? Gracias.';
    } else {
      const categoria = this.nombreCategoria(producto.categoria);
      mensaje = 
        `Hola! Me interesa cotizar el siguiente producto de SAMAGH Bienes %26 Servicios:%0A%0A` +
        `- *Producto:* ${encodeURIComponent(producto.nombre)}%0A` +
        `- *Código:* ${encodeURIComponent(producto.codigo)}%0A` +
        `- *Categoría:* ${encodeURIComponent(categoria)}%0A%0A` +
        `Por favor, %C2%BFme pueden indicar precio y disponibilidad? Gracias.`;
    }

    window.open(`https://wa.me/${this.whatsappNumero}?text=${mensaje}`, '_blank');
  }

  private nombreCategoria(cat: string): string {
    const nombres: Record<string, string> = {
      toner: 'Tóner',
      impresoras: 'Impresora',
      suministros: 'Suministro'
    };
    return nombres[cat] ?? cat;
  }

  onImgError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      const iconContainer = parent.querySelector('.producto-icon, .featured-card-icon');
      if (iconContainer) {
        (iconContainer as HTMLElement).style.display = 'flex';
      }
    }
  }
}
