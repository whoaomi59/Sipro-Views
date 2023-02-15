import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import CreateIcon from '@mui/icons-material/Create';
import ChatIcon from '@mui/icons-material/Chat';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import WarningIcon from '@mui/icons-material/Warning';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
Tooltip,
IconButton,
Grid,
Dialog,
DialogTitle,
DialogActions,
DialogContent,
Typography,
Button
} from '@mui/material';

function PageHeader() {
  const { t } = useTranslation();

/************FUNCIONES******************* */

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Typography noWrap>
        <Tooltip title={t('Bitacora')} arrow>
            <IconButton>
                <ChatIcon className='verde'/>
            </IconButton>
        </Tooltip>
        <Tooltip title={t('Detalle')} arrow>
            <IconButton>
                <NavigateNextIcon className='azulCorp'/>
            </IconButton>
        </Tooltip>
        <Tooltip title={t('Fusionar con otro negocio')} arrow>
            <IconButton>
                <SettingsEthernetIcon className='amarillo'/>
            </IconButton>
        </Tooltip>
        <Tooltip title={t('')} arrow>
            <IconButton>
                <WarningIcon className='naranja'/>
            </IconButton>
        </Tooltip>
      </Typography>
      </Grid>

    </>
  );
}

export default PageHeader;
