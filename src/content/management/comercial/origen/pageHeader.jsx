import {useState}  from 'react';
import {
Typography,
Box,
alpha,
lighten,
Avatar,
styled,
Button,
Grid,
Dialog,
DialogTitle,
DialogActions,
DialogContent
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import Swal from 'sweetalert2';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
  
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
const [Edit, setEdit] = useState(false);
const [name, setName] = useState('');
const [Error,setError] = useState(false);
const [valSwi,setvalSwi] = useState(false);
let orignelim = valSwi ? '1':'0';
let nombre = name.toUpperCase();
const handleChange = event => {
  setName(event.target.value)
}
const Open= () => {
setEdit(true);
};
const Close = () => {
setEdit(false);
};
const Save = async () =>{
  let data = {nombre,orignelim}
  try{
    if(!data.nombre){setError(true)}
    else{
      let meta = await axios.post('/SaveOrigen',data);
      Close();
      return Swal.fire({
      icon: meta.data.ico,
      title: meta.data.message,
      showConfirmButton: false,
      timer: 1500
      })
    }
    
  }catch(e){console.log(e)}
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
            <TripOriginIcon fontSize="large" />
          </AvatarPageTitle>
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('ORIGEN COMERCIAL')}
            </Typography>
            <Typography variant="subtitle2">
              {t(
                'Sistema de Información y procesos.'
              )}
            </Typography>
          </Box>
        </Box>
        <Box mt={{ xs: 3, md: 0 }}>
          <Button variant="contained" onClick={Open}>Nuevo</Button>
        </Box>
      </Box>
      {/* modal Detalle*/}
      <Dialog
        fullWidth
        maxWidth="md"
        open={Edit}
        onClose={Close}
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
                  <label className='label-input'>Nombre</label>
                  <input type='text' className='input-text' value={name} onChange={handleChange}/>
                  <label className='label-input'>¿Inactivo?</label>
                    <div className='Swif-cont'>
                      <label>NO</label>
                        <input type='checkbox' className='swift' onChange={(event)=> setvalSwi(event.target.checked)}/>
                      <label>SI</label>
                    </div>
                </Grid>
                <div>
                  { Error ?  <Alert severity="error" className='Alert'>Ingrese el Nombre¡!</Alert> : ''}
                </div>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                <Button onClick={Close}style={{
                    background:'#ba000d'
                  }}
                  variant="contained">
                  Cancelar
                </Button>
                <Button
                onClick={Save}
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
  