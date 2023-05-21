import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import classes from '../../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("https://food-app-nextjs-git-main-yamilh.vercel.app/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Panel de Administrador</h1>
        <input
          placeholder="usuario"
          className={classes.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="contraseña"
          type="password"
          className={classes.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={classes.button}>
          Sign In
        </button>
        {error && <span className={classes.error}>Usuario o Contraseña Incorrectos!</span>}
      </div>
    </div>
  );
};

export default Login;