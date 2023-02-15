/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
/***********************************************/
import PageHeader from './header';
import Results from './resul';
import Footer from 'src/components/Footer';
import useRefMounted from 'src/hooks/useRefMounted';
/********************************************/
function ManagementUsuarios() {
  const isMountedRef = useRefMounted();
  const [data, setUsuarios] = useState([]);
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/api/consulComer');
      if (isMountedRef.current) {
      setUsuarios(response.data.data);
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
          <Results data={data}/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsuarios;
