import {
    Box,
    Card,
    Typography,
    alpha,
    Grid,
    Divider,
    Button,
    Link,
    TableRow,
    TableCell,
    TableBody,
    Table,
    Checkbox,
    TableContainer,
    styled,
    useTheme
  } from '@mui/material';
  import Text from 'src/components/Text';
  
  import { useTranslation } from 'react-i18next';
  import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
  import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
  import PollTwoToneIcon from '@mui/icons-material/PollTwoTone';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
  import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
  import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
  import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
  
  const BoxComposed = styled(Box)(
    () => `
      position: relative;
    `
  );
  
  const BoxComposedContent = styled(Box)(
    ({ theme }) => `
      position: relative;
      z-index: 7;
  
      .MuiTypography-root {
          color: ${theme.palette.primary.contrastText};
  
          & + .MuiTypography-root {
              color: ${alpha(theme.palette.primary.contrastText, 0.7)};
          }
      }
      
    `
  );
  
  const BoxComposedImage = styled(Box)(
    () => `
      position: absolute;
      left: 0;
      top: 0;
      z-index: 5;
      filter: grayscale(80%);
      background-size: cover;
      height: 100%;
      width: 100%;
      border-radius: inherit;
    `
  );
  
  const BoxComposedBg = styled(Box)(
    () => `
      position: absolute;
      left: 0;
      top: 0;
      z-index: 6;
      height: 100%;
      width: 100%;
      border-radius: inherit;
    `
  );
  
  const CardActions = styled(Box)(
    ({ theme }) => `
      position: absolute;
      right: ${theme.spacing(2)};
      top: ${theme.spacing(2)};
      z-index: 7;
    `
  );
  
  const Label = styled(Box)(
    ({ theme }) => `
      background: ${theme.palette.info.main};
      color: ${theme.palette.info.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 1.2)};
      border-radius: 50px;
    `
  );
  
  const LabelWarning = styled(Box)(
    ({ theme }) => `
      display: inline-block;
      background: ${theme.palette.warning.main};
      color: ${theme.palette.warning.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 2)};
      border-radius: ${theme.general.borderRadius};
    `
  );
  
  const LabelError = styled(Box)(
    ({ theme }) => `
      display: inline-block;
      background: ${theme.palette.error.main};
      color: ${theme.palette.error.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 2)};
      border-radius: ${theme.general.borderRadius};
    `
  );
  
  const LabelSuccess = styled(Box)(
    ({ theme }) => `
      display: inline-block;
      background: ${theme.palette.success.main};
      color: ${theme.palette.success.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 2)};
      border-radius: ${theme.general.borderRadius};
    `
  );
  
  const BoxOverlineButton = styled(Box)(
    ({ theme }) => `
      text-align: center;
      position: relative;
      z-index: 7;
  
      .MuiButton-root {
          border-radius: 50px;
          height: ${theme.spacing(7.5)};
          margin-top: -${theme.spacing(3.75)};
          padding: ${theme.spacing(0, 4)};
          border: 3px solid ${theme.colors.alpha.white[100]};
      }
    `
  );
  
  const CardWrapper = styled(Card)(
    ({ theme }) => `
        background: ${alpha(theme.colors.alpha.black[10], 0.05)};
    `
  );
  
  function Block1() {
    const { t } = useTranslation();
    const theme = useTheme();
  
    return (
      <Card>
        <BoxComposed>
          <BoxComposedImage
            sx={{backgroundImage: 'url("/static/images/placeholders/covers/1.png")'}}
          />
          <BoxComposedContent pb={9} pt={7}>
            <Typography
              textAlign="center"
              sx={{
                pb: 1
              }}
              variant="h3"
            >
              {t('RESUMEN')}
            </Typography>
          </BoxComposedContent>
        </BoxComposed>
        <Box p={3}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={3}>
              <CardWrapper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  pt: 3,
                  pb: 2.5
                }}
              >
                <Text style={{color:'rgb(164, 199, 56)'}}>
                  <EmojiEventsIcon fontSize="large" />
                </Text>
                <Typography
                  variant="h3"
                  sx={{
                    pt: 1
                  }}
                >
                  2
                </Typography>
                <Typography variant="subtitle2">{t('Meta')}</Typography>
              </CardWrapper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardWrapper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  pt: 3,
                  pb: 2.5
                }}
              >
                <Text style={{color:'rgb(50, 216, 188)'}}>
                  <AssuredWorkloadIcon fontSize="large" />
                </Text>
                <Typography
                  variant="h3"
                  sx={{
                    pt: 1
                  }}
                >
                  806
                </Typography>
                <Typography variant="subtitle2">{t('Cumplimiento Actual')}</Typography>
              </CardWrapper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardWrapper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  pt: 3,
                  pb: 2.5
                }}
              >
                <Text  style={{color:'rgba(0, 102, 153, 0.7)'}}>
                  <TimelineIcon fontSize="large"/>
                </Text>
                <Typography
                  variant="h3"
                  sx={{
                    pt: 1
                  }}
                >
                  13,193
                </Typography>
                <Typography variant="subtitle2">{t('Deficit')}</Typography>
              </CardWrapper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardWrapper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  pt: 3,
                  pb: 2.5
                }}
              >
                <Text style={{color:'#f8bc45'}}>
                  <PollTwoToneIcon fontSize="large" />
                </Text>
                <Typography
                  variant="h3"
                  sx={{
                    pt: 1
                  }}
                >
                  5.8%
                </Typography>
                <Typography variant="subtitle2">{t('Desempeño')}</Typography>
              </CardWrapper>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Card>
    );
  }
  
  export default Block1;
  