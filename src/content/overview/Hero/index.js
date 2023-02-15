import {
  Box,
  Button,
  Grid,
  Typography,
  styled

} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import RedeSoc from "./redeSoc";
import Carrusel from "./carrusel";
import Lenguajes from "./logoLeng";

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const ImgWrapper = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 5;
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusLg};
    box-shadow: 0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%);

    img {
      display: block;
      width: 100%;
    }
  `
);
//boxx imagen pagina principal
const BoxAccent = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadiusLg};
    background: ${theme.palette.background.default};
    width: 100%;
    height: 100%;
    position: absolute;
    left: -40px;
    bottom: -40px;
    display: block;
    z-index: 4;
  `
);

const BoxContent = styled(Box)(
  () => `
  width: 150%;
  position: relative;
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);
const Conted = styled(Box)(
  ({ theme }) => `
  width:70%;
  margin-left:10%;
  margin-top:10%;
  `
)
function Hero() {
  const { t } = useTranslation();
  return (
    <Conted>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        {/* configuracion pagina principal */}
        <Grid  md={6} pr={{ xs: 0, md: 9 }}>
          <LabelWrapper color="success">{t('Version') + ' 3.0'}</LabelWrapper>
          <TypographyH1
            sx={{
              mb: 2
            }}
            variant="h1"
          >
            {t('SIPRO - SISTEMA DE INFORMACIÓN Y PROCESOS, INGEAL S.A.')}
          </TypographyH1>
          <TypographyH2
            sx={{
              lineHeight: 1.5,
              pb: 4
            }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Súmate a Ingeal a través de nuestros canales sociales, y recibe toda la información sobre Green data Center, nuestros servicios, blog, foro y noticias'
            )}
        </TypographyH2>
          {/* logos redes sociales*/}
          <RedeSoc/>
          {/*  */}
          <Button 
            component={RouterLink}
            to="/extended-sidebar/dashboards"
            size="large"
            variant="outlined"
            color="info"
          >
            {t('iniciar sesión')}
          </Button>
          {/* logos lenguajes*/}
         <Lenguajes/>
        </Grid>
        <Grid md={5}>
          {/* carrusel */}
          <BoxContent>
              <ImgWrapper>
              <Carrusel/>
              </ImgWrapper>
            <BoxAccent
              sx={{
                display: { xs: 'none', md: 'block' }
              }}
            />
          </BoxContent>
        </Grid>
      </Grid>
    </Conted>
  );
}

export default Hero;
