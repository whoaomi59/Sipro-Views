/* eslint-disable jsx-a11y/label-has-for */
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';
/************************************************/
/********************************************** */
import EditorText from './materials/textEditor';
/******************************************************* */
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
const Indicador = <a className='Size-20 ty1 naranja'>*</a>;
function PageHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [Html, setHtml] = useState('');
  const [ComerInge, setUsuarios] = useState([]);
  const isMountedRef = useRefMounted();
  const { user } = useAuth();
  
  const handleCreateUsuariosOpen = () => {
    setOpen(true);
  };

  const handleCreateUsuariosClose = () => {
    setOpen(false);
  };
  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/listOrig');
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

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('SEGUIMIENTO DE OPORTUNIDADES')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              ''
            )}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateUsuariosOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Nuevo')}
          </Button>
        </Grid>
      </Grid>
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
          <Typography variant="h4" gutterBottom>
            {t('NUEVA OPORTUNIDAD')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              ''
            )}
          </Typography>
        </DialogTitle>
        <Formik>
            <form>
              <DialogContent
                sx={{
                  p: 3
                }}
              >
                <Grid  container spacing={1}>
                    <Grid container spacing={5}>
                    <Grid
                      xs={12}
                      sm={5}
                      item
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src="/static/res.svg" alt="data" className='imagen'/>
                    </Grid>
                    <Grid xs={12} sm={7} item >
                        <label className='label-input'>Origen</label>{Indicador}
                        <div className='Select-cont'>
                        <select id='se-come'>
                            <option>Seleccione....</option>
                            {ComerInge.map((option) => (
                            <option value={option.orignume}>{option.orignomb}</option>
                            ))}
                        </select>
                        </div>
                        <label className='label-input'>Cliente</label>{Indicador}<input type='text' className='input-text'/>
                        <label className='label-input'>Comercial</label>{Indicador}<input type='text' className='input-text'/>
                    </Grid>
                    <Grid xs={12} sm={12} item >
                    <label className='label-input'>Necesidad</label>{Indicador}
                      <EditorText setHtml={setHtml}/>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCreateUsuariosClose}style={{background:'#ba000d'}}
                  variant="contained">
                  Cancelar
                </Button>
                <Button
                  variant="contained">
                  Guardar
                </Button>
              </DialogActions>
            </form>
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;
