import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {
  Box,
  Card,
  Grid,
  Divider,
  IconButton,
  InputAdornment,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Tabs,
  TextField,
  Typography,
  Dialog,
  styled,
  Button
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const applyFilters = (data, query, filters) => {
  return data.filter((data) => {
    let matches = true;

    if (query) {
      const properties = ['id', 'cliente', 'comercial','factura'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (data[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && data.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && data[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (data, page, limit) => {
  return data.slice(page * limit, page * limit + limit);
};

const Results = ({ data }) => {
  const [selectedItems, setSelectedUsuarios] = useState([]);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    id: null
  });
  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };


  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };
  const filteredUsuarios = applyFilters(data, query, filters);
  const paginatedUsuarios = applyPagination(filteredUsuarios, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const [toggleView, setToggleView] = useState('table_view');
  /************FUNCIONES************** */
  const Consepto = (cons) =>{
    const map = {
      I: {
        text: 'Uso Interno',
      },
      N: {
        text: 'Insumo',
      },
      F: {
        text: 'Facturable',
      },
      C: {
        text: 'Contrato con repuestos',
      },
      S: {
        text: 'Soporte',
      },
      G: {
        text: 'Garantia',
      },
      A: {
        text: 'Alquiler',
      },
      P: {
        text: 'Prestamo',
      },
      L: {
        text: 'Pruebas de laboratorio',
      },
      '': {
        text: '',
      },
    };
  
    const { text } = map[cons];
   
  
    return <label style={{fontSize:'16px',fontWeight:'bold'}}>{text}</label>;
  }
  /****************AXIOS**************** */
  const OpenModal = (id) => {
    setOpen(true);
    DetaRequi(id)
  };
  const CloseModal = () => {
    setOpen(false);
  };
  const DetaRequi = (requi) =>{
    data={
      requi,
    }
    console.log(data)
  };
  return (
    <>
      {toggleView === 'table_view' && (
        <Card>
          <Box p={2}>
            {!selectedBulkActions && (
              <TextField
                sx={{
                  m: 0
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  )
                }}
                onChange={handleQueryChange}
                placeholder={t('Buscar...')}
                value={query}
                size="small"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            )}
            {selectedBulkActions}
          </Box>

          <Divider />
          {paginatedUsuarios.length === 0 ? (
            <>
              <Typography
                sx={{
                  py: 10
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t("No encontrar ningún resultado¡!")}
              </Typography>
            </>
          ) : (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                    <TableCell>{('Requisición')}</TableCell>
                    <TableCell>{('Salida')}</TableCell>
                    <TableCell>{('Solicitud Usuario')}</TableCell>
                    <TableCell>{('Fecha Salida')}</TableCell>
                    <TableCell>{('Empresa')}</TableCell>
                    <TableCell>{('Fecha Devolución')}</TableCell>
                    <TableCell>{('Seriales')}</TableCell>
                    <TableCell>{('Comercial')}</TableCell>
                    <TableCell>{('Concepto de Salida')}</TableCell>
                    <TableCell>{('')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsuarios.map(data => {
                      const isUsuariosSelected = selectedItems.includes(data.pedinume);
                      return (
                        <TableRow hover key={data.pedinume} selected={isUsuariosSelected}>
                            <TableCell>
                              <Button onClick={()=>OpenModal(data.pedinume)}>
                              {data.pedinume}
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button>
                              {data.salinume}
                              </Button>
                              </TableCell>
                            <TableCell>{data.usuanomb}</TableCell>
                            <TableCell>{data.salifech}</TableCell>
                            <TableCell>{data.emprnomb}</TableCell>
                            <TableCell>{data.salifdev}</TableCell>
                            <TableCell>{data.maquseri}</TableCell>
                            <TableCell>{data.usuanomb}</TableCell>
                            <TableCell>{Consepto(data.saliconcep)}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={2}>
                <TablePagination
                  component="div"
                  count={filteredUsuarios.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Box>
            </>
          )}
        </Card>
      )}
      {/**********MODAL*****/}
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={CloseModal}
      >
            <form>
              <DialogContent
                sx={{
                  p: 3
                }}
              >
                <Grid  container spacing={1}>
                  <div className='box'>
                    <div className='cont-flex'>
                      <h1>DATOS DE LA REQUISICIÓN - REPUESTO</h1>
                    </div>
                    <label className='label-input'>No. Requisición</label><input type='text' className='input-text'/>
                    <label className='label-input'>Fecha de la Requisición</label><input type='text' className='input-text'/>
                    <label className='label-input'>Usuario</label><input type='text' className='input-text'/>
                    <label className='label-input'>Cliente</label><input type='text' className='input-text'/>
                    <label className='label-input'>NIT</label><input type='text' className='input-text'/>
                    <label className='label-input'>Dirección</label><input type='text' className='input-text'/>
                    <label className='label-input'>Teléfono</label><input type='text' className='input-text'/>
                    <label className='label-input'>Orden de Servicio</label><input type='text' className='input-text'/>
                  </div>
                  {/************/}
                  <div className='box'>
                    <label className='label-input'>Ticket</label><input type='text' className='input-text'/>
                    <label className='label-input'>Fecha de creación de ticket</label><input type='text' className='input-text'/>
                    <label className='label-input'>Diferencia fecha ticket y fecha requisición</label><input type='text' className='input-text'/>
                  </div>
                  <div className='box'>
                    <label className='label-input'>Destino</label><input type='text' className='input-text'/>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                      <label className='label-input'>Estado</label>
                      <Alert severity="error">This is an error alert — check it out!</Alert>
                      <Alert severity="warning">This is a warning alert — check it out!</Alert>
                      <Alert severity="info">This is an info alert — check it out!</Alert>
                      <Alert severity="success">This is a success alert — check it out!</Alert>
                    </Stack>
                  </div>
                </Grid> 
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                 <Button onClick={CloseModal} 
                  style={{
                    background:'#ba000d',
                    color:'#fff'
                  }}
                  variant="contained"
                  endIcon={<ClearIcon/>}>
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SaveIcon/>}>
                  Guardar
                </Button>
              </DialogActions>
            </form>
      </Dialog>
    </>
  );
};

Results.propTypes = {
  data: PropTypes.array.isRequired
};

Results.defaultProps = {
    data: []
};

export default Results;
