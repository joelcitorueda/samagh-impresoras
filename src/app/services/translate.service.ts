import { Injectable, signal } from '@angular/core';

export type Idioma = 'es' | 'en';

export interface Traducciones {
  [key: string]: { es: string; en: string };
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private idioma = signal<Idioma>('es');
  idiomaActual = this.idioma.asReadonly();

  private traducciones: Traducciones = {
    // ============ HEADER ============
    'header.inicio': { es: 'Inicio', en: 'Home' },
    'header.catalogo': { es: 'Catálogo', en: 'Catalog' },
    'header.nosotros': { es: 'Nosotros', en: 'About' },
    'header.servicios': { es: 'Servicios', en: 'Services' },
    'header.contacto': { es: 'Contacto', en: 'Contact' },
    'header.cotizar': { es: 'Cotiza Ahora', en: 'Get a Quote' },
    'header.subtitle': { es: 'Bienes & Servicios', en: 'Goods & Services' },

    // ============ HERO ============
    'hero.badge': { es: 'Distribuidores Autorizados Lexmark', en: 'Lexmark Authorized Distributors' },
    'hero.title1': { es: 'Bienes & Servicios', en: 'Goods & Services' },
    'hero.title2': { es: 'Soluciones de Impresión en Bolivia', en: 'Printing Solutions in Bolivia' },
    'hero.description': { es: 'SAMAGH BIENES Y SERVICIOS es una empresa líder en Bolivia, dedicada a la comercialización de impresoras, consumibles y repuestos de la línea Lexmark. Nuestros productos cuentan con garantía de originalidad y autorización como distribuidores autorizados Lexmark.', en: 'SAMAGH BIENES Y SERVICIOS is a leading company in Bolivia, dedicated to the commercialization of printers, consumables and spare parts of the Lexmark line. Our products have a guarantee of originality and authorization as Lexmark authorized distributors.' },
    'hero.btn.catalogo': { es: 'Ver Catálogo', en: 'View Catalog' },
    'hero.btn.contacto': { es: 'Contáctanos', en: 'Contact Us' },
    'hero.stat.experiencia': { es: 'Años de Experiencia', en: 'Years of Experience' },
    'hero.stat.productos': { es: 'Productos', en: 'Products' },
    'hero.stat.clientes': { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
    'hero.badge.left': { es: 'Distribuidores Lexmark', en: 'Lexmark Distributors' },
    'hero.badge.right': { es: 'Envíos a todo Bolivia', en: 'Shipping nationwide' },
    'hero.badge.bottom': { es: 'Garantía Original', en: 'Original Warranty' },

    // ============ CATÁLOGO ============
    'catalogo.title.destacados': { es: 'Productos Destacados', en: 'Featured Products' },
    'catalogo.subtitle.destacados': { es: 'Los productos más vendidos y recomendados por nuestros clientes', en: 'Best-selling products recommended by our clients' },
    'catalogo.badge': { es: 'Más Vendido', en: 'Best Seller' },
    'catalogo.btn.consultar': { es: 'Consultar Precio', en: 'Check Price' },
    'catalogo.title.completo': { es: 'Catálogo Completo', en: 'Full Catalog' },
    'catalogo.subtitle.completo': { es: 'Todos nuestros productos con calidad original y garantía', en: 'All our products with original quality and warranty' },
    'catalogo.filter.todos': { es: 'Todos', en: 'All' },
    'catalogo.filter.toner': { es: 'Toners', en: 'Toners' },
    'catalogo.filter.impresoras': { es: 'Impresoras', en: 'Printers' },
    'catalogo.filter.suministros': { es: 'Suministros', en: 'Supplies' },
    'catalogo.btn.cotizar': { es: 'Cotizar', en: 'Quote' },
    'catalogo.search.placeholder': { es: 'Buscar por nombre, código o descripción...', en: 'Search by name, code or description...' },
    'catalogo.empty': { es: 'No hay productos en esta categoría', en: 'No products in this category' },
    'catalogo.noresults': { es: 'No se encontraron productos con ese término', en: 'No products found with that term' },

    // ============ NOSOTROS ============
    'nosotros.title': { es: 'Sobre Nosotros', en: 'About Us' },
    'nosotros.subtitle': { es: 'Conoce nuestra historia y por qué somos tu mejor opción', en: 'Learn our story and why we are your best choice' },
    'nosotros.badge': { es: '¿Quiénes Somos?', en: 'Who Are We?' },
    'nosotros.nombre': { es: 'Bienes & Servicios', en: 'Goods & Services' },
    'nosotros.descripcion': { es: 'SAMAGH BIENES Y SERVICIOS es una empresa líder en Bolivia, dedicada a la comercialización de impresoras, consumibles y repuestos de la línea Lexmark. Nuestros productos cuentan con garantía de originalidad y autorización como distribuidores autorizados Lexmark.', en: 'SAMAGH BIENES Y SERVICIOS is a leading company in Bolivia, dedicated to the commercialization of printers, consumables and spare parts of the Lexmark line. Our products have a guarantee of originality and authorization as Lexmark authorized distributors.' },
    'nosotros.feature1.title': { es: 'Distribuidores Autorizados Lexmark', en: 'Lexmark Authorized Distributors' },
    'nosotros.feature1.desc': { es: 'Contamos con la autorización oficial como distribuidores de la línea Lexmark en Bolivia', en: 'We have official authorization as distributors of the Lexmark line in Bolivia' },
    'nosotros.feature2.title': { es: 'Garantía de Originalidad', en: 'Originality Guarantee' },
    'nosotros.feature2.desc': { es: 'Todos nuestros productos cuentan con garantía de originalidad y calidad certificada', en: 'All our products have a guarantee of originality and certified quality' },
    'nosotros.feature3.title': { es: 'Líderes en Bolivia', en: 'Leaders in Bolivia' },
    'nosotros.feature3.desc': { es: 'Empresa boliviana líder en comercialización de impresoras, consumibles y repuestos', en: 'Leading Bolivian company in the commercialization of printers, consumables and spare parts' },
    'nosotros.stat1': { es: 'Seguridad en tu Envío', en: 'Shipping Safety' },
    'nosotros.stat2': { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
    'nosotros.stat3': { es: 'Productos Originales', en: 'Original Products' },
    'nosotros.mission': { es: 'Comprometidos con brindar soluciones de impresión de alta calidad en Bolivia, con productos originales Lexmark y el mejor servicio para nuestros clientes.', en: 'Committed to providing high-quality printing solutions in Bolivia, with original Lexmark products and the best service for our clients.' },

    // ============ SERVICIOS ============
    'servicios.title': { es: 'Nuestros Servicios', en: 'Our Services' },
    'servicios.subtitle': { es: 'Todo lo que necesitas para tus soluciones de impresión en un solo lugar', en: 'Everything you need for your printing solutions in one place' },
    'servicios.serv1.titulo': { es: 'Venta de Consumibles Lexmark', en: 'Lexmark Consumables Sales' },
    'servicios.serv1.desc': { es: 'Comercializamos toners y consumibles originales Lexmark. Garantizamos autenticidad y calidad en cada producto como distribuidores autorizados.', en: 'We sell original Lexmark toners and consumables. We guarantee authenticity and quality in every product as authorized distributors.' },
    'servicios.serv2.titulo': { es: 'Venta de Impresoras Lexmark', en: 'Lexmark Printers Sales' },
    'servicios.serv2.desc': { es: 'Ofrecemos impresoras multifuncionales Lexmark nuevas y originales. Equipos con garantía de fábrica y soporte técnico especializado.', en: 'We offer new, original Lexmark multifunction printers. Equipment with factory warranty and specialized technical support.' },
    'servicios.serv3.titulo': { es: 'Repuestos Lexmark Originales', en: 'Original Lexmark Spare Parts' },
    'servicios.serv3.desc': { es: 'Contamos con unidades de imagen, kits de mantenimiento y repuestos originales Lexmark. Calidad certificada para tu equipo.', en: 'We have imaging units, maintenance kits and original Lexmark spare parts. Certified quality for your equipment.' },
    'servicios.serv4.titulo': { es: 'Envíos a todo Bolivia', en: 'Shipping Nationwide' },
    'servicios.serv4.desc': { es: 'Realizamos entregas en Santa Cruz y despachos a todo Bolivia. Coordinamos tu entrega en el menor tiempo posible.', en: 'We make deliveries in Santa Cruz and shipments throughout Bolivia. We coordinate your delivery in the shortest possible time.' },
    'servicios.serv5.titulo': { es: 'Distribuidores Autorizados', en: 'Authorized Distributors' },
    'servicios.serv5.desc': { es: 'Como distribuidores autorizados Lexmark, ofrecemos productos originales con garantía y los mejores precios del mercado.', en: 'As Lexmark authorized distributors, we offer original products with warranty and the best market prices.' },

    // ============ CONTACTO ============
    'contacto.title': { es: 'Contáctanos', en: 'Contact Us' },
    'contacto.subtitle': { es: 'Estamos listos para atenderte. Escríbenos y te responderemos a la brevedad', en: 'We are ready to help you. Write to us and we will respond shortly' },
    'contacto.info.title': { es: 'Información de Contacto', en: 'Contact Information' },
    'contacto.info.direccion': { es: 'Dirección', en: 'Address' },
    'contacto.info.direccion.valor': { es: 'Santa Cruz - Bolivia', en: 'Santa Cruz - Bolivia' },
    'contacto.info.telefono': { es: 'Teléfono', en: 'Phone' },
    'contacto.info.email': { es: 'Email', en: 'Email' },
    'contacto.info.horario': { es: 'Horario de Atención', en: 'Business Hours' },
    'contacto.info.horario.valor1': { es: 'Lun - Vie: 9:00 AM - 6:00 PM', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
    'contacto.info.horario.valor2': { es: 'Sáb: 9:00 AM - 1:00 PM', en: 'Sat: 9:00 AM - 1:00 PM' },
    'contacto.whatsapp.title': { es: '¡Atención Rápida!', en: 'Quick Attention!' },
    'contacto.whatsapp.desc': { es: 'Contáctanos por WhatsApp para una respuesta inmediata', en: 'Contact us via WhatsApp for an immediate response' },
    'contacto.whatsapp.btn': { es: 'Escribir por WhatsApp', en: 'Write via WhatsApp' },
    'contacto.form.title': { es: 'Envíanos un Mensaje', en: 'Send us a Message' },
    'contacto.form.nombre': { es: 'Nombre Completo', en: 'Full Name' },
    'contacto.form.nombre.placeholder': { es: 'Tu nombre', en: 'Your name' },
    'contacto.form.email': { es: 'Correo Electrónico', en: 'Email Address' },
    'contacto.form.email.placeholder': { es: 'tu@email.com', en: 'your@email.com' },
    'contacto.form.telefono': { es: 'Teléfono', en: 'Phone' },
    'contacto.form.telefono.placeholder': { es: '999 999 999', en: '999 999 999' },
    'contacto.form.mensaje': { es: 'Mensaje', en: 'Message' },
    'contacto.form.mensaje.placeholder': { es: '¿En qué podemos ayudarte?', en: 'How can we help you?' },
    'contacto.form.btn': { es: 'Enviar Mensaje', en: 'Send Message' },
    'contacto.ubicacion.title': { es: 'Nuestra Ubicación', en: 'Our Location' },
    'contacto.ubicacion.subtitle': { es: 'Visítanos en nuestras oficinas en Santa Cruz - Bolivia', en: 'Visit us at our offices in Santa Cruz - Bolivia' },

    // ============ FOOTER ============
    'footer.descripcion': { es: 'SAMAGH BIENES Y SERVICIOS es una empresa líder en Bolivia, dedicada a la comercialización de impresoras, consumibles y repuestos de la línea Lexmark. Distribuidores autorizados Lexmark.', en: 'SAMAGH BIENES Y SERVICIOS is a leading company in Bolivia, dedicated to the commercialization of printers, consumables and spare parts of the Lexmark line. Lexmark authorized distributors.' },
    'footer.links.title': { es: 'Enlaces Rápidos', en: 'Quick Links' },
    'footer.productos.title': { es: 'Productos', en: 'Products' },
    'footer.productos.toners': { es: 'Toners Originales', en: 'Original Toners' },
    'footer.productos.impresoras': { es: 'Impresoras', en: 'Printers' },
    'footer.productos.unidades': { es: 'Unidades de Imagen', en: 'Imaging Units' },
    'footer.productos.kits': { es: 'Kits de Mantenimiento', en: 'Maintenance Kits' },
    'footer.productos.suministros': { es: 'Suministros', en: 'Supplies' },
    'footer.contacto.title': { es: 'Contacto', en: 'Contact' },
    'footer.derechos': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
    'footer.logo.sub': { es: 'Bienes & Servicios', en: 'Goods & Services' },
  };

  cambiarIdioma(idioma: Idioma) {
    this.idioma.set(idioma);
  }

  toggleIdioma() {
    this.idioma.set(this.idioma() === 'es' ? 'en' : 'es');
  }

  traducir(clave: string): string {
    const traduccion = this.traducciones[clave];
    if (!traduccion) {
      console.warn(`Traducción no encontrada para: ${clave}`);
      return clave;
    }
    return traduccion[this.idioma()];
  }
}
