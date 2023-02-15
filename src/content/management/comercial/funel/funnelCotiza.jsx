import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Checkbox,
  Grid,
  Divider,
  Tooltip,
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
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
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



const applyFilters = (cotiz, query, filters) => {
  return cotiz.filter((cotiz) => {
    let matches = true;

    if (query) {
      const properties = ['id', 'FUAccio', 'diaDifere','etapa'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (cotiz[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && cotiz.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && cotiz[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (cotiz, page, limit) => {
  return cotiz.slice(page * limit, page * limit + limit);
};

const Results = ({ cotiz }) => {

  const tabs = [
    {
      value: 'all',
      color:'rgba(0, 102, 153, 0.7)',
      label: ('Todos')
    },
    {
        value: 'seguimenochodí',
        color:'#a4c738',
        label: ('menos de ocho días')
    },
    {
      value: 'seguimasochodí',
      color:'#F0E14A',
      label: ('más de ocho dias')
    },
    {
      value: 'seguimasmásquidí',
      color:'#FDBD34',
      label: ('más de quince días')
    },
    {
      value: 'SinSegui',
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

  const filteredUsuarios = applyFilters(cotiz, query, filters);
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
      estado: value
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
          value={filters.estado || 'all'}
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
                    {paginatedUsuarios.map(cotiz => {
                      const isUsuariosSelected = selectedItems.includes(cotiz.id);
                      return (
                        <TableRow hover key={cotiz.id} selected={isUsuariosSelected}>
                            <TableCell >{cotiz.id}</TableCell>
                            <TableCell >{cotiz.emprnomb}</TableCell>
                            <TableCell >{cotiz.solicosto}</TableCell>
                            <TableCell >{cotiz.solifest}</TableCell>
                            <TableCell >{cotiz.soliprob}</TableCell>
                            <TableCell >{cotiz.etapnomb}</TableCell>
                            <TableCell >${cotiz.solicosto*cotiz.soliprob/100}</TableCell>
                            <TableCell >{cotiz.soliupdate}</TableCell>
                            <TableCell >{cotiz.diaDifere}</TableCell>
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
    cotiz: PropTypes.array.isRequired
};

Results.defaultProps = {
    cotiz: []
};

export default Results;
