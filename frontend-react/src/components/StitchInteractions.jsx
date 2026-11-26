import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Filtros que aparecen en los diseños de Stitch. Se aplican sobre las tarjetas
// del propio DOM (los diseños traen datos de muestra, no vienen de la API).
const FILTROS = /^(todos?|todas|todo|presencial|h[ií]brido|remoto|tiempo completo|medio tiempo|cachuelos?|pr[aá]cticas?)$/i;

export default function StitchInteractions() {
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.querySelector('.stitch-root');
    if (!root) return undefined;

    const onClick = (event) => {
      const boton = event.target.closest('button');
      if (!boton || !root.contains(boton)) return;
      const texto = boton.textContent.replace(/\s+/g, ' ').trim();
      if (!FILTROS.test(texto)) return;

      const clave = texto.toLowerCase();
      const grupo = boton.parentElement;
      if (grupo) {
        grupo.querySelectorAll('button').forEach((otro) => {
          const activo = otro === boton;
          otro.classList.toggle('bg-primary', activo);
          otro.classList.toggle('text-on-primary', activo);
          otro.classList.toggle('bg-surface-container', !activo);
          otro.classList.toggle('text-ink-light', !activo);
        });
      }

      root.querySelectorAll('article, [data-stitch-card]').forEach((tarjeta) => {
        const coincide = /^todo/.test(clave) || tarjeta.textContent.toLowerCase().includes(clave);
        tarjeta.style.display = coincide ? '' : 'none';
      });
    };

    const onSubmit = (event) => {
      const form = event.target;
      if (!root.contains(form)) return;

      if (form.id === 'hero-search-form') {
        event.preventDefault();
        const q = form.querySelector('#search-keyword')?.value || '';
        navigate('/ofertas?q=' + encodeURIComponent(q));
        return;
      }

      if (form.id === 'contact-form' || form.id === 'reclamacionesForm') {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        let aviso = form.querySelector('[data-stitch-aviso]');
        if (!aviso) {
          aviso = document.createElement('div');
          aviso.dataset.stitchAviso = '1';
          aviso.setAttribute('role', 'status');
          aviso.className = 'mt-4 rounded-xl bg-primary-container text-on-primary-container px-4 py-3 font-body-m';
          form.appendChild(aviso);
        }
        aviso.textContent = 'Gracias. Tu mensaje fue registrado en esta demostración.';
      }
    };

    root.addEventListener('click', onClick);
    root.addEventListener('submit', onSubmit);
    return () => {
      root.removeEventListener('click', onClick);
      root.removeEventListener('submit', onSubmit);
    };
  }, [navigate]);

  return null;
}
