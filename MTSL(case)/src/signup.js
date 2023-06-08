import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const [user,setuser] = useState({
        name:"",
        mobile:"",
        email:"",
        pass:"",
      });
      const navigate= useNavigate()
      
      const handleChange = (e) =>{
        setuser(prev =>({...prev, [e.target.name] : e.target.value }))
      };

      console.log(user)
      const handleClick = async e =>{
        e.preventDefault()
        try{
           
          await axios.post("http://localhost:8080/user/signup",user)
          navigate('/login')
          alert('Account Created Successfull....')
        }catch(err){
          console.log(err)
        }
      }

    return (
        <div>
            <form>
               
                <Box maxWidth={400} display={'flex'} flexDirection={'column'} alignItems={"center"} margin={'auto'} >
                    <Typography variant="h6" padding={3} textAlign={'center'} color={'primary'}>SIGN_UP</Typography>
                    <TextField
                        margin="normal"
                        
                        type="text"
                        placeholder="Enter_name"
                        id="name"
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        
                        type="text"
                        placeholder="Mobile_number"
                        id="no"
                        name="mobile"
                        onChange={handleChange} />
                    <TextField
                        margin="normal"
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        onChange={handleChange} />
                    <TextField margin="normal" type="password" placeholder="Password" id="pass" name="pass"
                        onChange={handleChange} />
                    <Button variant="contained" color="primary" sx={{ borderRadius: 3 }} onClick={handleClick}>Sign_In</Button><br></br>
                    <Link to="/">
                        <Typography variant="body2" color="primary" sx={{ borderRadius: 3 }} >Already Have An Account!...</Typography>
                    </Link>
                </Box>
            </form>
        </div>
    )
}
export default Signup;