import Footer from 'src/components/Footer';
import { Box, Tabs, Tab, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import Resul from './Resul';


function Index() {

    const { nuevpoliid } = useParams();
    

    return (
    <>
    <Box
    sx={{
    mt: 3
    }}
    >
    <Grid item xs={92} md={12}>
    <Resul id={nuevpoliid}/>
    </Grid>
    </Box>
    <Footer/>
    </>
    );
    }

export default Index;