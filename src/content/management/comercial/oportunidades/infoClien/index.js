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
import Bitacora from './Bitacora';
import Documentos from './Documentos';
import Preventa from './Preventa';
function ManagementUsuariosView () {
/***************Axios****************** */
const { oporId } = useParams();
/***************Info Client************ */
const [Info, setInfoCli] = useState([]);
const isMountedRe = useRefMounted();
const getInfoCLi = useCallback(async () => {
  const data ={
    oporId
  }
  console.log(data)
  try {
    const response = await axios.post('/infoClien',data);
    if (isMountedRe.current) {
      setInfoCli(response.data[0]);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedRe]);
useEffect(() => {
  getInfoCLi();
},[getInfoCLi]);
/***************Bitacora************ */
const [Bita, setBita] = useState([]);
const isMountedBita = useRefMounted();
const getBita = useCallback(async () => {
  const data ={
    oporId
  }
  try {
    const response = await axios.post('/BitaInfoCli',data);
    if (isMountedBita.current) {
      setBita(response.data);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedBita]);
useEffect(() => {
  getBita();
},[getBita]);
/***************Documentos************ */
const [Docu, setDocu] = useState([]);
const isMountedDocu = useRefMounted();
const geDocu = useCallback(async () => {
  const data ={
    oporId
  }
  try {
    const response = await axios.post('/documInfoCli',data);
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
            <PageHeader data={Info}/>
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
              <InfoClient Info={Info}/>
            </Grid>
            <Grid item xs={12}>
              <Bitacora Bita={Bita}/>
            </Grid>
            <Grid item xs={12}>
              <Documentos Docu={Docu}/>
            </Grid>
            <Grid item xs={12}>
              <Preventa/>
            </Grid> 
          </Grid>
          <Footer />
        </>
      );
}
export default ManagementUsuariosView;