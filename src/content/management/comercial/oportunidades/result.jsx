import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Etapa from './materials/Etapa'
import Dias from './materials/Dias'
import Iconoss from './ico'
import {
  Box,
  Card,
  Grid,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Tab,
  Tabs,
  TextField,
  Typography,
  Dialog,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Label from 'src/components/Label';
import BulkActions from './BullAcctions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';

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
const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);
const estaDo = (estados) => {
  const map = {
    0: {
      text: 'Abierta',
      color: 'rgb(164, 199, 56)'
    },
    1: {
      text: 'Cerrada',
      color: 'rgb(241, 96, 29)'
    },
  };

  const { text, color } = map[estados];
 

  return <Label style={{color:color}}>{text}</Label>;
};

const applyFilters = (oport, query, filters) => {
  return oport.filter((oport) => {
    let matches = true;

    if (query) {
      const properties = ['solinume', 'emprnomb','usuanomb','orignomb'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (oport[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && oport.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && oport[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (oport, page, limit) => {
  return oport.slice(page * limit, page * limit + limit);
};

const Results = ({ oport }) => {

  const [selectedItems, setSelectedUsuarios] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  const tabs = [
    {
      value: 'all',
      color:'rgba(0, 102, 153, 0.7)',
      label: t('Todos')
    },
    {
      value: 'Priori',
      color:'#a4c738',
      label: t('Prioridades'),
    },
    {
        value: 'seguimenochod??',
        color:'#F0E14A',
        label: t('Menos de ocho d??as')
    },
    {
      value: 'seguimasochod??',
      color:'#FDBD34',
      label: t('M??s de ocho dias')
    },
    {
      value: 'seguimasm??squid??',
      color:'#F1601D',
      label: t('M??s de quince d??as')
    },
    {
      value: 'SinSegui',
      color:'#32D8BC',
      label: t('Sin seguimiento'),
    }
  ];

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    role: null
  });
  const handleTabsChange = (_event, tabsValue) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      estado: value
    }));

    setSelectedUsuarios([]);
  };

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

  const filteredUsuarios = applyFilters(oport, query, filters);
  const paginatedUsuarios = applyPagination(filteredUsuarios, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeUsuarios =
    selectedItems.length > 0 && selectedItems.length < oport.length;
  const selectedAllUsuarios = selectedItems.length === oport.length;

  const [toggleView, setToggleView] = useState('table_view');

  const handleViewOrientation = (_event, newValue) => {
    setToggleView(newValue);
  };
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
  })


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
      >
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.estado || 'all'}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} style={{background:tab.color,color:'#2C3E50'}} />
          ))}
        </TabsWrapper>
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
                      <TableCell>{t('#')}</TableCell>
                      <TableCell>{t('cliente')}</TableCell>
                      <TableCell>{t('comercial')}</TableCell>
                      <TableCell align="center">{t('etapa')}</TableCell>
                      <TableCell>{t('fecha cierre')}</TableCell>
                      <TableCell>{t('probabilidad')}</TableCell>
                      <TableCell>{t('valor')}</TableCell>
                      <TableCell>{t('estado')}</TableCell>
                      <TableCell>{t('origen')}</TableCell>
                      <TableCell>{t('necesidad')}</TableCell>
                      <TableCell>{t('')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsuarios.map(oport => {
                      const isUsuariosSelected = selectedItems.includes(oport.solinume);
                      return (
                        <TableRow hover key={oport.solinume} selected={isUsuariosSelected}>
                          <TableCell>{oport.solinume}</TableCell>
                          <TableCell>{oport.emprnomb}</TableCell>
                          <TableCell>{oport.usuanomb}</TableCell>
                          <TableCell><Etapa solinume={oport.solinume}/></TableCell>
                          <TableCell>{new Date(oport.solifest).toLocaleString()}</TableCell>
                          <TableCell>%{oport.soliprob}</TableCell>
                          <TableCell>{formatterPeso.format(oport.solicosto)}</TableCell>
                          <TableCell>{estaDo(oport.solicier)}</TableCell>
                          <TableCell>{oport.orignomb}</TableCell>
                          <TableCell><div dangerouslySetInnerHTML={{__html: oport.solinece}}/></TableCell>
                          <TableCell align="center">
                            <Iconoss opor={oport}/>
                          </TableCell>
                          <TableCell><Dias solinume={oport.solinume}/></TableCell>
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
                {paginatedUsuarios.map((oport) => {
                  const isUsuariosSelected = selectedItems.includes(oport.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={oport.id}>
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
                            {oport.emprnomb}
                          </Box>
                          <Box p={2} display="flex" alignItems="flex-start">
                            <Box>
                              <Box>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ({oport.usuanomb})
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  pt: 0.3
                                }}
                                variant="subtitle2"
                              >
                                {oport.etapa}
                              </Typography>
                              <Typography
                                sx={{
                                  pt: 1
                                }}
                                variant="h6"
                              >
                                <div dangerouslySetInnerHTML={{__html: oport.solinece}}/>
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
                              <b>{oport.bitacira}</b>
                            </Typography>
                            <Typography>
                             <Iconoss opor={oport}/>
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
                  <b>{t('users')}</b>
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
              'Elija entre vistas de tabla o de cuadr??cula para mostrar la lista de usuarios.'
            )}
          </Typography>
        </Card>
      )}
    </>
  );
};

Results.propTypes = {
  oport: PropTypes.array.isRequired
};

Results.defaultProps = {
    oport: []
};

export default Results;
