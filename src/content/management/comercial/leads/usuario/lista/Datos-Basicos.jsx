import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import {Card,Box,Grid} from '@mui/material';
const Datos = ({Id}) => {

const [DataBasic, setDataBasic] = useState([]);
const isMountedDocu = useRefMounted();
const getDataBasic = useCallback(async () => {
  const data ={Id}
  try {
    const response = await axios.post('/LeadDatosBasic',data);
    if (isMountedDocu.current) {
      setDataBasic(response.data[0]);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedDocu]);
useEffect(() => {
  getDataBasic();
},[getDataBasic]);
const [valSwi,setvalSwi] = useState(false);
//VALIDACION DEL PORCENTAJE DE PROBABILIDAD
const Prob = (prob)=>{
  if(prob==10){return <p className='naranja'>Competidor 10%</p>}
  if(prob==25){return <p className='amarillo'>Competidor - Ingeal 25%</p>}
  if(prob==50){return <p className='azulCla'>Ingeal - Competidor 50%</p>}
  if(prob==75){return <p className='verde'>Ingeal 75%</p>}
}
//VALIDACION DE SI NECESITA PREVENTA O NO!!
const Prev = (val)=>{
  if(val==0){return <p className='naranja'>NO</p>}
  if(val==1){return <p className='azulCla'>SI</p>}
}
//VALIDA LA COTIZACION
const Check = (val)=>{
  console.log(val)
  if(val==1){return <><label>SI</label><input type='checkbox' className='swift'  defaultChecked disabled/><label>NO</label></>}
  if(val==0){return <><label>SI</label><input type='checkbox' className='swift'disabled/><label>NO</label></>}
}
// → $ 12.500 FORMATO DE LA MONEDA COLOMBIANA
var value = DataBasic.solicosto;
const formatterPeso = new Intl.NumberFormat('es-CO', {
style: 'currency',
currency: 'COP',
minimumFractionDigits: 0
})
//FORMATO DE FECHAS
let solifest = DataBasic.solifest;
let solifsol = DataBasic.solifsol;
    return (
      <Card>
        <Grid spacing={0} container>
          <Box style={{paddingLeft:20}}>
            <h2>DATOS BASICOS</h2>
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
                  <img src="/static/data.svg" alt="data" className='imagen'/>
                </Grid>
                <Grid xs={12} sm={7} item >
                    <label className='label-input'>Comercial</label><input type='text' className='input-text' value={DataBasic.usuanomb}/>
                    <label className='label-input'>Fecha de la Oportunidad</label><input type='text' className='input-text'value={new Date(DataBasic.solifech).toLocaleString()} disabled/>
                    <label className='label-input'>Descripción/Necesidad</label>
                    <div className='input-text' dangerouslySetInnerHTML={{__html: DataBasic.solinece}}/>
                    <label className='label-input'>Entrega de cotización al cliente</label><input type='text' className='input-text' value={new Date(solifsol).toLocaleString()} disabled/>
                    <label className='label-input'>Estimada de Cierre del Negocio</label><input type='text' className='input-text' value={new Date(solifest).toLocaleString()} disabled/>
                    <label className='label-input'>¿Necesita Preventa?</label>
                    <div className='input-text'>{Prev(DataBasic.soliprev)}</div>
                    <label className='label-input'>Probabilidad</label><div className='input-text'>{Prob(DataBasic.soliprob)}</div>
                    <label className='label-input'>Costo estimado</label><input type='text' className='input-text' value={formatterPeso.format(value)} disabled/>
                    <label className='label-input'>Requiere Cotización:</label>
                    <div className='Swif-cont'>{Check(DataBasic.soliopor)}</div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }
  
export default Datos;
  