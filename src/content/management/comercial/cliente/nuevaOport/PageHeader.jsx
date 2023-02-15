import { useTranslation } from 'react-i18next';
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

function PageHeader({data}) {

const { t } = useTranslation();
const navigate = useNavigate();
const location = useLocation();
const handleBack = () => {
  return navigate(
    `/${location.pathname.split('/')[1]}/management/comer/cliente`
  );
};


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
              {data.muninomb} - {data.emprdire}
            </Typography>
          </Box>
        </Box> 
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
