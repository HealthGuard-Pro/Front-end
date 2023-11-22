import { useState} from "react";
import '../scss/Login.scss';
import avatar from "../assets/avatar.svg";

//página de login
function Login() {

  //variáveis dos inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //capturando os valores dos inputs
    const handleChange = async(event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };



  const handleSubmit = async (event) => {
    event.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:3000/usuarios");
      if (response.ok) {
        const users = await response.json();
        //console.log(users);
        for (let i = 0; i < users.length; i++) {
          const usuario = users[i];

          //validando
          if (usuario.nome == username && usuario.senha == password) {
            user = usuario;
            break;
          }
        }
      }
      if (user) {

        alert("Login realizado com SUCESSO!!");
        

        const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        sessionStorage.setItem("token-user", token);
        sessionStorage.setItem("user-object", JSON.stringify(user));

        window.location = "/home";
      } else {

        alert("Usuário e ou senha incorretos!");
          
          setUsername("");
          setPassword("");

          window.location = "/";
        
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="loginBox">
          <div className="user-avatar">
            <img src={avatar} alt="Imagem do usuário" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

  

export default Login;