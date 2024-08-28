import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [val, setVal] = useState([]);
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );

      const { success, message } = response.data;

      if (success) {
        console.log("Login successfuly");
        setVal([1]);
      } else {
        console.log("No data found");
        setNote("Invalid data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((val) => ({
      ...val,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      {val.length === 0 ? (
        <>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                required
                name="username"
                value={loginData.username}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Password: </label>
              <input
                type="password"
                required
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Login</button>
          </form>

          <p>{note} </p>

          <p>
            Register <Link to="/">Here</Link>
          </p>
        </>
      ) : (
        <>
          <h1>Login successful!</h1>
        </>
      )}
    </div>
  );
};

export default Login;
