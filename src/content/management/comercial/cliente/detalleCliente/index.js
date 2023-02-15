import { useState, useCallback, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Box, Tabs, Tab, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';

import axios from 'src/utils/axios';

import DetaClient from './detaClient';
import { SubscriptionsOutlined } from '@mui/icons-material';


function ManagementUsuariosView() {
  const isMountedRef = useRefMounted();
  const [DetaClien, setUsuarios] = useState(null);

  const { userId } = useParams();

  const getUsuarios = useCallback(async () => {
    try {
      const response = await axios.get('/api/clintes', {
        params: {
          userId
        }
      });
      if (isMountedRef.current) {
        setUsuarios(response.data.detalle);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  if (!DetaClien) {
    return null;
  }
  return (
    <>
      <Box
        sx={{
          mt: 3
        }}
      >
          <Grid item xs={92} md={12}>
            <DetaClient DetaClien={DetaClien} />
          </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default ManagementUsuariosView;
