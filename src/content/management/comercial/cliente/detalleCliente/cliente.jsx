/* eslint-disable jsx-a11y/label-has-for */
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';

import {
  Switch,
  Typography,
  Grid,
  CardActionArea,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  styled,
  Box,
} from '@mui/material';

const IconWrapper = styled(Box)(
  ({ theme }) => `
      padding: ${theme.spacing(2, 0)};
      color: ${theme.colors.primary.main};
      margin-left: -7px;
`
);

function PageHeader(DetaClien) {
  const { t } = useTranslation();
  console.log(DetaClien.DetaClien)
  return (
    <>
    <Grid md={12}>
    <Formik>
            <form>
              <DialogContent
                dividers
                sx={{
                  p: 1
                }}
              >
                <Grid item md={12}>
                <TextField
                style={{width:'50%'}}
                disabled
                value={DetaClien.DetaClien.usuacodi}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                <TextField
                style={{width:'50%'}}
                label={t('Nombre Empresa')}
                value={DetaClien.DetaClien.cliente}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item md={12}>
                <TextField
                item
                style={{width:'50%'}}
                value={DetaClien.DetaClien.nit}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                <TextField
                item
                disabled
                value='3'
                style={{width:'70px',textAlign:'center'}}
                variant="outlined"
                sx={{
                  p: 1
                }}
                /> 
                </Grid>
                <Grid item md={12}>
                <TextField
                item
                style={{width:'50%'}}
                label={t('Nit')}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                <TextField
                item
                style={{width:'50%'}}
                label={t('Nit')}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                style={{width:'100%'}}
                label={t('Direccion')}
                value={DetaClien.DetaClien.direcc}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                style={{width:'100%'}}
                label={t('Sitio web')}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                style={{width:'50%'}}
                value={DetaClien.DetaClien.teFono}
                label={t('Telefono')}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                <TextField
                style={{width:'50%'}}
                label={t('Fax')}
                variant="outlined"
                value={DetaClien.DetaClien.fax}
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                style={{width:'100%'}}
                label={t('Mail')}
                value={DetaClien.DetaClien.email}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                style={{width:'50%'}}
                label={t('Industria')}
                value={DetaClien.DetaClien.email}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                <TextField
                style={{width:'50%'}}
                label={t('Industria')}
                value={DetaClien.DetaClien.ciudad}
                variant="outlined"
                sx={{
                  p: 1
                }}
                />
                </Grid>
                <Grid item xs={6}>
                  <CardActionArea style={{background:'#80808021'}}
                  sx={{
                    p: 1
                  }}>
                    <Typography fontWeight="bold" variant="caption" color="primary">
                    {t('cliente activo')}
                  </Typography>
                  <Switch edge="end" color="primary" />
                  <Typography fontWeight="bold" variant="caption" color="primary">
                    {t('no')}
                  </Typography>
                  </CardActionArea>
                </Grid>
            </DialogContent>
            <DialogActions
            sx={{
                p: 3
            }}
            >
                <Button 
                style={{
                background:'#ba000d',
                color:'#fff'
                }}
                variant="contained"
                endIcon={<ClearIcon/>}>
                Cancelar
            </Button>
            <Button 
                style={{
                color:'#fff'
                }}
                variant="contained"
                endIcon={<SaveIcon/>}>
                Guardar
            </Button>
            </DialogActions>
            </form>
        </Formik>

    </Grid>
    </>
  );
}

export default PageHeader;
