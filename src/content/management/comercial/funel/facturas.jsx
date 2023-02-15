import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Checkbox,
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
  Tabs,
  TextField,
  Typography,
  Dialog,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

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


const applyFilters = (factu, query, filters) => {
  return factu.filter((factu) => {
    let matches = true;

    if (query) {
      const properties = ['id', 'empresa', 'requisicion','factura'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (factu[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && factu.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && factu[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (factu, page, limit) => {
  return factu.slice(page * limit, page * limit + limit);
};

const Results = ({ factu }) => {
  const [selectedItems, setSelectedUsuarios] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();


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

  const filteredUsuarios = applyFilters(factu, query, filters);
  const paginatedUsuarios = applyPagination(filteredUsuarios, page, limit);
  const selectedBulkActions = selectedItems.length > 0;

  const [toggleView, setToggleView] = useState('table_view');



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
                    <TableCell>{('negocio')}</TableCell>
                    <TableCell>{('empresa')}</TableCell>
                    <TableCell>{('requisicion')}</TableCell>
                    <TableCell>{('factura')}</TableCell>
                    <TableCell>{('fecha factura')}</TableCell>
                    <TableCell>{('fecha comercial')}</TableCell>
                    <TableCell>{('valor según comercial')}</TableCell>
                    <TableCell>{('valor facturado')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsuarios.map(factu => {
                      const isUsuariosSelected = selectedItems.includes(factu.id);
                      return (
                        <TableRow hover key={factu.id} selected={isUsuariosSelected}>
                            <TableCell>{factu.negonume}</TableCell>
                            <TableCell>{factu.emprnomb}</TableCell>
                            <TableCell><a href='' >{factu.pedinume}</a></TableCell>
                            <TableCell>{factu.cofanfac}</TableCell>
                            <TableCell>{factu.cofaffac}</TableCell>
                            <TableCell>{factu.cofafech}</TableCell>
                            <TableCell>{factu.cofavalo}</TableCell>
                            <TableCell>{factu.cofavalf}</TableCell>
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
                {paginatedUsuarios.map((factu) => {
                  const isUsuariosSelected = selectedItems.includes(factu.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={factu.id}>
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
                            {factu.origen}
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
                                <Link
                                  variant="h5"
                                  component={RouterLink}
                                  to={`/${
                                    location.pathname.split('/')[1]
                                  }${factu.id}`}
                                >
                                  {factu.name}
                                </Link>{' '}
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ({factu.comercial})
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  pt: 0.3
                                }}
                                variant="subtitle2"
                              >
                                {factu.etapa}
                              </Typography>
                              <Typography
                                sx={{
                                  pt: 1
                                }}
                                variant="h6"
                              >
                                {factu.probabilidad}
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
                              <b>{factu.bitacira}</b>
                            </Typography>
                            <Typography>
                            
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
              'Elija entre vistas de tabla o de cuadrícula para mostrar la lista de usuarios.'
            )}
          </Typography>
        </Card>
      )}
    </>
  );
};

Results.propTypes = {
    factu: PropTypes.array.isRequired
};

Results.defaultProps = {
    factu: []
};

export default Results;
