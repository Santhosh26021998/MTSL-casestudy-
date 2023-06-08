import { Card, CardContent, Grid, Typography } from '@mui/material'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Link } from 'react-router-dom';
function CardGroc() {
    return (<>
        
        <Grid container spacing={2}>
            <Grid item xs={6}>
             <Link to={'/randomuser'}>
                    <Card>
                        <CardContent>
                            <ShuffleIcon/>
                            <Typography variant='h6' component="div">
                                Random Users
                            </Typography>
                            <Typography variant='body2' color="text.secondary">
                                click this to view our random users
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
            </Grid>  
            <Grid item xs={6}>
            <Link to={'/currency'}>
                <Card>
                    <CardContent>
                        <CurrencyExchangeIcon/>
                        <Typography variant='h6' component="div">
                            Currency Converter
                        </Typography>
                        <Typography variant='body2' color="text.secondary">
                            click this to view currency converter
                        </Typography>
                    </CardContent>
                </Card>
            </Link>    
            </Grid>
          </Grid>
       </>
    )
};
export default CardGroc;
