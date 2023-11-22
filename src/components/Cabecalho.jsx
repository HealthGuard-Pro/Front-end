import '../scss/Cabecalho.scss';
import profile from "../assets/profile.svg";
import { useState} from "react";

export default function Cabecalho() {

  const userLogado = JSON.parse(sessionStorage.getItem("user-object"));
  const [user] = useState(userLogado);

  const handleLogout = () => {
    sessionStorage.removeItem("user-object");
    sessionStorage.removeItem("token-user");
    window.location = "/";
  };

  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>DreamGuard</h1>
              <div className="profile">
                <img src={profile} alt="icone de perfil" />
                <p>Olá {user.nome}</p>
              </div>
              <li>Have a nice Dream</li>
              <div className="logout-button">
                <button onClick={handleLogout} className="botao-log">LOGOUT</button>
                <p>{user.email}</p>
              </div>
            </ul>
          </nav>
        </header>
      </>
    );    
  } else {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>DreamGuard</h1>
              <li>Have a nice Dream</li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}