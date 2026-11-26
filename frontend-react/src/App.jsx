import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';

// Pantallas migradas desde .stitch/designs/ — diseño oficial de Stitch en React.
import HomeStitch from './pages/HomeStitch';
import OfertasStitch from './pages/OfertasStitch';
import DetalleStitch from './pages/DetalleStitch';
import MapaStitch from './pages/MapaStitch';
import EmpresasStitch from './pages/EmpresasStitch';
import GuiasStitch from './pages/GuiasStitch';
import ContactoStitch from './pages/ContactoStitch';
import LibroStitch from './pages/LibroStitch';
import TerminosStitch from './pages/TerminosStitch';
import PrivacidadStitch from './pages/PrivacidadStitch';

import NotFound from './pages/NotFound';

import './index.css';

const qc = new QueryClient({ defaultOptions: { queries: { retry: 1, staleTime: 30_000 } } });

// Las pantallas Stitch traen su propia navegación; el Header de la app solo
// se usa en las páginas legales y en el 404.
const RUTAS_STITCH = [
  '/', '/ofertas', '/mapa', '/empresas', '/guias', '/contacto',
  '/reclamaciones', '/terminos', '/privacidad',
];

function Contenido() {
  const { pathname } = useLocation();
  const esStitch = RUTAS_STITCH.includes(pathname) || pathname.startsWith('/oferta/');
  return (
    <>
      {!esStitch && <Header />}
      <Routes>
        <Route path="/"             element={<HomeStitch />} />
        <Route path="/ofertas"      element={<OfertasStitch />} />
        <Route path="/oferta/:id"   element={<DetalleStitch />} />
        <Route path="/mapa"         element={<MapaStitch />} />
        <Route path="/empresas"     element={<EmpresasStitch />} />
        <Route path="/guias"        element={<GuiasStitch />} />
        <Route path="/contacto"     element={<ContactoStitch />} />

        <Route path="/reclamaciones" element={<LibroStitch />} />
        <Route path="/terminos"     element={<TerminosStitch />} />
        <Route path="/privacidad"   element={<PrivacidadStitch />} />
        <Route path="*"             element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <AuthProvider>
        <BrowserRouter>
          <Contenido />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
