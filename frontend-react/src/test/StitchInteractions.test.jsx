import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StitchInteractions from '../components/StitchInteractions';
import HomeStitch from '../pages/HomeStitch';
import LibroStitch from '../pages/LibroStitch';

function Fixture() {
  return (
    <div className="stitch-root">
      <div>
        <button type="button">Remoto</button>
        <button type="button">Todos</button>
      </div>
      <article>Trabajo remoto en Piura</article>
      <article>Trabajo presencial en la oficina</article>
      <form id="contact-form">
        <input required aria-label="Nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function montar(ui = <Fixture />) {
  return render(<MemoryRouter>{ui}<StitchInteractions /></MemoryRouter>);
}

describe('interacciones de las pantallas Stitch', () => {
  it('filtra las tarjetas al pulsar un filtro', () => {
    montar();
    fireEvent.click(screen.getByText('Remoto'));
    const tarjetas = document.querySelectorAll('.stitch-root article');
    expect(tarjetas[0].style.display).toBe('');
    expect(tarjetas[1].style.display).toBe('none');
  });

  it('vuelve a mostrar todas con el filtro Todos', () => {
    montar();
    fireEvent.click(screen.getByText('Remoto'));
    fireEvent.click(screen.getByText('Todos'));
    document.querySelectorAll('.stitch-root article').forEach((t) => {
      expect(t.style.display).toBe('');
    });
  });

  it('muestra confirmación al enviar el formulario válido', () => {
    montar();
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
    fireEvent.submit(document.querySelector('#contact-form'));
    expect(screen.getByRole('status').textContent).toContain('Gracias');
  });

  it('no confirma si falta un campo obligatorio', () => {
    montar();
    fireEvent.submit(document.querySelector('#contact-form'));
    expect(screen.queryByRole('status')).toBeNull();
  });

  it('el botón de tema ya no es interactivo en Home', () => {
    render(<MemoryRouter><HomeStitch /><StitchInteractions /></MemoryRouter>);
    const tema = document.querySelector('[aria-label*="tema"], [aria-label*="claro"]');
    expect(tema.tagName).toBe('SPAN');
  });

  it('el botón de reclamaciones dispara el submit del formulario', () => {
    render(<MemoryRouter><LibroStitch /><StitchInteractions /></MemoryRouter>);
    expect(document.querySelector('#submitBtn').type).toBe('submit');
  });
});
