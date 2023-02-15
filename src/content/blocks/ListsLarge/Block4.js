import {
  Box,
  Card,
  CardHeader,
  Typography,
  Stack,
  Button,
  Divider,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

import Text from 'src/components/Text';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const CardWrapper = styled(Card)(
  ({ theme }) => `
          background: ${theme.colors.alpha.black[5]};
  `
);

function Block4() {
  const { t } = useTranslation();
  const theme = useTheme();

  const Box1Options = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.primary.light],
      type: 'solid'
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      min: 0
    }
  };
  const Box1Data = [
    {
      name: 'Top grossing products',
      data: [4, 60, 30, 60, 11, 30, 10, 30, 6]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2
        }}
        titleTypographyProps={{
          component: 'h4',
          variant: 'h3'
        }}
        action={
          <Button size="small" variant="text">
            {t('View all')}
          </Button>
        }
        title={t('Informes')}
      />
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Reportes')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Informes de ventas mensuales')}
            </Typography>
          </Box>
          <Text color="error">
            <Typography variant="h4">2,586</Typography>
          </Text>
        </Box>
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Stats')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Last month targets')}
            </Typography>
          </Box>
          <Text color="warning">
            <Typography variant="h4">$1,23M</Typography>
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Usuarios')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Visitantes la semana pasada')}
            </Typography>
          </Box>
          <Text color="success">
            <Typography variant="h4">67,684</Typography>
          </Text>
        </Box>
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Pagos')}
            </Typography>
            <Typography variant="subtitle2">{t("gastos de la semana")}</Typography>
          </Box>
          <Text color="error">
            <Typography variant="h4">-$123,305</Typography>
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Ventas')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Informe semanal promedio total')}
            </Typography>
          </Box>
          <Text color="primary">
            <Typography variant="h4">64.543</Typography>
          </Text>
        </Box>
        <Box
          sx={{
            width: '100%'
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography gutterBottom variant="h4">
              {t('Pedidos')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Total de productos pedidos')}
            </Typography>
          </Box>
          <Text color="info">
            <Typography variant="h4">745</Typography>
          </Text>
        </Box>
      </Stack>
      <CardWrapper
        elevation={0}
        sx={{
          mt: 3,
          mx: 3,
          mb: 4,
          p: 2,
          textAlign: 'center'
        }}
      >
        <Button
          size="small"
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('Ver detalles')}
        </Button>
      </CardWrapper>
      <Chart options={Box1Options} series={Box1Data} type="area" height={167} />
    </Card>
  );
}

export default Block4;
