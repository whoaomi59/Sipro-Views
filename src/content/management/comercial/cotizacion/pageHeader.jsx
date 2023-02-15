/* eslint-disable jsx-a11y/label-has-for */
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';
import useAuth from 'src/hooks/useAuth';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';


import {
  styled,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Zoom,
  Typography,
  TextField,
  Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSnackbar } from 'notistack';

const Input = styled('input')({
  display: 'none'
});


//options select
const roles = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Subscriber', value: 'subscriber' },
  { label: 'Customer', value: 'customer' },
  { label: 'Junior', value: 'customer' }
];

function PageHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

  const [publicProfile, setPublicProfile] = useState({
    public: true
  });


  const handleCreateUsuariosOpen = () => {
    setOpen(true);
  };

  const handleCreateUsuariosClose = () => {
    setOpen(false);
  };

  const handleCreateUsuariosSuccess = () => {
    enqueueSnackbar(t('The user account was created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('SEGUIMIENTO DE OPORTUNIDADES')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              ''
            )}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateUsuariosOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Nuevo')}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateUsuariosClose}
      >
        <DialogTitle
        //style={{background: 'rgba(35, 42, 46, 0.95)'}}
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('NUEVA OPORTUNIDAD')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              ''
            )}
          </Typography>
        </DialogTitle>
        <Formik
          item
          initialValues={{
            email: '',
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required(t('El campo es obligatorio')),
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateUsuariosSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent
                //style={{background: '#141c23'}}
                sx={{
                  p: 3
                }}
              >
                <Grid  container spacing={1}>
                    <Grid container spacing={5}>
                      <Grid item xs={1} md={6}>
                        <TextField item
                          error={Boolean(touched.username && errors.username)}
                          fullWidth
                          helperText={touched.username && errors.username}
                          label={t('Cliente')}
                          name="username"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.username}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(
                            touched.first_name && errors.first_name
                          )}
                          fullWidth
                          helperText={touched.first_name && errors.first_name}
                          label={t('Comercial')}
                          name="Num_Docum"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.first_name}
                          variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <FroalaEditorComponent tag='textarea'/>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
               //style={{background: 'rgba(35, 42, 46, 0.95)'}}
                sx={{
                  p: 3
                }}
              >
                 <Button onClick={handleCreateUsuariosClose} 
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
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;
