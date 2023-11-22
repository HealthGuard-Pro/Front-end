import './scss/App.modules.scss';
import Nav from '../src/components/Cabecalho.jsx';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
        <Outlet />
      
    </div>
  );
}
