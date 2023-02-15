import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import Alert from '@mui/material/Alert';
import useRefMounted from 'src/hooks/useRefMounted';
import Swal from 'sweetalert2';
import axios from 'axios';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Fijo from '@mui/icons-material/RingVolume';
import Phone from '@mui/icons-material/PhonelinkRing';
import EditorText from './materials/textEditor';
import Autosuggest from 'react-autosuggest';
import {
Tooltip,
IconButton,
Grid,
Dialog,
DialogTitle,
DialogActions,
DialogContent,
Typography,
Button
} from '@mui/material';

const Indicador = <a className='Size-20 ty1 naranja'>*</a>;

function PageHeader({data}) {
  let nume = data.leinnume;
  const { t } = useTranslation();
  const [Edit, setEdit] = useState(false);
  const [Error,setError] = useState(false);
  const [Html, setHtml] = useState('');
 
/************FUNCIONES******************* */
const [Info, setBita] = useState([]);
const isMountedBita = useRefMounted();
const getBita = useCallback(async () => {
  const data ={nume} 
  try {
    const response = await axios.post(`/listaUpdateLeads`,data);
    if (isMountedBita.current) {
      setBita(response.data[0]);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountedBita]);
useEffect(() => {
  getBita();
},[getBita]);

/************Detalles***************** */
const EditOpen= () => {
  setEdit(true);
};
const EditClose = () => {
    setEdit(false);
};
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
        <Tooltip title={t('Crear Oportunidad')} arrow>
            <IconButton onClick={EditOpen}>
                <NavigateNextIcon className='naranja naranjaOpacity'/>
            </IconButton>
        </Tooltip>
      </Typography>
      </Grid>
      {/* modal Detalle*/}
      <Dialog
        fullWidth
        maxWidth="md"
        open={Edit}
        onClose={EditClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('AGREGAR OPORTUNIDAD')}
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
                  <label className='label-input'>Cliente</label>{Indicador}<input type='text' className='input-text' value={Info.leinempr} disabled/>
                  <label className='label-input'>Dirección</label>{Indicador}<input type='text' className='input-text' value={Info.leindire} disabled/>
                  <label className='label-input'>Ciudad/Municipio</label>{Indicador}
                  <input type='text' className='input-text' value={Info.municodi} id='municodi' disabled/>
                  <label className='label-input'>Nombre Contacto</label>{Indicador}<input type='text' className='input-text' value={Info.leincont} disabled/>
                  <label className='label-input'>Telefono</label>{Indicador}
                    <Grid md={12} display='flex'>
                      <div className="box">
                        <div className="cont-flex">
                          <label className='label-input'>Fijo</label>
                          <div className="LaGroup">
                            <input type='text' className='inGrop' value={Info.leintele} disabled/>
                            <button className='botu-Dimi'><Fijo/></button>
                          </div>
                          <label className='label-input'>Celular</label>
                          <div className="LaGroup">
                            <input type='text' className='inGrop' value={Info.leincelu} disabled/>
                            <button className='botu-Dimi'><Phone/></button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  <label className='label-input'>Correro Electrónico</label>{Indicador}<input type='text' className='input-text' value={Info.leinmail} disabled/>
                  <label className='label-input'>Necesidad</label>{Indicador}
                  <textarea className='textTarea' name="textarea" placeholder='Necesidad o Descripción de la oportunidad' id='leinnece' value={Info.leinnece} disabled/>
                  <label className='label-input'>Cliente</label>{Indicador}<input type='text' className='input-text'/>
                  <label className='label-input'>Comentario Adicional</label>
                    <Grid item xs={11} style={{margin:'0 auto'}}>
                      <EditorText setHtml={setHtml}/>
                    </Grid>
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
                <Button onClick={EditClose}style={{
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

export default PageHeader;
