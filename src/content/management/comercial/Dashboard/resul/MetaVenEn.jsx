import { Card, Box, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

function VisitorsOverview() {
  const { t } = useTranslation();
  const theme = useTheme();
  const blue = '#2EB4FA';
  const red = '#FA535E';

  const chartOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.error.main]
    },
    colors: [blue, red],
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '20%'
      }
    },
    labels: [
      'Ariver',
      'Ingeal',
      'Eleon',
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartData = [
    {
      name: '',
      type: 'column',
      data: [434, 827, 123],
      background:'red'
    },
    {
      name: '',
      type: 'line',
      data: [434, 108, 123]
    }
  ];


  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box style={{paddingLeft:20}}>
            <h2 >META VENDEDORES ENE-DIC</h2>
      </Box>
      <Box
        sx={{
          p: 3
        }}
      >
        <Chart
          options={chartOptions}
          series={chartData}
          type="line"
          height={250}
        />
      </Box>
    </Card>
  );
}

export default VisitorsOverview;
