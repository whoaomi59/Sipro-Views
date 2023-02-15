import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
/************************************************** */
import Alert from '@mui/material/Alert';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
/****************************************************/
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  Link,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

const LoginJWT = () => {
  const { login } = useAuth();
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();

  const [shown, setShown] = React.useState(false);
  const switchShown = () => setShown(!shown);
  return (
    <Formik
      initialValues={{
        terms: true,
        submit: null
      }}
      
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await login(values.email, values.password);
          if (isMountedRef.current) {
             setStatus({ success: true });
             setSubmitting(false); 
          }
        }catch (err) {
          console(err);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
            autoFocus
            helperText={touched.email && errors.email}
            label={t('Usuario')}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.alias}
            variant="outlined"
          />
          <div className='groub'>
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              margin="normal"
              helperText={touched.password && errors.password}
              label={t('Contraseña')}
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={shown ? 'text' : 'password'}
              value={values.password}
              variant="outlined"
            />
            <button onClick={switchShown} className='eyesPass azulBack'>
               {shown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
            </button>
          </div>
          
          <Box
            alignItems="center"
            display={{ xs: 'block', md: 'flex' }}
            justifyContent="space-between"
          >
            <Box display={{ xs: 'block', md: 'flex' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.terms}
                    name="terms"
                    color="primary"
                    onChange={handleChange}
                  />
                }
                label={
                  <>
                    <Typography variant="body2">
                      {t('acepto el')}{' '}
                      <Link component="a" href="#">
                        {t('Términos y condiciones')}
                      </Link>
                      .
                    </Typography>
                  </>
                }
              />
            </Box>
            <Link component={RouterLink} to="/account/recover-password">
              <b>{t('¿Contraseña perdida?')}</b>
            </Link>
          </Box>

          {Boolean(touched.terms && errors.terms) && (
            <FormHelperText error>{errors.terms}</FormHelperText>
          )}
          <Button
            sx={{
              mt: 3
            }}
            color="primary"
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
            {t('Iniciar sesión')}
          </Button>
          {/************ALERTAS************** */}
          <div className='Alertas'>
              <div className='Error'>
                <Alert severity="error">User Incorrecto</Alert>
              </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginJWT;
