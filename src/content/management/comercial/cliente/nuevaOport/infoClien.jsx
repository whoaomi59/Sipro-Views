import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import UserIco from '@mui/icons-material/AccountCircle';
import {
    Card,
    Box,
    Grid,
    Button,
    Tooltip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Typography,
    TableCell,
    TableRow
  } from '@mui/material';
const Info = ({data}) => {
    const { t } = useTranslation();
    const [Data, setData] = useState([]);
    const isMountedRef = useRefMounted();
    const [detaState, setDeta] = useState(false);
    const DetalleOpen = () =>{
    setDeta(true);
    }
    const DetalleClose = () =>{
    setDeta(false);
    }
    const getInfo = useCallback(async () => {
    let data={}
    try {
    const response = await axios.post('/ContactoCOmer',data);
    if (isMountedRef.current) {
        setData(response.data);
    }
    } catch (err) {
    console.error(err);
    }
    }, [isMountedRef]);
    useEffect(() => {
    getInfo();
    },[getInfo]);

    return (
    <>
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
                </Grid>
                <Grid xs={12} sm={7} item >
                    <label className='label-input'>Cliente</label><input value={data.emprnomb}  type='text' className='input-text'/>
                    <label className='label-input'>NIT</label><input value={data.emprnit} type='text' className='input-text'/>
                    <label className='label-input'>Ciudad</label><input value={data.muninomb} type='text' className='input-text'/>
                    <label className='label-input'>Dirección</label><input value={data.emprdire} type='text' className='input-text'/>
                    <label className='label-input'>Teléfono</label><input value={data.emprtels} type='text' className='input-text'/>
                    <label className='label-input'>Fax</label><input value={data.emprfax} type='text' className='input-text'/>
                    <label className='label-input'>Email</label><input value={data.emprmail} type='text' className='input-text'/>
                    <label className='label-input'>Contacto Comercial</label>
                    <div className='Select-cont'>
                      <select>
                        <option>Seleccione....</option>
                        {Data.map((option) => (
                         <option value={option.contcodi}>{option.contnomb}</option>
                        ))}
                      </select>
                      <button className='botu-Dimi' onClick={DetalleOpen}><UserIco/></button>
                    </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
      {/* modal Detalle*/}
        <Dialog
        fullWidth
        maxWidth="md"
        open={detaState}
        onClose={DetalleClose}
        >
        <DialogTitle
            sx={{
            p: 3
            }}
        >
            <Typography variant="h4" gutterBottom>
            {t('AGREGAR PROSPECCIÓN')}
            </Typography>
        </DialogTitle>
            <form>
                <DialogContent
                style={{margin:'0 auto'}}
                sx={{
                    p: 1
                }}
                >
                <Grid item xs={11} style={{margin:'0 auto'}}>
                <label className='label-input'>Nombre</label><input type='text' className='input-text' id='leincont'/>
                <label className='label-input'>Telefono</label>
                <label className='label-input'>Correo</label><input type='text' className='input-text' id='leinmail'/>
                <label className='label-input'>Celular</label><input type='text' className='input-text' id=''/>
                <label className='label-input'>Tel.empresa</label><input type='text' className='input-text' id=''/>
                <label className='label-input'>Cargo</label><input type='text' className='input-text' id=''/>
                </Grid>
                </DialogContent>
                <DialogActions
                sx={{
                    p: 3
                }}
                >
                <Button onClick={DetalleClose}style={{
                    background:'#ba000d'
                    }}
                    variant="contained">
                    Cancelar
                </Button>
                <Button
                    variant="contained">
                    Guardar
                </Button>
                </DialogActions>
            </form>
        </Dialog>
    </>
    );
  }
  
export default Info;
  