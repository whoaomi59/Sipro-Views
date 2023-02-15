import {
  Box,
  Typography,
  Card,
  Grid,
  List,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function Bitacoras(user) {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Bitacora')}</Typography>      
        </Box>
        <Card>
          <Typography variant="subtitle2" className='ty1'>
              {user.user.nombre}
          </Typography>
          <List>

 
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Bitacoras;
