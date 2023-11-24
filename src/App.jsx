import './scss/App.modules.scss';
import Nav from '../src/components/Cabecalho.jsx';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Nav />
        <Outlet />
      <Footer />
    </div>
  );
}
