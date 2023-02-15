/****************************
 * MODULE AUTOR:JCHILITO    *
 * JHON MARIO (WHOAOMI)     *
 ****************************/
import Footer from 'src/components/Footer';
import Table from './table';
import FunnelOpor from './funnelOpor';
import Cotizacion from './funnelCotiza';
import Mercadeo from './mercadeo';
import Factura from './facturas';
import Modal from './modal';
import axios from 'src/utils/axios';
import Axios from 'axios';
import {
  Grid,
  Tab,
  Tabs,
  Card,
  Box,
  styled
} from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { useState, useEffect, useCallback } from 'react';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

import PageHeader from './pageHeader';

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



function DashboardTasks() {
const isMountedRef = useRefMounted();
const isMount = useRefMounted();
const isMountCo = useRefMounted();
const isMountFac = useRefMounted();
//ROUTES
const [oport, setUsuarios] = useState([]);
const [opor, setOport] = useState([]);
const [cotiz, setCotiz] = useState([]);
const [factu, setFactu] = useState([]);
const { t } = useTranslation();
const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/api/prospecto');
      if (isMountedRef.current) {
      setUsuarios(response.data.pros);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);
  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

const getOpor = useCallback(async () => {
    try {
      const respon = await Axios.get('/FunOpor');
      if (isMount.current) {
        setOport(respon.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMount]);
  useEffect(() => {
    getOpor();
}, [getOpor]);
const getCotiz = useCallback(async () => {
  try {
    const respon = await Axios.get('/FunCotiz');
    if (isMountCo.current) {
      setCotiz(respon.data);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountCo]);
useEffect(() => {
  getCotiz();
}, [getCotiz]);
const getFact = useCallback(async () => {
  try {
    const respon = await Axios.get('/FunFact');
    if (isMountCo.current) {
      setFactu(respon.data);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMountFac]);
useEffect(() => {
  getFact();
}, [getFact]);

  const [currentTab, setCurrentTab] = useState('Prospectos');

  const tabs = [
    { value: 'Prospectos', label: t('Funnel Prospectos') },
    { value: 'Oportunidades', label: t('Funnel Oportunidades') },
    { value: 'Cotizaciones', label: t('Funnel Cotizaciones') },
    { value: 'Facturas', label: t('Funnel Facturas') },
    { value: 'Mercadeo', label: t('Funnel Mercadeo') }
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <PageTitleWrapper>
       <PageHeader/>
      </PageTitleWrapper>
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
          {currentTab === 'Prospectos' && (
            <>
              <Grid item xs={12}>
                <Box p={2} style={{display:'flex'}}>
                <Modal/>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Table oport={oport}/>
              </Grid>
            </>
          )}
          {currentTab === 'Oportunidades' && (
            <Grid item xs={12}>
              <Box p={4}>
             < FunnelOpor opor={opor}/>
              </Box>
            </Grid>
          )}
           {currentTab === 'Cotizaciones' && (
            <Grid item xs={12}>
              <Box p={4}>
              <Cotizacion cotiz={cotiz}/>
              </Box>
            </Grid>
          )}
          {currentTab === 'Facturas' && (
            <Grid item xs={12}>
              <Box p={4}>
              <Factura factu={factu}/>
              </Box>
            </Grid>
          )}
          {currentTab === 'Mercadeo' && (
            <Grid item xs={12}>
              <Box p={4}>
              <Mercadeo/>
              </Box>
            </Grid>
          )}
        </Grid>
      </Card>
      <Footer />
    </>
  );
}

export default DashboardTasks;
