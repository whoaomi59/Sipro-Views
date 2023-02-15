import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2';
import axios from 'axios';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';
import ClearIcon from '@mui/icons-material/Clear';
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

function PageHeader(data) {
  const { t } = useTranslation();
  const [Edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [Error,setError] = useState(false);


  let nombre = name.toUpperCase();
  const handleChange = event => {
    setName(event.target.value)
  }
/************FUNCIONES******************* */
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
        <Tooltip title={t('Editar')} arrow>
            <IconButton onClick={EditOpen}>
                <ChatIcon className='azulCla'/>
            </IconButton>
        </Tooltip>
        <Tooltip title={t('Editar')} arrow>
            <IconButton onClick={EditOpen}>
                <DescriptionIcon className='azulCla'/>
            </IconButton>
        </Tooltip>
        <Tooltip title={t('Editar')} arrow>
            <IconButton onClick={EditOpen}>
                <ClearIcon className='azulCla'/>
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
                      <FormControlLabel
                       
                        control={<Switch color="primary" />}
                      />
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
