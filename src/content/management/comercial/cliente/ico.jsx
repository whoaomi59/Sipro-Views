import { useState, useEffect, useCallback,useRef } from 'react';
import { useTranslation } from 'react-i18next';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DatePicker from '@mui/lab/DatePicker';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Swal from 'sweetalert2';
import Check from '@mui/icons-material/CheckBox';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
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

function PageHeader({data}) {
  let emprcodi = data.emprcodi;
  

  const ref = useRef(null);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opent, setOpent] = useState(false);
  const [value, setValue] = useState(null);
  const location = useLocation();
  const isMountedRef = useRefMounted();
  const [Error, setError] = useState(false);
  const [Exito, setExito] = useState(false);
  const [ComerInge, setUsuarios] = useState([]);

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
const bitacora= (data) => {
  setOpent(true);
};
const bitacoraClose = () => {
  setOpent(false);
};

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
/************Registro Comercial******************* */
const SelecCome = async (id) =>{
  document.getElementById('select').value=id;
  setExito(true);
  DeleteComer();
}
const RegCOmer = async () =>{
 let idCOmer = document.getElementById('select').value;
 let data = {idCOmer,emprcodi}
 try{
  if(!data.idCOmer){setError(true)}
  else{
  let metaData =  await axios.post(`/SaveAsingComer`,data);
  handleCreateUsuariosClose();
  return Swal.fire({
  icon:  metaData.data.ico,
  title: metaData.data.message,
  showConfirmButton: false,
  timer: 1500});
  }
 }catch(e){console.log(e);
    return Swal.fire({
    icon: 'Error',
    title: e,
    showConfirmButton: false,
    timer: 1500});
  }
} 
const DeleteComer = async () =>{
  let data={emprcodi};
  try{
    await axios.post('/deleteComer',data)
  }catch(e){console.log(e)}
}
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
            <Tooltip title={t('Asignar Comercial')} arrow>
            <IconButton
            onClick={handleCreateUsuariosOpen}
            style={{color:'rgb(164, 199, 56)'}}
            >
            <AddCircleIcon/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t('Nueva Oportunidad')} arrow>
            <IconButton
                onClick={asignarComercial}
                style={{color:'rgb(253, 189, 52)'}}
            >
                <PersonAddIcon/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t(' Bitacora')} arrow>
            <IconButton
            onClick={bitacora}
 
            style={{color:'rgb(50, 216, 188)'}}
            >
              <BorderColorIcon/>
            </IconButton>
            </Tooltip>
            <Tooltip title={t('Ver Detaller Cliente')} arrow>
              <IconButton
              style={{color:'rgb(241, 96, 29)'}}
              component={RouterLink}
              to={
                `/${
                  location.pathname.split('/')[1]
                }/management/comer/nuevpoli/`+emprcodi
              }>
              <NavigateNextIcon/>
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
          <Typography  variant="h4" gutterBottom >
            {t('BITACORA OPORTUNIDAD No.')+data.usuacodi}
          </Typography>
          <p ref={ref} id="sapo">{data.usuacodi}</p>
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

PageHeader.propTypes = {
  data: PropTypes.array.isRequired
};

PageHeader.defaultProps = {
    data: []
};


export default PageHeader;
