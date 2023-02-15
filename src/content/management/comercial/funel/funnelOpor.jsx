import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Divider,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
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
const applyFilters = (opor, query, filters) => {
  return opor.filter((opor) => {
    let matches = true;

    if (query) {
      const properties = ['id', 'FUAccio', 'diaDifere','etapa'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (opor[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && opor.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && opor[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (opor, page, limit) => {
  return opor.slice(page * limit, page * limit + limit);
};

const Results = ({ opor }) => {

  const tabs = [
    {
      value: 'all',
      color:'rgba(0, 102, 153, 0.7)',
      label: ('Todos')
    },
    {
        value: 'menochodias',
        color:'#a4c738',
        label: ('menos de ocho días')
    },
    {
      value: 'masochodias',
      color:'#F0E14A',
      label: ('más de ocho dias')
    },
    {
      value: 'masquincedias',
      color:'#FDBD34',
      label: ('más de quince días')
    },
    {
      value: 'sinSegui',
      color:'#F1601D',
      label: ('Sin seguimiento'),
    },
    {
      value: 'SinSegui',
      color:'#32D8BC',
      label: ('Prioridad'),
    }
  ];
  const [selectedItems, setSelectedUsuarios] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();


  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    segui: null
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

  const filteredUsuarios = applyFilters(opor, query, filters);
  const paginatedUsuarios = applyPagination(filteredUsuarios, page, limit);
  const selectedBulkActions = selectedItems.length > 0;

  const [toggleView, setToggleView] = useState('table_view');

  const handleTabsChange = (_event, tabsValue) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      segui: value
    }));

    setSelectedUsuarios([]);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        style={{marginBottom:'20px'}}
      >
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={filters.segui || 'all'}
          variant="contained"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} style={{background:tab.color,color:'#2C3E50'}}/>
          ))}
        </TabsWrapper>
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
                    <TableCell>{('#')}</TableCell>
                    <TableCell>{('empresa')}</TableCell>
                    <TableCell>{('valor')}</TableCell>
                    <TableCell>{('fecha cierre')}</TableCell>
                    <TableCell>{('probabilidad')}</TableCell>
                    <TableCell>{('etapa')}</TableCell>
                    <TableCell>{('valor esperado')}</TableCell>
                    <TableCell>{('f.u.acción')}</TableCell>
                    <TableCell>{('dias de diferencia')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsuarios.map(opor => {
                      const isUsuariosSelected = selectedItems.includes(opor.id);
                      return (
                        <TableRow hover key={opor.id} selected={isUsuariosSelected}>
                            <TableCell >{opor.id}</TableCell>
                            <TableCell >{opor.emprnomb}</TableCell>
                            <TableCell >{opor.solicosto}</TableCell>
                            <TableCell >{opor.solifest}</TableCell>
                            <TableCell >{opor.soliprob}</TableCell>
                            <TableCell style={{textAlign:'center'}}>{opor.etapnomb}</TableCell>
                            <TableCell>${opor.solicosto*opor.soliprob/100}</TableCell>
                            <TableCell >{opor.soliupdate}</TableCell>
                            <TableCell >{opor.dias}</TableCell>
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
    </>
  );
};

Results.propTypes = {
  opor: PropTypes.array.isRequired
};

Results.defaultProps = {
  opor: []
};

export default Results;
