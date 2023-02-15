import { useEffect, useState } from 'react';

import {
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  Divider,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import GaugeChart from 'react-gauge-chart';

const LabelErrorAlt = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    alignItems: center;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    padding: ${theme.spacing(0.5, 1)};
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['box-shadow'])};
    position: relative;
    z-index: 5;

    &:hover {
        z-index: 6;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
    }
  `
);

function Block7() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [currentPercent1, setCurrentPercent1] = useState();
  const [currentPercent2, setCurrentPercent2] = useState();
  const [currentPercent3, setCurrentPercent3] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent1(Math.random());
      setCurrentPercent2(Math.random());
      setCurrentPercent3(Math.random());
    }, 1900);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
            >
              {t('Ventas Semanales')}
            </Typography>
            <Typography variant="h4">
              <Text color="success">$43,346.45</Text>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.colors.alpha.black[70]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              colors={[theme.colors.success.lighter, theme.colors.success.main]}
              percent={currentPercent1}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box pt={3} mb={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.success.lighter}`,
                color: `${theme.colors.success.main}`
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="success">+ 58.3%</Text>
            </Typography>
          </Box>
          <Typography variant="subtitle2"> 
            Tuviste un aumento del 58% en las ventas durante los últimos 7 días. mantén el ¡buen trabajo!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
            >
              {t('Visitantes que regresan')}
            </Typography>
            <Typography variant="h4">
              <Text color="warning">21,585</Text>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.colors.alpha.black[70]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              colors={[theme.colors.warning.lighter, theme.colors.warning.main]}
              percent={currentPercent2}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box pt={3} mb={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.warning.lighter}`,
                color: `${theme.colors.warning.main}`
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="warning">+ 1.25%</Text>
            </Typography>
          </Box>
          <Typography variant="subtitle2">
          Se perdió el número de visitantes objetivo en un 23,66 %. Mejora tu calificaciones!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
            >
              {t('Gastos mensuales')}
            </Typography>
            <Typography variant="h4">
              <LabelErrorAlt>$8,594</LabelErrorAlt>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.colors.error.main}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              colors={[theme.colors.error.lighter, theme.colors.error.main]}
              percent={currentPercent3}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box pt={3} mb={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`
              }}
            >
              <KeyboardArrowUpTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="error">- 23.5%</Text>
            </Typography>
          </Box>
          <Typography variant="subtitle2">
          Tus gastos son mayores que los ingresos. ¡Haz algo para arreglar esto!
          </Typography>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Block7;
