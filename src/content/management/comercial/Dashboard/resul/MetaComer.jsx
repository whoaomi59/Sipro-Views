import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    styled,
    alpha,
    ListItem,
    ListItemText,
    List,
    ListItemAvatar
  } from '@mui/material';
  import { useTranslation } from 'react-i18next';
  import Chart from 'react-apexcharts';
  
  const ListItemAvatarWrapper = styled(ListItemAvatar)(
    ({ theme }) => `
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
  `
  );
  
  function AccountBalance() {
    const { t } = useTranslation();
    const theme = useTheme();
  
    const chartOptions = {
      chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%'
          }
        }
      },
      colors: ['#2BFA9B', '#2EB4FA', '#FA535E',],
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          padding: 8,
          borderRadius: 4,
          borderWidth: 0,
          opacity: 0.3,
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.5
          }
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.5
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        labels: {
          colors: theme.colors.alpha.trueWhite[100]
        },
        show: false
      },
      stroke: {
        width: 0
      },
      theme: {
        mode: theme.palette.mode
      }
    };
  
    const chartSeries = [90, 1,9];
  
    return (
      <Card>
        <Grid spacing={0} container>
          <Box style={{paddingLeft:20}}>
            <h2 >META COMERCIAL</h2>
          </Box>
          <Grid
            sx={{
              position: 'relative'
            }}
            display="flex"
            alignItems="center"
            item
            xs={12}
            md={12}
          >
            <Box py={4} pr={4} flex={1}>
              <Grid container spacing={0}>
                <Grid
                  xs={12}
                  sm={5}
                  item
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Chart
                    height={290}
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                  />
                </Grid>
                <Grid xs={12} sm={7} item display="flex" alignItems="center">
                  <List
                    disablePadding
                    sx={{
                      width: '100%'
                    }}
                  >
                    <ListItem disableGutters>
                      <ListItemAvatarWrapper>
                        <img
                          alt="BTC"
                          src="/static/images/placeholders/logo/"
                        />
                      </ListItemAvatarWrapper>
                      <ListItemText
                        style={{color:'#2BFA9B'}}
                        primary="ARACELLY JANETH RIVERO"
                        primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                        secondaryTypographyProps={{
                          variant: 'subtitle2',
                          noWrap: true
                        }}
                      />
                      <Box>
                        <Typography align="right" variant="h4" noWrap>
                          90% 
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemAvatarWrapper>
                        <img
                          alt="XRP"
                          src="/static/images/placeholders/logo/"
                        />
                      </ListItemAvatarWrapper>
                      <ListItemText
                        style={{color:'#2EB4FA'}}
                        primary="INGEAL"
                        primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                        secondaryTypographyProps={{
                          variant: 'subtitle2',
                          noWrap: true
                        }}
                      />
                      <Box>
                        <Typography align="right" variant="h4" noWrap>
                          1%
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemAvatarWrapper>
                        <img
                          alt="ADA"
                          src="/static/images/placeholders/logo/"
                        />
                      </ListItemAvatarWrapper>
                      <ListItemText
                        style={{color:'#FA535E'}}
                        primary="EDGAR LEONARDO LEÓN DÍAZ"
                        primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                        secondaryTypographyProps={{
                          variant: 'subtitle2',
                          noWrap: true
                        }}
                      />
                      <Box>
                        <Typography align="right" variant="h4" noWrap>
                          9%
                        </Typography>
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }
  
  export default AccountBalance;
  