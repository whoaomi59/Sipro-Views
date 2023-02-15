import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import {
    Card,
    Box,
    Grid,
    Button
  } from '@mui/material';
const Info = ({Id}) => {
/***************Info Client************ */
const [Data, setData] = useState([]);
const isMounData = useRefMounted();
const getData = useCallback(async () => {
  const data ={Id}
  try {
    const response = await axios.post('/InfoCotiza',data);
    if (isMounData.current) {
      setData(response.data[0]);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMounData]);
useEffect(() => {
  getData();
},[getData]);

const [Info, setInfoCli] = useState([]);
const isMountedRe = useRefMounted();
const getInfoCLi = useCallback(async () => {
  const data ={Id}
  try {
    const response = await axios.post('/LeadGenerado',data);
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
return (
      <Card>
        <Grid spacing={0} container>
          <Box style={{paddingLeft:20}}>
            <h2 >INFORMACION DEL CLIENTE </h2>
          </Box>
          <Grid
            sx={{
              position: 'relative'
            }}
            display="flex"
            alignItems="center"
            item
            xs={12}
            md={12}
          >
            <Box py={4} pr={4} flex={1}>
              <Grid container spacing={0}>
                <Grid
                  xs={12}
                  sm={5}
                  item
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src="/static/ofice.svg" alt="ofice" className='imagen'/>
                </Grid>
                <Grid xs={12} sm={7} item >
                    <label className='label-input'>Cliente</label><input type='text' className='input-text' value={Data.emprnomb}/>
                    <label className='label-input'>NIT</label><input type='text' className='input-text' value={Data.emprnit}/>
                    <label className='label-input'>Cotización</label><input type='text' className='input-text' value={Data.id}/>
                    <label className='label-input'>Requisición No.</label><input type='text' className='input-text' value={Data.pedinume}/>
                    <label className='label-input'>Negocio</label><input type='text' className='input-text' value={Data.negonume}/>
                    <label className='label-input'>Ciudad</label><input type='text' className='input-text' value={Data.muninomb}/>
                    <label className='label-input'>Dirección</label><input type='text' className='input-text' value={Data.emprdire}/>
                    <label className='label-input'>Teléfono</label><input type='text' className='input-text' value={Data.emprtels}/>
                    <label className='label-input'>Fax</label><input type='text' className='input-text' value={Data.emprfax}/>
                    <label className='label-input'>Email</label><input type='text' className='input-text' value={Data.emprmail}/>
                    <label className='label-input'>Contacto Comercial</label><input type='text' className='input-text' value={Data.contnomb}/>
                    <label className='label-input'>Lead Generado</label>
                    <div className='input-text'>
                      <b>Generado por:</b>{Info.usuanomb}
                      <b><br/>Cliente:</b>{Info.leinempr}
                      <b><br/>Contacto:</b>{Info.leincont}
                      <b><br/>Datos:</b>{Info.leincelu} / {Info.leintele} / {Info.leindire}
                      <b><br/>Necesidad: </b><br/>{Info.leinnece}
                    </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }
  
export default Info;
  