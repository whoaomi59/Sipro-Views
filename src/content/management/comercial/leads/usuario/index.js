/****************************
* MODULE AUTOR:JCHILITO    *
* JHON MARIO (WHOAOMI)     *
****************************/
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import useRefMounted from 'src/hooks/useRefMounted';
import Footer from 'src/components/Footer';
import PageHeader from './pageHeader';
import Resul from './resultados';

function UsuarioLeads(){
    const isMountedRef = useRefMounted();
    const [data, setUsuarios] = useState([]);
    const getUsuarios = useCallback(async () => {
    try {
    const response = await axios.get(`/ListLeadsUsuario`);
    if (isMountedRef.current) {
    setUsuarios(response.data);
    }
    } catch (err) {
    console.error(err);
    }
    }, [isMountedRef]);
    useEffect(() => {
    getUsuarios();
    }, [getUsuarios]);
    getUsuarios();
    return (
        <>
          <PageTitleWrapper>
            <PageHeader />
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
              <Resul data={data}/>
            </Grid>
          </Grid>
          <Footer />
        </>
      );
}
export default UsuarioLeads;