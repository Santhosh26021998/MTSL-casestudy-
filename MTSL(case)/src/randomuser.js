import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, CardContent, Typography, TextField, Grid } from "@mui/material";

function RandomUser() {
    const [userno, SetUserNo] = useState({
        userno: null
    });

    const [data, SetData] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        SetUserNo(e.target.value);
    };

    console.log("kjh ", userno);

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://randomuser.me/api/?results=${+userno}`);
            const users = response.data.results;
            SetData(users);
            navigate('./');
        } catch (err) {
            console.log(err);
        }
    };
    console.log(data)
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField
                        margin="normal"
                        type="text"
                        placeholder="Enter the number of users you want to fetch!!"
                        id="name"
                        name="userno"
                        onChange={handleChange}
                    /></Grid>
                <Grid item xs={10} marginTop={'25px'}>
                    <Button variant="outlined" color="primary" onClick={handleClick}>
                        Fetch Users
                    </Button>
                </Grid>
            </Grid>

            <br></br>

            {data.map((user, index) => (
                <Card key={index} sx={{ maxWidth: 300, marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                           <img src= {user.picture.large}  />
                        </Typography>
                        <Typography variant="h6" component="div">
                            {`${user.name.first} ${user.name.last}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: {user.phone}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export default RandomUser;
