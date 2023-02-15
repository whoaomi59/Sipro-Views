
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import DatePicker from '@mui/lab/DatePicker';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
Autocomplete,
Avatar,
TableCell,
TableRow,
Tooltip,
IconButton,
styled,
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


import Sapo from './InfoCliente'


const Input = styled('input')({
  display: 'none'
});



const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(19)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);



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

//bitacoras
var bitacoras = [
  {
    numer:'221114',
    id:'1',
    usuario : 'ARIVER',
    fecha : '2022 Agosto-26 09:09:58',
    comentario : 'Se cambio la etapa de ninguno a CONCERTACION ,valor costo cambio a: $10,00, probabilidad cambio a: 50% y fecha de cierre: 2022-09-30'
  },
  {
    numer:'221114',
    id:'2',
    usuario : 'ARIVER',
    fecha : '2022 Agosto-26 09:09:58',
    comentario : 'Pendiente por parte de la Dirección Comercial, contacto con el Ing. Carlos para programar reunión con Mintic'
  }
]


function PageHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opent, setOpent] = useState(false);
  const [value, setValue] = useState(null);


  const handleCreateUsuariosOpen = () => {
    setOpen(true);
  };

  const handleCreateUsuariosClose = () => {
    setOpen(false);
  };
//---------------------------------------------
const asignarComercial= () => {
  setOpens(true);
};
const asignarComercialClose = () => {
  setOpens(false);
};
//---------------------------opent
const bitacora= () => {
  setOpent(true);
};
const bitacoraClose = () => {
  setOpent(false);
};



  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
            <Tooltip title={t('Agendar Comercial')} arrow>
            <IconButton  onClick={asignarComercial}>
              <PersonAddIcon className='verde'/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t(' Bitacora')} arrow>
            <IconButton
            onClick={bitacora}
            to={Movimientos[0].id}
            >
              <BorderColorIcon className='amarillo'/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t('Informacio Cliente')} arrow>
            <IconButton>
              <NavigateNextIcon className='azulCla'/>
            </IconButton>
            </Tooltip>
      </Typography>
      </Grid>
      {/*modal Agendar Comercial */}
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
                  {/* CALENDARIO */}
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
                      <b>{t('fecha Programar')}:</b>
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
                      <b style={{marginRight:'20px'}}>{t('Tiempo')}:</b>
                      <input type="radio" name="color" value="azul" style={{marginRight:'5px'}}/>
                      <label style={{marginRight:'18px'}}>1 Hora</label>
                      <input type="radio" name="color" value="azul" style={{marginRight:'5px'}}/>
                      <label>2 Hora</label>
                    </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
               //style={{background: 'rgba(35, 42, 46, 0.95)'}}
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
      {/* modal bitacora */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={opent}
        onClose={bitacoraClose}
      >
        <DialogTitle
        //style={{background: 'rgba(35, 42, 46, 0.95)'}}
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('BITACORA OPORTUNIDAD No.')+bitacoras[0].numer}
          </Typography>
        </DialogTitle>
            <form>
              <DialogContent
              style={{margin:'0 auto'}}
                sx={{
                  p: 1
                }}
              >
                <Grid md={12} container spacing={1}> 
                <tbody style={{width:'90%', margin:'0 auto'}}>
                <TableCell>{t('#')}</TableCell>
                <TableCell>{t('Usuario')}</TableCell>
                <TableCell>{t('Fecha')}</TableCell>
                <TableCell>{t('Comentario')}</TableCell>
                {Object.keys(bitacoras).map (datos => {
                 return (
                <TableRow key={datos}  md={12}>
                   <TableCell>{bitacoras[datos].id}</TableCell>
                   <TableCell> {bitacoras[datos].usuario}</TableCell>
                   <TableCell> {bitacoras[datos].fecha}</TableCell>
                   <TableCell> {bitacoras[datos].comentario}</TableCell>
                 </TableRow>
                 )})}   
               </tbody>
                </Grid>
                <Grid item xs={11} style={{margin:'0 auto'}}>
                  <FroalaEditorComponent tag='textarea'/>
                </Grid>
                <Grid item xs={11} style={{margin:'0 auto'}}>
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
                          placeholder={t('NOTIFICAR USUARIOS...')}
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
                <Grid item xs={10} style={{margin:'0 auto'}}>
                        <TextField
                          fullWidth
                          label={t('Asunto')}
                          name="asunto"
                          variant="outlined"
                        />
                  </Grid>
              </DialogContent>
              <DialogActions
               //style={{background: 'rgba(35, 42, 46, 0.95)'}}
                sx={{
                  p: 3
                }}
              >
                 <Button onClick={bitacoraClose} 
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
