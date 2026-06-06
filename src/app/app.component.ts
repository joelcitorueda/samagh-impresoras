import { Component, AfterViewInit, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CatalogoComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'SAMAGH BIENES Y SERVICIOS - Distribuidores Autorizados Lexmark';
  showScrollTop = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupScrollAnimation();
    }, 100);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 500;
  }

  setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Also observe any future elements
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach(el => {
        el.classList.add('observed');
        observer.observe(el);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
