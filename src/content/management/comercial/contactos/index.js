/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';
import useRefMounted from 'src/hooks/useRefMounted';
import PageHeader from './pageHeader';
import Resultados from './resultados';

function Contactos() {
  const isMountedRef = useRefMounted();
  const [data, setUsuarios] = useState([]);
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/listConta');
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
          <Resultados data={data}/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Contactos;
