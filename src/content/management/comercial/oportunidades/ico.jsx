import { useState, useEffect, useCallback } from 'react';
import Axios from 'src/utils/axios';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import Swal from 'sweetalert2';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DatePicker from '@mui/lab/DatePicker';
import { useTranslation } from 'react-i18next';
import Check from '@mui/icons-material/CheckBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Alert from '@mui/material/Alert';
/************************************************* */
import EditorText from './materials/textEditor';
import Select from 'react-select'
import {
Autocomplete,
Avatar,
TableCell,
TableRow,
Tooltip,
IconButton,
Grid,
Dialog,
DialogTitle,
DialogActions,
DialogContent,
Typography,
Button,
TextField,
Chip,
Box,
} from '@mui/material';
function PageHeader({opor}) {
/*********Asignar Comercial***************** */
const isMountedRef = useRefMounted();
const [ComerInge, setUsuarios] = useState([]);
const [AliasSessions, setSessions] = useState([]);
const location = useLocation();
/************Sessions******************************** */
const Sessions = useCallback(async () => {
  try {
    const response = await Axios.get('/api/account/personal');
    if (isMountedRef.current) {
      setSessions(response.data.user.alias);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedRef]);
useEffect(() => {
  Sessions();
},[Sessions]);
/************************************************** */
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/lisComer');
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
/*******************Bitacora*************** */
const isMountedRe = useRefMounted();
  const [bita, setBitacoras] = useState([]);
  const getBitacoras = useCallback(async (codiOpor) => {
    let data = {codiOpor}
    try {
      const response = await axios.post('/lisBitaOpor',data);
      if (isMountedRe.current) {
        setBitacoras(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRe]);
  useEffect(() => {
    getBitacoras();
  },[getBitacoras]);
/**************************************** */
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opent, setOpent] = useState(false);
  const [value, setValue] = useState(null);
  const [Tiempo, setTiempo] = useState(0);
  const [Html, setHtml] = useState('');
  const [Error, setError] = useState(false);
  const [ErrorBita, setErrorBita] = useState(false);
  const [Exito, setExito] = useState(false);
  const [Asunto, setAsunto] = useState(false);
  const [R, setR] = useState([]);
//Validacion Para El Asunto
const OnclikAsunto = () =>{
  setAsunto(true)
}
const handleCreateUsuariosOpen = () => {
  setOpen(true);
};
const handleCreateUsuariosClose = () => {
  setOpen(false);
};
//---------------------------------------------
const asignarComercial = () => {
  setOpens(true);
};
const asignarComercialClose = () => {
  setOpens(false);
};
//---------------------------opent
const bitacora= (id) => {
  setOpent(true);
  getBitacoras(id)
};
const bitacoraClose = () => {
  setOpent(false);
};
/*************Notificaiones********************** */
const notidata = async () =>{
  const data = {Html}
  try{
    let metaData =  await axios.post(`/notificOport`,data);
    return console.log(metaData)
   }catch(e){console.log(e);}
}
/************Registro Comercial******************* */
const SelecCome = async (id) =>{
  document.getElementById('select').value=id;
  setExito(true);
}
const RegCOmer = async () =>{
 let codOpor =  document.getElementById('codOpor').value;
 let idCOmer = document.getElementById('select').value;
 let data = {
  idCOmer,
  codOpor
 }
 try{
  if(!data.idCOmer){setError(true)}
  else{
  let metaData =  await axios.post(`/asigComer`,data);
  console.log(metaData.data.messague.sqlMessage)
  handleCreateUsuariosClose();
  return Swal.fire({
              icon:  metaData.data.ico,
              title: metaData.data.messague,
              showConfirmButton: false,
              timer: 1500});
  }
 }catch(e){console.log(e);}
} 
/****************Agendar Comercial***************** */
/*******tiempo de comercial */
const TimeEstado =e=>{
  setTiempo(e.target.value);
}
const agenComer = async () =>{
  let oport = document.getElementById('coOpor').value;
  let fecha = value.toISOString().split("T")[0];
  let hora = document.getElementById('time').value;
  let fechPro = fecha+'-'+hora;
  let aliComer = document.getElementById('se-come').value;

  let data={
    oport,
    aliComer,
    AliasSessions,
    fechPro,
    Tiempo
  }
  try{
    if(!fecha){return alert('Seleccione la fecha y la hora¡!')}
    else{
    let metaData =  await axios.post(`/agreComer`,data);
    asignarComercialClose();
    return Swal.fire({
      icon:  metaData.data.ico,
      title: metaData.data.messague,
      showConfirmButton: false,
      timer: 1500});
    }
   }catch(e){console.log(e);}
}
/*****************Guardar Bitacora***************** */
const saveBita = async (codOport) =>{
  const data={
    AliasSessions,
    codOport,
    Html
  }
  try{
    if(!data.codOport | !data.Html){setErrorBita(true)}
    else{
    let metaData =  await axios.post(`/agreBitaOpor`,data);
    notidata();
    bitacoraClose();
    return Swal.fire({
      icon:  metaData.data.ico,
      title: metaData.data.messague,
      showConfirmButton: false,
      timer: 1500});
    }
   }catch(e){console.log(e);
    bitacoraClose();
    return Swal.fire({
      icon:  'error',
      title: e,
      showConfirmButton: false,
      timer: 1500});
  }
}
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
            <Tooltip title={t('Asignar Comercial')} arrow>
            <IconButton onClick={handleCreateUsuariosOpen}>
            <AddCircleIcon className='verde'/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t('Agendar Comercial')} arrow>
            <IconButton onClick={asignarComercial}>
              <PersonAddIcon className='amarillo'/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t(' Bitacora')} arrow>
            <IconButton onClick={()=>bitacora(opor.solinume)}>
              <BorderColorIcon className='azulCla'/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t('Informacio Cliente')} arrow>
            <IconButton
            component={RouterLink}
            to={
              `/${
                location.pathname.split('/')[1]
              }/management/comer/oport/`+opor.solinume}
            >
              <NavigateNextIcon className='naranja'/>
            </IconButton>
            </Tooltip>
      </Typography>
      </Grid>
      {/* modal asignar comercial */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateUsuariosClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>{t('ASIGNAR COMERCIAL')}</Typography>
          <input type='text' value={opor.solinume}  id='codOpor' hidden></input>
          <input type='text'  id='select' hidden></input>
        </DialogTitle>
            <form>
              <DialogContent
                sx={{
                  p: 3
                }}
              >
                <Grid  container spacing={1}>
                <tbody style={{width:'50%', margin:'0 auto'}}>
                {ComerInge.map (datos => {
                 return (
                <TableRow key={datos}  md={12}>
                   <TableCell><Avatar  className='Avatar' sx={{mr: 3}} src={datos.avatar}/></TableCell>
                   <TableCell> {datos.usuanomb}</TableCell>
                   <TableCell>
                    <Button onClick={()=>SelecCome(datos.usuacodi)}><Check/></Button>
                  </TableCell>
                 </TableRow>
                 )})}   
                </tbody>
                </Grid> 
                <div>
                  { Exito ?  <Alert severity="success" className='Alert'>Comercial Seleccionado!</Alert> : ''}
                </div>
                <div>
                  { Error ?  <Alert severity="error" className='Alert'>Seleccióne el Comercial!</Alert> : ''}
                </div>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                 <Button onClick={handleCreateUsuariosClose} 
                  style={{
                    background:'#ba000d',
                    color:'#fff'
                  }}
                  variant="contained"
                  endIcon={<ClearIcon/>}>
                  Cancelar
                </Button>
                <Button 
                  onClick={RegCOmer}
                  variant="contained"
                  endIcon={<SaveIcon/>}>
                  Guardar
                </Button>
              </DialogActions>
            </form>
      </Dialog>
      {/*modal Agendar Comercial */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={opens}
        onClose={asignarComercialClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('AGENDAR  COMERCIAL')}
          </Typography>
          <input type='text' id='coOpor' value={opor.solinume} hidden/>
        </DialogTitle>
            <form>
              <DialogContent
              style={{width:'90%',margin:'0 auto'}}
                sx={{
                  p: 1
                }}
              >
                <label className='label-input'>Cerrar Oportunidad</label>
                <div className='Select-cont'>
                    <select id='se-come'>
                        <option>Seleccione....</option>
                        {ComerInge.map((option) => (
                         <option value={option.usuaalia}>{option.usuanomb}</option>
                        ))}
                    </select>
                </div>
                <Grid  container spacing={1} item>
                <Grid
                  item
                  md={2}
                >
                <Box
                  pr={2}
                  sx={{
                    pt: 2,
                  }}
                >
                  {t('fecha Programar')}:
                </Box>
                </Grid>
                <Grid
                  md={5}
                  item
                >
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      placeholder={t('Select due date...')}
                      {...params}
                    />
                  )}
                />
                </Grid>
                <Grid
                  md={5}
                  sx={{
                    mb: 3
                  }}
                  item>
                  <TextField
                      style={{width:'100%',cursor:'pointer'}}
                      id="time"
                      label="Horas"
                      type="time"
                      defaultValue="07:30"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                </Grid>
                <Grid
                style={{
                  paddingLeft:'20px',
                  fontSize:'18px'
                }}
                md={12}
                sx={{
                  mb: 3
                }}
                item>
                  {t('Tiempo')}:
                  <input id='1hor' type="radio" name="color" value="0" checked={Tiempo == 0 ? true : false} onChange={TimeEstado}/>
                  <label className='lab-min'>1 Hora</label>
                  <input id='2hor' type="radio" name="color" value="1" checked={Tiempo == 1 ? true : false} onChange={TimeEstado}/>
                  <label className='lab-min'>2 Hora</label>
                </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                 <Button onClick={asignarComercialClose} 
                  style={{
                    background:'#ba000d',
                    color:'#fff'
                  }}
                  variant="contained"
                  endIcon={<ClearIcon/>}>
                  Cancelar
                </Button>
                <Button 
                  onClick={agenComer}
                  variant="contained"
                  endIcon={<SaveIcon/>}>
                  Guardar
                </Button>
              </DialogActions>
            </form>
      </Dialog>
      {/* modal bitacora */}
      <Dialog
        maxWidth="md"
        open={opent}
        onClose={bitacoraClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            <label>BITACORA OPORTUNIDAD No.</label><b className='naranja'>{opor.solinume}</b>
          </Typography>
        </DialogTitle>
            <form>
              <DialogContent>
              <Grid item xs={12} md={12}>
              <tbody>
                <TableCell>{t('Usuario')}</TableCell>
                <TableCell>{t('Fecha')}</TableCell>
                <TableCell>{t('Comentario')}</TableCell>
                {bita.map(data => {
                return (
                <TableRow key={data}>
                   <TableCell>{data.usuaalia}</TableCell>
                   <TableCell>{new Date(data.sobifech).toLocaleString()}</TableCell>
                   <div dangerouslySetInnerHTML={{__html:data.sobitext}} className='container'/>
                 </TableRow>
                 )})}   
              </tbody>
              </Grid>
                <Grid item xs={11} style={{margin:'0 auto'}}>
                  <label>Este Campo Es Obligatorio</label><a className='Size-20 ty1 naranja'>*</a>
                  <EditorText setHtml={setHtml}/>
                </Grid>
                <Grid item xs={11} style={{margin:'0 auto'}}>
                  <label for="emails">Notificar Usuarios</label>
                    <input
                      className='select-multi'
                      type="text"
                      multiple
                      name="emails"
                      id="emails"
                      list="drawfemails"
                      required
                      size="64"
                      placeholder='Seleccione Varias...'
                      onClick={OnclikAsunto}
                    />
                  <datalist id="drawfemails">
                    {ComerInge.map((data)=>(
                      <option value={data.usuaalia}>{data.usuanomb}</option>
                    ))}
                  </datalist>
                </Grid>
                <Grid item xs={10} style={{margin:'0 auto'}}>
                  { Asunto ? <div><label>Asunto</label><a className='Size-20 ty1 naranja'>*</a><input type="text" placeholder='Comentario...' className='select-multi'/></div>: ''}
                </Grid>
              </DialogContent>
              <div>
                  { ErrorBita ?  <Alert severity="error" className='Alert'>Faltan Campos Obligatorios!! *</Alert> : ''}
              </div>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                <Button  onClick={bitacoraClose} style={{
                    background:'#ba000d',
                    color:'#fff'
                  }}>Cancelar<ClearIcon className='ico'/></Button>
                <Button variant="contained"  onClick={()=>saveBita(opor.solinume)}>Guardar<SaveIcon className='ico'/></Button>
              </DialogActions>
            </form>
      </Dialog>
    </>
  );
}

export default PageHeader;
