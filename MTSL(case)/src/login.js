import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "./bottomnav";
import CardGroc from "./card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/log", {
        email,
        pass,
      });
      if (response.status === 200) {
        console.log("Login successful");
        localStorage.setItem("email", email);
        navigate('/userpage');
        

      } else {
        setErrorMessage(response.data.message);
        alert("invalid user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
        <Box
       
          display={"flex"}
          flexDirection={"column"}
          
          margin={"auto"}
        >
          <Typography
            variant="h6"
          >
            Login Page
          </Typography>
          <TextField
            margin="normal"
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            type="password"
            placeholder="Password*"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {errorMessage && (
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          )}
          
          <Link to="/signup">
          <Typography variant="body1" color="primary" sx={{ borderRadius: 3 }}>
            Does'nt have Account?
          </Typography>
          </Link>
          <br />
          {/* <Link to={"/userpage"}> */}
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 3 , maxWidth: 100}  }
            onClick={handleLogin}
          >
            Log_In
          </Button>
          {/* </Link> */}
        </Box>
      </form>
      
    </div>
    
  );
};

export default Login;
