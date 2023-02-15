import PropTypes from 'prop-types';
import { useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Box,
  Typography,
  Tooltip,
  Card,
  Grid,
  IconButton,
  styled,
  Tabs,
  Tab,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useNavigate, useLocation } from 'react-router-dom';
import Cliente from './cliente';
import Contacto from './contacto';
import Sedes from './sedes';
import Bitacoras from './bitacoras';
import Vista from './vista';


const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(8)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);


const ProfileCover = ({ DetaClien }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState('Cliente');

  const handleBack = () => {
    return navigate(
      `/${location.pathname.split('/')[1]}/management/comer/cliente`
    );
  };

  const tabs = [
    { value: 'Cliente', label: t('Cliente') },
    { value: 'Contactos', label: t('Contactos') },
    { value: 'sedes', label: t('Sedes') },
    { value: 'bitacoras', label: t('Bitacoras') },
    { value: 'vista', label: t('Vista') },
    { value: 'Llamadas', label: t('Llamadas') },
    { value: 'Documentos', label: t('Documentos') },
    { value: 'Log', label: t('Log Cliente') }
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
    {/* header + boton retorno +info empresa*/}
      <PageTitleWrapper>
        <Box style={{display:'flex'}}>
          <Tooltip arrow placement="top" title={t('Lista Clientes')}>
              <IconButton
                onClick={handleBack}
                color="primary"
                sx={{
                  p: 2,
                  mr: 2
                }}
              >
                <ArrowBackTwoToneIcon />
              </IconButton>
          </Tooltip>
          {/* info empresa */}
          <Box>
          <Typography variant="h3" component="h3" gutterBottom>
              {DetaClien.cliente}
          </Typography>
          <Typography variant="subtitle2">
              {DetaClien.ciudad}-
              {DetaClien.nit}
          </Typography>
          </Box>
        </Box>   
      </PageTitleWrapper>
      {/* cuerpo detalle */}
      <TabsContainerWrapper>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </TabsContainerWrapper>
      {/* targetas */}
      <Card
        variant="outlined"
        sx={{
          mx: 4
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}
        >
          {currentTab === 'Cliente' && (
            <>
              <Grid item xs={12}>
                <Box p={2} style={{display:'flex'}}>
                  <Cliente DetaClien={DetaClien}/>
                </Box>
              </Grid>
            </>
          )}
          {currentTab === 'Contactos' && (
            <Grid item xs={12}>
              <Box p={4}>
              <Contacto DetaClien={DetaClien}/>
              </Box>
            </Grid>
          )}
           {currentTab === 'sedes' && (
            <Grid item xs={12}>
              <Box p={4}>
                <Sedes/>
              </Box>
            </Grid>
          )}
          {currentTab === 'bitacoras' && (
            <Grid item xs={12}>
              <Box p={4}>
                <Bitacoras/>
              </Box>
            </Grid>
          )}
          {currentTab === 'vista' && (
            <Grid item xs={12}>
              <Box p={4}>
                <Vista/>
              </Box>
            </Grid>
          )}
        </Grid>
      </Card>
    </>
  );
};

ProfileCover.propTypes = {
  DetaClien: PropTypes.object.isRequired
};

export default ProfileCover;
