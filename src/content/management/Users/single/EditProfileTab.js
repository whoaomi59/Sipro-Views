import PropTypes from 'prop-types';
import React, { Component, useState } from "react"
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';


const EditProfileTab = ({ user }) => {
  const { t } = useTranslation();
  const [name, setName] = useState(user.nombre.toUpperCase())

  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Detalles personales')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage informations related to your personal details')}
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('NOMBRE')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <Typography fontWeight="bold" color="secondary">
                  <b>{name}</b>
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('NUMERO DOCUMENTO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{user.NumDo}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('ROL')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box
                    sx={{
                      maxWidth: { xs: 'auto', sm: 300 }
                    }}
                  >
                    <Text color="black">
                      {user.role.toUpperCase()}
                    </Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('JEFE INMEDIATO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box
                    sx={{
                      maxWidth: { xs: 'auto', sm: 300 }
                    }}
                  >
                    <Text color="black">
                      {user.JefeInm}
                    </Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('DIRECTOR DEL PROCESO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box
                    sx={{
                      maxWidth: { xs: 'auto', sm: 300 }
                    }}
                  >
                    <Text color="black">
                      {user.DirecPro}
                    </Text>
                  </Box>
                </Grid>
                {/* ============================================== */}
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('ESTADO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Label color="success">
                    <DoneTwoToneIcon fontSize="small" />
                    <b>{t('Active')}</b>
                  </Label>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Contactos')}
              </Typography>
              <Typography variant="subtitle2">
                {t('')}
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('CORREO CORPORATIVO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{user.CorrCor}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('NUMERO CORPORATIVO')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <Typography fontWeight="bold" color="secondary">
                    {user.numCorp}
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('EXTENCION')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <Typography fontWeight="bold" color="secondary">
                    {user.exten}
                </Typography>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Contactos Personales')}
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('Correo Personal')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">{user.email}</Text>
                  <Box pl={1} component="span">
                    <Label color="success">{t('Primary')}</Label>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    {t('Nombre Acudiente')}:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">{user.nomAcu}</Text>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
EditProfileTab.propTypes = {
  user: PropTypes.object.isRequired
};

export default EditProfileTab;
