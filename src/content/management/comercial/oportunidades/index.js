/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
/**************************************************** */
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './pageHeader';
import Results from './result';
import Footer from 'src/components/Footer';
/*************************************************** */
function ManagementUsuarios() {
  const isMountedRef = useRefMounted();
  const [oport, setUsuarios] = useState([]);
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/lisOpor');
      if (isMountedRef.current) {
      setUsuarios(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);
  useEffect(() => {
    getUsuarios();
  },[getUsuarios]);
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
          <Results oport={oport}/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsuarios;
