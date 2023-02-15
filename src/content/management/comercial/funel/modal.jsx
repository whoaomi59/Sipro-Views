/* eslint-disable jsx-a11y/label-has-for */
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';
import useAuth from 'src/hooks/useAuth';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';


import {
  Autocomplete,
  Avatar,
  Chip,
  styled,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Zoom,
  Typography,
  TextField,
  Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSnackbar } from 'notistack';

const Input = styled('input')({
  display: 'none'
});


//options select
var Movimientos = [
    {
        id:1,
        avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/ARIVER.png',
        name:'ARACELLY JANETH RIVERO',
    },
    {
        id:2,
        avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/ELEON.jpg',
        name:'EDGAR LEONARDO LEÓN DÍAZ'
    },
    {
        id:3,
        avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/EMOREA.jpg',
        name:'ENOC MOREA VELANDIA'
    },
    {
      id:4,
      avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/HRODRIGUEZ.jpg',
      name:'HENRY RODRIGUEZ RAMOS'
  },
  {
    id:5,
    avatar:'https://yt3.ggpht.com/ytc/AMLnZu9JYLqpZfWXkyMmadRKdxqQ-2aaoJE8F9SlHnH5=s900-c-k-c0x00ffffff-no-rj',
    name:'INGEAL'
},
{
  id:6,
  avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/JMELENA.jpg',
  name:'JAVIER ALEXEI MELENA YANZA'
},
{
id:7,
avatar:'https://www.sipro.ingeal.com/documentos/rrhh/fotos/LRODRIGUEZ.jpg',
name:'LAURA XIMENA RODRÍGUEZ FARFÁN'
},
]
var fecha =[
    {
        date:'Lunes: 2022-09-05'
    },
    {
        date:'Lunes: 2022-09-12'
    },
    {
        date:'Lunes: 2022-09-19'
    },
    {
        date:'Lunes: 2022-09-05'
    },
]

function PageHeader() {
  const { t } = useTranslation();
  const [opens, setOpens] = useState(false);

  const asignarComercial= () => {
    setOpens(true);
  };
  const asignarComercialClose = () => {
    setOpens(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('FUNNEL PROSPECTOS')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'Sistema de Información y procesos '
            )}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={asignarComercial}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Asignar Comercial')}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        open={opens}
        onClose={asignarComercialClose}
      >
        <DialogTitle
        //style={{background: 'rgba(35, 42, 46, 0.95)'}}
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('AGENDAR  COMERCIAL')}
          </Typography>
        </DialogTitle>
            <form>
              <DialogContent
              style={{width:'90%',margin:'0 auto'}}
                sx={{
                  p: 1
                }}
              >
                <Grid  container spacing={1}>
                <Autocomplete
                    item
                    style={{width:'100%',padding:'20px'}}
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      getOptionLabel={(option) => option.title}
                      options={Movimientos}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Avatar
                            sx={{
                              mr: 3
                            }}
                            src={option.avatar}
                          />
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                        style={{fontZise:'50px'}}
                          {...params}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true
                          }}
                          placeholder={t('SELECCIONE COMERCIAL...')}
                        />
                      )}
                      renderTags={(members, getTagProps) =>
                        members.map((ev, index) => (
                          <Chip
                            key={ev.name}
                            label={ev.name}
                            {...getTagProps({ index })}
                            avatar={<Avatar src={ev.avatar} />}
                          />
                        ))
                      }
                />
                </Grid>
                <Grid  container spacing={1}>
                <Autocomplete
                    item
                    style={{width:'100%',padding:'20px',color:'#fff'}}
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      getOptionLabel={(option) => option.title}
                      options={fecha}
                      renderOption={(props, option) => (
                        <li {...props}>
                          {option.date}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                        style={{fontZise:'50px'}}
                          {...params}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true
                          }}
                          placeholder={t('SELECCIONE FECHA SEMANA...')}
                        />
                      )}
                      renderTags={(members, getTagProps) =>
                        members.map((ev, index) => (
                          <Chip
                          style={{color:'#fff'}}
                            key={ev.date}
                            label={ev.date}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                />
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
                  style={{
                    color:'#fff'
                  }}
                  variant="contained"
                  endIcon={<SaveIcon/>}>
                  Guardar
                </Button>
              </DialogActions>
            </form>
      </Dialog>
    </>
  );
}

export default PageHeader;
