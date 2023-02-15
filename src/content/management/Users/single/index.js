import { useState, useCallback, useEffect } from 'react';
/**************************************************** * */
import { Box, Tabs, Tab, Grid, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
/**************************************************** * */
import Footer from 'src/components/Footer';
import axios from 'src/utils/axios';
import ProfileCover from './ProfileCover';
import EditProfileTab from './EditProfileTab';
import NotificationsTab from './Bitacora';
import SecurityTab from './SecurityTab';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;

      .MuiTabs-indicator {
        box-shadow: none;
      }
    }
`
);

function ManagementUsuariosView() {
  const isMountedRef = useRefMounted();
  const [user, setUsuarios] = useState(null);

  const { userId } = useParams();
  const { t } = useTranslation();

  const [currentTab, setCurrentTab] = useState('Perfil');

  const tabs = [
    { value: 'Perfil', label: t('Perfil') },
    { value: 'Bitacora', label: t('Bitacora') },
    { value: 'security', label: t('Passwords/Security') }
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/api/user', {
        params: {
          userId
        }
      });
      if (isMountedRef.current) {
        console.log(response.data.user)
        setUsuarios(response.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{user.nombre}</title>
      </Helmet>
      <Box
        sx={{
          mt: 3
        }}
      >
        <Grid
          sx={{
            px: 4
          }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={92} md={12}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12}>
            <TabsWrapper
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
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'Perfil' && <EditProfileTab user={user} />}
            {currentTab === 'Bitacora' && <NotificationsTab user={user}/>}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default ManagementUsuariosView;
