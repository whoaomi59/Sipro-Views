import {
    Box,
    Card,
    Typography,
    Divider,
    List,
    ListItem,
    LinearProgress,
    alpha,
    Grid,
    styled,
    useTheme,
    linearProgressClasses
  } from '@mui/material';
  import { useTranslation } from 'react-i18next';
  import Chart from 'react-apexcharts';
  
  const LinearProgressError = styled(LinearProgress)(
    ({ theme }) => `
          height: 6px;
          border-radius: ${theme.general.borderRadiusLg};
  
          &.${linearProgressClasses.colorPrimary} {
              background-color: ${alpha(theme.colors.error.main, 0.1)};
          }
          
          & .${linearProgressClasses.bar} {
              border-radius: ${theme.general.borderRadiusLg};
              background-color: #5499C7;
          }
      `
  );
  
  const LinearProgressSuccess = styled(LinearProgress)(
    ({ theme }) => `
          height: 6px;
          border-radius: ${theme.general.borderRadiusLg};
  
          &.${linearProgressClasses.colorPrimary} {
              background-color: ${alpha(theme.colors.success.main, 0.1)};
          }
          
          & .${linearProgressClasses.bar} {
              border-radius: ${theme.general.borderRadiusLg};
              background-color: #2980B9;
          }
      `
  );
  
  const LinearProgressInfo = styled(LinearProgress)(
    ({ theme }) => `
          height: 6px;
          border-radius: ${theme.general.borderRadiusLg};
  
          &.${linearProgressClasses.colorPrimary} {
              background-color: ${alpha(theme.colors.info.main, 0.1)};
          }
          
          & .${linearProgressClasses.bar} {
              border-radius: ${theme.general.borderRadiusLg};
              background-color: #2471A3;
              ;
          }
      `
  );
  
  const LinearProgressPrimary = styled(LinearProgress)(
    ({ theme }) => `
          height: 6px;
          border-radius: ${theme.general.borderRadiusLg};
  
          &.${linearProgressClasses.colorPrimary} {
              background-color: ${alpha(theme.colors.primary.main, 0.1)};
          }
          
          & .${linearProgressClasses.bar} {
              border-radius: ${theme.general.borderRadiusLg};
              background-color: #1F618D;
          }
      `
  );
  const LinearProgressSe = styled(LinearProgress)(
    ({ theme }) => `
          height: 6px;
          border-radius: ${theme.general.borderRadiusLg};
  
          &.${linearProgressClasses.colorPrimary} {
              background-color: ${alpha(theme.colors.primary.main, 0.1)};
          }
          
          & .${linearProgressClasses.bar} {
              border-radius: ${theme.general.borderRadiusLg};
              background-color: #1B4F72;
          }
      `
  );
  
  const CardWrapper = styled(Card)(
    ({ theme }) => `
        background: ${alpha(theme.colors.alpha.black[10], 0.08)};
    `
  );
  
  function Block7() {
    const { t } = useTranslation();
    const theme = useTheme();
  
    const chart1Options = {
      
      style:{cursor:'pointer',},
      chart: {
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        
      },
      dataLabels: {
        enabled: false
      },
      theme: {
        mode: theme.palette.mode
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 6,
          columnWidth: '80%',
          margin:'30px'
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      labels: ['2022'],
      fill: {
        opacity: 1,
      },
      legend: {
        show: false
      },
      grid: {
        strokeDashArray: 6,
        borderColor: theme.palette.divider
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
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          }
        }
      }
    };
    const Box2Data = [
      {
        name: 'Oportunidades',
        color:'#5499C7',
        data: [30]
      },
      {
        name: 'Viables',
        color:'#2980B9',
        data: [50]
      },
      {
        name: 'Cotización',
        color:'#2471A3',
        data: [40]
      },{
        name: 'Ganadas',
        color:'#1F618D',
        data: [70]
      },
      {
        name: 'Facturadas',
        color:'#1B4F72',
        data: [20]
      }
    ];
  
    return (
      <Card>
        <Box
          display="flex"
          alignItems="center"
          p={3}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              component="div"
              sx={{
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
              gutterBottom
              variant="h3"
            >
              {t('FUNNEL MERCADEO')}
            </Typography>
            <Typography
              component="div"
              fontWeight="normal"
              color="text.secondary"
              variant="h4"
            >
              {t('Fecha desde: 2022-08-01')}
            </Typography>
            <Typography
              style={{marginTop:'10 px'}}
              component="div"
              fontWeight="normal"
              color="text.secondary"
              variant="h4"
            >
              {t('Fecha hasta: 2022-08-31')}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={3}>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <List
                sx={{
                  width: '100%'
                }}
                disablePadding
              >
                <ListItem
                  disableGutters
                  sx={{
                    display: 'block'
                  }}
                >
                  <Box pb={0.5}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{
                        pr: 1
                      }}
                    >
                      54,695
                    </Typography>
                    <Typography component="span">
                    Oportunidades
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mr: 1.5
                      }}
                    >
                      <LinearProgressError variant="determinate" value={30} />
                    </Box>
                    <Box
                      sx={{
                        minWidth: 35
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: `${theme.colors.error.main}`
                        }}
                      >
                        30%
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    display: 'block'
                  }}
                >
                  <Box pb={0.5}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{
                        pr: 1
                      }}
                    >
                      12,543
                    </Typography>
                    <Typography component="span">
                     Viables
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mr: 1.5
                      }}
                    >
                      <LinearProgressSuccess variant="determinate" value={50} />
                    </Box>
                    <Box
                      sx={{
                        minWidth: 35
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: `${theme.colors.success.main}`
                        }}
                      >
                        50%
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
  
                <ListItem
                  disableGutters
                  sx={{
                    display: 'block'
                  }}
                >
                  <Box pb={0.5}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{
                        pr: 1
                      }}
                    >
                      6,374
                    </Typography>
                    <Typography component="span">
                    Cotizaciones
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mr: 1.5
                      }}
                    >
                      <LinearProgressInfo variant="determinate" value={40} />
                    </Box>
                    <Box
                      sx={{
                        minWidth: 35
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: `${theme.colors.info.main}`
                        }}
                      >
                        40%
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
  
                <ListItem
                  disableGutters
                  sx={{
                    display: 'block'
                  }}
                >
                  <Box pb={0.5}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{
                        pr: 1
                      }}
                    >
                      65,492
                    </Typography>
                    <Typography component="span">
                    Ganadas
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mr: 1.5
                      }}
                    >
                      <LinearProgressPrimary variant="determinate" value={70} />
                    </Box>
                    <Box
                      sx={{
                        minWidth: 35
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: `${theme.colors.primary.main}`
                        }}
                      >
                        70%
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    display: 'block'
                  }}
                >
                  <Box pb={0.5}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{
                        pr: 1
                      }}
                    >
                      65,492
                    </Typography>
                    <Typography component="span">
                    Facturadas
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mr: 1.5
                      }}
                    >
                      <LinearProgressSe variant="determinate" value={20} />
                    </Box>
                    <Box
                      sx={{
                        minWidth: 35
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: `${theme.colors.primary.main}`
                        }}
                      >
                        20%
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={7}>
              <CardWrapper
                sx={{
                  px: 3,
                  pt: 3
                }}
              >
                <Chart
                  options={chart1Options}
                  series={Box2Data}
                  type="bar"
                  height={310} 
                />
              </CardWrapper>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box p={3} style={{display:'flex'}}>
          <Grid xs={5}>
          <Typography>CUOTA INGEAL:</Typography>
          <Typography>FALTANTE GANADAS:</Typography>
          <Typography>FALTANTE FACTURADAS:</Typography>
          </Grid>
          <Grid xs={5}>
          <Typography>$0</Typography>
          <Typography>$16.763.241</Typography>
          <Typography>$104.945.618</Typography>
          </Grid>
        </Box>
      </Card>
    );
  }
  
  export default Block7;
  