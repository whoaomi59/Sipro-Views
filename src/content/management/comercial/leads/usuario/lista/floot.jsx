import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import { useNavigate, useLocation } from 'react-router-dom';
/********************************************** */
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
/******************************************************* */
import {
  Grid,
  Box,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material';

function PageHeader({Id}) {
const { t } = useTranslation();
const navigate = useNavigate();
const location = useLocation();
const handleBack = () => {
  return navigate(
    `/${location.pathname.split('/')[1]}/management/comer/usuarioLeads/`
  );
};

/***************Info Client************ */
const [data, setData] = useState([]);
const isMounData = useRefMounted();
const getData = useCallback(async () => {
  const data ={Id}
  try {
    const response = await axios.post('/InfoCotiza',data);
    if (isMounData.current) {
      setData(response.data[0]);
    }
  } catch (err) {
    console.error(err);
  }
}, [isMounData]);
useEffect(() => {
  getData();
},[getData]);


  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
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
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {data.emprnomb}
            </Typography>
            <Typography variant="subtitle2">
              {data.muninomb}-{data.emprdire}
            </Typography>
          </Box>
        </Box> 
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
