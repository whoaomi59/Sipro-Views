import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import RateReviewIcon from '@mui/icons-material/RateReview';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Fijo from '@mui/icons-material/RingVolume';
import Phone from '@mui/icons-material/PhonelinkRing';
import EditorText from './materials/textEditor';
import useRefMounted from 'src/hooks/useRefMounted';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2';
import Axios from 'src/utils/axios';
import axios from 'axios';
import {
Tooltip,
IconButton,
Grid,
Dialog,
DialogTitle,
DialogActions,
DialogContent,
Typography,
Button,
TableCell,
TableRow
} from '@mui/material';
import Autosuggest from 'react-autosuggest';


function PageHeader(data) {
let emprcodi = data.data.emprcodi;
let usuacodi = data.data.usuacodi;
let solinume = data.data.solinume;

const { t } = useTranslation();
const [bitaState, setBita] = useState(false);
const [detaState, setDeta] = useState(false);
const [Html, setHtml] = useState('');
const [Error, setError] = useState(false);
const [ErrorBit, setErrBita] = useState(false);
/************FUNCIONES******************* */
/************SESIONES**************** */
const isMountedRef = useRefMounted();
const [AliasSessions, setSessions] = useState([]);
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
/************BITACORA***************** */
const BitaOpen= () => {
setBita(true);
getBitacoras();
};
const BitaClose = () => {
setBita(false);
};
const isMountedRe = useRefMounted();
const [bita, setBitacoras] = useState([]);

const getBitacoras = useCallback(async () => {
let data = {emprcodi}
try {
const response = await axios.post('/LisReacBita',data);
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
const saveBita = async () =>{
let data = {Html,emprcodi,AliasSessions};
try{
  if(!data.Html | !data.emprcodi){setErrBita(true);}
  else{
    let metaDat = await axios.post('/SaveBitaReac',data);
    BitaClose();
    return Swal.fire({
    icon:  metaDat.data.ico,
    title: metaDat.data.message,
    showConfirmButton: false,
    timer: 1500});
  }
  
}catch(e){console.log(e);
    BitaClose();
    return Swal.fire({
    icon:  'error',
    title: e,
    showConfirmButton: false,
    timer: 1500})}
}
/********DETALLE**************** */
const DetalleOpen = () =>{
setDeta(true);
}
const DetalleClose = () =>{
setDeta(false);
}
const SaveDetalle = async () =>{
let leincont = document.getElementById('leincont').value;
let leintele = document.getElementById('leintele').value;
let leincelu = document.getElementById('leincelu').value;
let leinmail = document.getElementById('leinmail').value;
let leinnece = document.getElementById('leinnece').value;

let data = {usuacodi,leincont,leintele,leincelu,leinmail,leinnece,solinume}
if(!data.usuacodi | !data.leincont | !data.leinmail){setError(true);}else{
  try{
    let metaDat = await axios.post('/SaveProsReac',data);
    DetalleClose();
    return Swal.fire({
    icon:  metaDat.data.ico,
    title: metaDat.data.message,
    showConfirmButton: false,
    timer: 1500});
  }catch(e){console.log(e); 
    DetalleClose()
    return Swal.fire({
    icon:  'error',
    title: e,
    showConfirmButton: false,
    timer: 1500})}
}
}

const[presidentes, setPresidentes]= useState(data);
const[value, setValue]= useState("");
const[presidenteSeleccionado, setPresidenteSeleccionado]= useState({});

const onSuggestionsFetchRequested=({value})=>{
  setPresidentes(filtrarPresidentes(value));
}

const filtrarPresidentes=(value)=>{
  const inputValue=value.trim().toLowerCase();
const inputLength=inputValue.length;

  var filtrado=data.filter((presidente)=>{
    var textoCompleto=presidente.presidente + " - " +presidente.pais;

    if(textoCompleto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(inputValue)){
      return presidente;
    }
  });

  return inputLength===0 ? [] : filtrado;
}

const onSuggestionsClearRequested = () =>{
  setPresidentes([]);
}

const getSuggestionValue=(suggestion)=>{
  return `${suggestion.presidente} - ${suggestion.pais}`;
}

const renderSuggestion=(suggestion)=>(
  <div className='sugerencia' onClick={()=>seleccionarPresidente(suggestion)}>
    {`${suggestion.presidente} - ${suggestion.pais}`}
  </div>
);

const seleccionarPresidente=(presidente)=>{
  setPresidenteSeleccionado(presidente);
}

const onChange=(e, {newValue})=>{
  setValue(newValue);
}






return (
  <>
    <Grid container justifyContent="space-between" alignItems="center">
    <Typography noWrap>
      <Tooltip title={t('Bitacora')} arrow>
      <IconButton onClick={BitaOpen}>
        <RateReviewIcon className='azulCla'/>
      </IconButton>
      </Tooltip>
      <Tooltip title={t('Detalle')} arrow>
      <IconButton onClick={DetalleOpen}>
        <NavigateNextIcon className='naranja'/>
      </IconButton>
      </Tooltip>
    </Typography>
    </Grid>
    {/* modal bitacora */}
    <Dialog
      maxWidth="md"
      open={bitaState}
      onClose={BitaClose}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          <label>BITACORA</label><b className='naranja text-b'>{emprcodi}</b>
        </Typography>
      </DialogTitle>
          <form>
            <DialogContent>
            <Grid item md={12}>
            <tbody>
              <TableCell>{t('Usuario')}</TableCell>
              <TableCell>{t('Fecha')}</TableCell>
              <TableCell>{t('Comentario')}</TableCell>
              {bita.map(data => {
              return (
              <TableRow key={data}>
                  <TableCell><p className='azulCorp'>{data.usuaalia}</p></TableCell>
                  <TableCell>{data.embifech}</TableCell>
                  <div dangerouslySetInnerHTML={{__html: data.embitext}} className='container'/>
                </TableRow>
                )})}   
            </tbody>
            </Grid>
              <Grid item xs={11} style={{margin:'0 auto'}}>
                <EditorText setHtml={setHtml}/>
              </Grid>
              <div>
                { ErrorBit ?  <Alert severity="error" className='Alert'>Campos sin llenar en la Bitacora¡!</Alert> : ''}
              </div>
            </DialogContent>
            <DialogActions
              sx={{
                p: 3
              }}
            >
              <Button  onClick={BitaClose} style={{
                  background:'#ba000d',
                  color:'#fff'
                }}>Cancelar</Button>
              <Button variant="contained"  onClick={saveBita}>Guardar</Button>
            </DialogActions>
          </form>
    </Dialog>
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
                <label className='label-input'>Nombre Contacto</label><input type='text' className='input-text' id='leincont'/>
                <label className='label-input'>Telefono</label>
              <Grid md={12} display='flex'>
                <div className="box">
                  <div className="cont-flex">
                    <label className='label-input'>Fijo</label>
                    <div className="LaGroup">
                      <input type='text' className='inGrop' id='leintele'/>
                      <button className='botu-Dimi'><Fijo/></button>
                    </div>
                    <label className='label-input'>Celular</label>
                    <div className="LaGroup">
                      <input type='text' className='inGrop' id='leincelu'/>
                      <button className='botu-Dimi'><Phone/></button>
                    </div>
                  </div>
                </div>
              </Grid>
                <label className='label-input'>Correo Electronico</label><input type='text' className='input-text' id='leinmail'/>
                <label className='label-input'>Necesidad</label>
                <textarea className='textTarea' name="textarea" placeholder='Necesidad o Descripción de la oportunidad' id='leinnece'/>
              </Grid>
              <div>
                { Error ?  <Alert severity="error" className='Alert'>Campos sin llenar en la reactivación¡!</Alert> : ''}
              </div>
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
                onClick={SaveDetalle}
                variant="contained">
                Guardar
              </Button>
            </DialogActions>
          </form>
    </Dialog>
  </>
);
}

export default PageHeader;
