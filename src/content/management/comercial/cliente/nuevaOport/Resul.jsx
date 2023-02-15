import { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import axios from 'axios';
import Axios from 'src/utils/axios';
import useRefMounted from 'src/hooks/useRefMounted';
import InfoCli from './infoClien'
/*********************************** */

function Resultados ({id}) {

/***************Axios****************** */
  const [info, setData] = useState([]);
  const isMountedRef = useRefMounted();
  const getInfo = useCallback(async () => {
  let data={id}
  try {
  const response = await axios.post('/CuentInfoCLi',data);
  if (isMountedRef.current) {
      setData(response.data[0]);
  }
  } catch (err) {
  console.error(err);
  }
  }, [isMountedRef]);
  useEffect(() => {
  getInfo();
  },[getInfo]);
/***************Info Client************ */

    return (
        <>
          <PageTitleWrapper>
            <PageHeader data={info}/>
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
            <InfoCli data={info}/>
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item xs={12}>
              
            </Grid> 
          </Grid>
        </>
      );
}
export default Resultados;