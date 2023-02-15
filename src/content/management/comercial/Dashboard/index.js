/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
/**************************************************** */
import Footer from 'src/components/Footer';
import useRefMounted from 'src/hooks/useRefMounted';
import PageHeader from './Header';
import Results from './resul/index';
/***************************************************** */
function ManagementUsuarios() {
  const isMountedRef = useRefMounted();
  const [oport, setUsuarios] = useState([]);
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/api/oportunidades');
      if (isMountedRef.current) {
      setUsuarios(response.data.oport);
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
      </PageTitleWrapper>s
      <Grid className='spacingCon'
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Results/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsuarios;
