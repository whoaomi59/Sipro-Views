import { useState } from 'react';
import PropTypes from 'prop-types';
import Iconoss from './ico'
import {
  Box,
  Card,
  Grid,
  Divider,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Typography,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import BulkActions from './BullAcctions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Radio from '@mui/icons-material/RadioButtonChecked';



const CardWrapper = styled(Card)(
  ({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
    transition: ${theme.transitions.create(['box-shadow'])};
  }
      
    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.colors.primary.main};
    }
  `
);

const applyFilters = (data, query, filters) => {
  return data.filter((data) => {
    let matches = true;

    if (query) {
      const properties = ['id', 'name', 'bitacira'];
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

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    role: null
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

  const handleViewOrientation = (_event, newValue) => {
    setToggleView(newValue);
  };
  const Clasificacion = (data) =>{
    if(data==1){return <label className='verdeOpacity ty1 verde'>Activo</label>}
    else{return <label className='naranjaOpacity  ty1 naranja'>Inactivo</label>}
  }
  const ComerActi = (data)  =>{
    if(data){
      return  <div className='azulCorpOpacity ty1 azulCorp borLet'>{data}</div>
    }else{return <div className='verdeOpacity ty1 verde borLet'>SIN COMERCIAL??!</div>}
  }
  const ComerInacti = (data) =>{
    if(data){return <div className='amarilloOpacity ty1 amarillo borLet'>{data}</div>}else{return <div></div>}
    
  }
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
      >
        <ToggleButtonGroup
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          value={toggleView}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="grid_view">
            <GridViewTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
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
            {selectedBulkActions && <BulkActions />}
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
                {t("No encontrar ning??n resultado??!")}
              </Typography>
            </>
          ) : (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('cliente')}</TableCell>
                      <TableCell style={{textAlign:'center'}}>{t('nit')}</TableCell>
                      <TableCell>{t('fecha creaci??n')}</TableCell>
                      <TableCell>{t('segmento')}</TableCell>
                      <TableCell>{t('clasificaci??n')}</TableCell>
                      <TableCell>{t('comercial')}</TableCell>
                      <TableCell>{t('ciudad')}</TableCell>
                      <TableCell>{t('')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsuarios.map(data => {
                      const isUsuariosSelected = selectedItems.includes(data.id);
                      return (
                        <TableRow hover key={data.nit} selected={isUsuariosSelected}>
                          <TableCell>{data.emprnomb}</TableCell>
                          <TableCell>{data.emprnit}</TableCell>
                          <TableCell>{data.emprfinc}</TableCell>
                          <TableCell> {data.segmnomb}</TableCell>
                          <TableCell>{Clasificacion(data.empracti)}</TableCell>
                          <TableCell>
                            <Typography>
                              <Typography>{ComerActi(data.comerActi)}</Typography>
                              <Typography>{ComerInacti(data.comerInacti)}</Typography>
                            </Typography>
                          </TableCell>
                          <TableCell>{data.muninomb}</TableCell>
                          <TableCell align="center">
                            <Iconoss data={data}/>
                          </TableCell>
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
      {toggleView === 'grid_view' && (
        <>
          <Card
            sx={{
              p: 2,
              mb: 3
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {paginatedUsuarios.length !== 0 && (
                <>
                  {selectedBulkActions && (
                    <Box flex={1} pl={2}>
                      <BulkActions />
                    </Box>
                  )}
                </>
              )}
              {!selectedBulkActions && (
                <TextField
                  sx={{
                    my: 0,
                    ml: paginatedUsuarios.length !== 0 ? 2 : 0
                  }}
                  fullWidth
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
                  margin="normal"
                  variant="outlined"
                />
              )}
            </Box>
          </Card>
          {paginatedUsuarios.length === 0 ? (
            <Typography
              sx={{
                py: 10
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              {t("No pudimos ")}
            </Typography>
          ) : (
            <>
              <Grid container spacing={3}>
                {paginatedUsuarios.map((data) => {
                  const isUsuariosSelected = selectedItems.includes(data.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={data.id}>
                      <CardWrapper
                        className={clsx({
                          'Mui-selected': isUsuariosSelected
                        })}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            zIndex: '2'
                          }}
                        >
                          <Box
                            px={2}
                            pt={2}
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="space-between"
                          >
                            {data.origen}
                            <IconButton
                              color="primary"
                              sx={{
                                p: 0.5
                              }}
                            >
                              <MoreVertTwoToneIcon />
                            </IconButton>

                          </Box>
                          <Box p={2} display="flex" alignItems="flex-start">
                            <Box>
                              <Box>
                                  {data.cliente}
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                >
                                ({data.ciudad})
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  pt: 0.3
                                }}
                                variant="subtitle2"
                              >
                                {data.segme}
                              </Typography>
                              <Typography
                                sx={{
                                  pt: 0.3
                                }}
                                variant="subtitle2"
                              >
                                {data.nit}
                              </Typography>
                              <Typography
                                sx={{
                                  pt: 1
                                }}
                                variant="h6"
                              >
                                {data.fechCreac}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Box
                            pl={2}
                            py={1}
                            pr={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography>
                              <b><Radio sx={{
                                  pt: 1
                                }} style={{color:'rgb(164, 199, 56)'}}/>
                              {data.clasificacion}</b>
                            </Typography>
                            <Typography>
                             <Iconoss/>
                            </Typography>
                            
                          </Box>
                        </Box>
                      </CardWrapper>
                    </Grid>
                  );
                })}
              </Grid>
              <Card
                sx={{
                  p: 2,
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Typography component="span" variant="subtitle1">
                    {t('Showing')}
                  </Typography>{' '}
                  <b>{limit}</b> {t('of')} <b>{filteredUsuarios.length}</b>{' '}
                </Box>
                <TablePagination
                  component="div"
                  count={filteredUsuarios.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  labelRowsPerPage=""
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Card>
            </>
          )}
        </>
      )}
      {!toggleView && (
        <Card
          sx={{
            textAlign: 'center',
            p: 3
          }}
        >
          <Typography
            align="center"
            variant="h4"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              my: 5
            }}
            gutterBottom
          >
            {t(
              'Elija entre vistas de tabla o de cuadr??cula'
            )}
          </Typography>
        </Card>
      )}
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
