/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import PageHeader from './pageHeader';
import Results from './result';

function ManagementUsuarios() {
  const isMountedRef = useRefMounted();
  const [data, setUsuarios] = useState([]);
  const getUsuarios = useCallback(async () => {
    try {
      console.log('entra useCallback')
      const response = await axios.get('/ListSeguiCuentComer');
      if (isMountedRef.current) {
      setUsuarios(response.data);
      }
    } catch (err) {
      console.error(err,'error');
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
          <Results data={data}/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsuarios;
