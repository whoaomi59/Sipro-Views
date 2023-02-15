import { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './floot';
import Footer from 'src/components/Footer';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import { useParams } from 'react-router-dom';
/*********************************** */
import InfoClient from './InfoClient';
import Documentos from './Documentos';
import Datos from './Datos-Basicos';
function ManagementUsuariosView () {
/***************Axios****************** */
const { Id } = useParams();
/***************Documentos************ */
const [Docu, setDocu] = useState([]);
const isMountedDocu = useRefMounted();
const geDocu = useCallback(async () => {
  const data ={Id}
  try {
    const response = await axios.post('/LeadDocument',data);
    if (isMountedDocu.current) {
      setDocu(response.data);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedDocu]);
useEffect(() => {
  geDocu();
},[geDocu]);
    return (
        <>
          <PageTitleWrapper>
            <PageHeader Id={Id}/>
          </PageTitleWrapper>
          <Grid
            sx={{
              px: 4
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <InfoClient Id={Id}/>
            </Grid>
            <Grid item xs={12}>
              <Documentos data={Docu}/>
            </Grid>
            <Grid item xs={12}>
              <Datos Id={Id}/>
            </Grid>
            <Grid item xs={12}>
              
            </Grid> 
          </Grid>
          <Footer />
        </>
      );
}
export default ManagementUsuariosView;