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
  Typography,
} from '@mui/material';

const Input = styled('input')({
  display: 'none'
});

function PageHeader() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('CONSULTAR CUENTAS COMERCIALES')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              ''
            )}
          </Typography>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
