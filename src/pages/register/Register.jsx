import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="full name"
          id="username"
          // onChange={handleChange}
          className="lInput"
        />
        <input
          type="phone"
          placeholder="(+234)-000 -0000000"
          id="phone"
          // onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          // onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          // onChange={handleChange}
          className="lInput"
        />

        <p>
          Have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span>Login</span>
          </Link>
        </p>
        {/* <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button> */}
        <button className="lButton">Register</button>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Register;
