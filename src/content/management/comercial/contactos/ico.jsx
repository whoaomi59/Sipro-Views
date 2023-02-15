
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
} from '@mui/material';

function PageHeader(data) {
  console.log(data)
  const { t } = useTranslation();
  const [opent, setOpent] = useState(false);
//---------------------------opent
const Detalle= () => {
  setOpent(true);
};
const DetalleClose = () => {
  setOpent(false);
};



  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
        <Tooltip title={t('Detalle')} arrow>
        <IconButton onClick={Detalle}>
          <BorderColorIcon className='amarillo'/>
        </IconButton>
        </Tooltip>
      </Typography>
      </Grid>
      {/* modal*/}
      <Dialog
        fullWidth
        maxWidth="md"
        open={opent}
        onClose={DetalleClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('CONTACTO DE LA EMPRESA')}
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
                <label className='label-input'>Nombre</label><input  type='text' className='input-text'/>
                <label className='label-input'>Correo</label><input type='text' className='input-text'/>
                <label className='label-input'>Celular</label><input type='text' className='input-text'/>
                <label className='label-input'>Tel. empresa</label><input type='text' className='input-text'/>
                <label className='label-input'>Cargo</label><input type='text' className='input-text'/>
                <label className='label-input'>Sede</label>
                    <div className='Select-cont'>
                      <select>
                        <option>Seleccione....</option>
                        <option>Sede Principal: Calle 16 6 66 Piso 29</option>
                      </select>
                      <button className='botu-Dimi'><AddCircleOutlineIcon/></button>
                    </div>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                <button
                  className='Btn naranjaBack'
                  variant="contained">
                  Eliminar
                </button>
                <button
                  className='Btn amarilloBack'
                  variant="contained">
                  Nuevo
                </button>
                <Button onClick={DetalleClose}style={{
                    background:'#ba000d'
                  }}
                  variant="contained">
                  Cerrar
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
