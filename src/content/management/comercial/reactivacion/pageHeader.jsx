import { useState, useEffect, useCallback } from 'react';
import {
Typography,
Box,
alpha,
lighten,
Avatar,
styled,
Button,
Dialog,
DialogTitle,
DialogContent,
Grid,
DialogActions
} from '@mui/material';
import Fijo from '@mui/icons-material/RingVolume';
import Phone from '@mui/icons-material/PhonelinkRing';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import Autosuggest from 'react-autosuggest';
  
const AvatarPageTitle = styled(Avatar)(
({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    color: ${theme.colors.primary.main};
    margin-right: ${theme.spacing(2)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[10]
        : theme.colors.alpha.white[50]
    };
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? '0 1px 0 ' +
          alpha(lighten(theme.colors.primary.main, 0.8), 0.2) +
          ', 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)'
        : '0px 2px 4px -3px ' +
          alpha(theme.colors.alpha.black[100], 0.4) +
          ', 0px 5px 16px -4px ' +
          alpha(theme.colors.alpha.black[100], 0.2)
    };
`
);

function PageHeader() {

const { t } = useTranslation();
const { user } = useAuth();
const [detaState, setDeta] = useState(false);
const [Error, setError] = useState(false);
const isMountedRe = useRefMounted();
const [Municipio, setMunicipio] = useState([]);
const DetalleOpen = () =>{setDeta(true);}
const DetalleClose = () =>{setDeta(false);}
/**************MUNICIPIOS************* */
const[Municipios, setMunicipios]= useState(Municipio);
const[value, setValue]= useState("");
const[MuniciSelect, setMuniciSelect]= useState({});
let municodi = MuniciSelect.municodi;

const SaveProspec = async () => {
  let leinempr = document.getElementById('leinempr').value;
  let leindire = document.getElementById('leindire').value;
  let leincont = document.getElementById('leincont').value;
  let leintele = document.getElementById('leintele').value;
  let leincelu = document.getElementById('leincelu').value;
  let leinmail = document.getElementById('leinmail').value;
  let leinnece = document.getElementById('leinnece').value;
  let data = {leinempr,leindire,leincont,leintele,leincelu,leinmail,leinnece,municodi};
  try{
    if(!data.leinempr){setError(true)}else{
    let meta = await axios.post('/CreatePros',data);
    DetalleClose();
    return Swal.fire({
    icon:  meta.data.ico,
    title: meta.data.message,
    showConfirmButton: false,
    timer: 1500});
    }
    
  }catch(e){console.log(e)
    return Swal.fire({
    icon:  'error',
    title: e,
    showConfirmButton: false,
    timer: 1500})}
}
const getMunicipios = useCallback(async () => {
  try {
  const response = await axios.get('/Municipios');
  if (isMountedRe.current) {
    setMunicipio(response.data);
  }
  } catch (err) {
  console.error(err);
  }
  }, [isMountedRe]);
  useEffect(() => {
  getMunicipios();
  },[getMunicipios]);


const onSuggestionsFetchRequested=({value})=>{
  setMunicipios(filtrarPresidentes(value));
}

const filtrarPresidentes=(value)=>{
  const inputValue=value.trim().toLowerCase();
const inputLength=inputValue.length;

  var filtrado=Municipio.filter((departamento)=>{
    var textoCompleto=departamento.depanomb + " - " +departamento.muninomb;

    if(textoCompleto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(inputValue)){
      return departamento;
    }
  });

  return inputLength===0 ? [] : filtrado;
}

const onSuggestionsClearRequested = () =>{
  setMunicipios([]);
}

const getSuggestionValue=(suggestion)=>{
  return `${suggestion.depanomb} - ${suggestion.muninomb}`;
}

const renderSuggestion=(suggestion)=>(
  <div className='sugerencia' onClick={()=>seleccionarPresidente(suggestion)}>
    {`${suggestion.depanomb} - ${suggestion.muninomb}`}
  </div>
);

const seleccionarPresidente=(departamento)=>{
  setMuniciSelect(departamento);
}

const onChange=(e, {newValue})=>{
  setValue(newValue);
}

const inputProps={
placeholder:"Ciudad/Municipio",
value,
onChange
};

const eventEnter=(e)=>{
if(e.key == "Enter"){
  var split = e.target.value.split('-');
  var departamento ={
    municodi: split[0].trim(),
    depanomb: split[1].trim(),
  };
  seleccionarPresidente(departamento);
}
}


  return (
    <>
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <AvatarPageTitle variant="rounded">
          <LocalActivityIcon fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('REACTIVACIÓN ')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'Sistema de Información y procesos.'
            )}
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <Button onClick={DetalleOpen} variant='outlined'>Nuevo</Button>
      </Box>
    </Box>
    {/**********modal********/}
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
              <label className='label-input'>CLiente</label><input type='text' className='input-text' id='leinempr'/>
              <label className='label-input'>Dirección</label><input type='text' className='input-text' id='leindire'/>
              <label className='label-input'>Nombre Contacto</label><input type='text' className='input-text' id='leincont'/>
              <label className='label-input'>Ciudad/Municipio</label>
              <Autosuggest 
              className='AutoComple'
              suggestions={Municipios}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              onSuggestionSelected={eventEnter}
              />
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
                { Error ?  <Alert severity="error" className='Alert'>Campos sin llenar en la Prospección!</Alert> : ''}
              </div>
            </DialogContent>
            <DialogActions
              sx={{
                p: 3
              }}
            >
              <Button 
              onClick={DetalleClose}
              style={{
                background:'#ba000d'
              }}
              variant="contained">
              Cancelar
              </Button>
              <Button
              onClick={SaveProspec}
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
  