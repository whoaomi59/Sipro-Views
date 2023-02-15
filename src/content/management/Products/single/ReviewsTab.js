import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Divider,
  ListItem,
  List,
  Rating,
  Tooltip,
  Button,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
      flex-grow: 1;
      height: 6px;
      background-color: ${theme.colors.alpha.black[10]};

      .MuiLinearProgress-barColorPrimary {
        background-color: ${theme.colors.primary.main};
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
      }
`
);

function ReviewsTab() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          md={6}
          item
          sx={{
            position: 'relative'
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider
              absolute
              sx={{
                height: '100%',
                left: 'auto',
                right: 0
              }}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Box p={3}>
            <Typography variant="h2">
              {t('Customer Reviews')}{' '}
              <Typography component="span" variant="h2" color="text.secondary">
                (75)
              </Typography>
            </Typography>

            <List
              sx={{
                mt: 3
              }}
            >
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">5 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={84}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">84%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">4 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={7}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">7%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">3 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={5}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">5%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">2 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={3}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">3%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">1 {t('star')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={1}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">1%</Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={4} flex={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: `${theme.typography.pxToRem(51)}`
                }}
                variant="h1"
              >
                4.9
                <Typography
                  component="span"
                  color="text.secondary"
                  variant="h1"
                >
                  /5
                </Typography>
              </Typography>
            </Box>
            <Box py={2}>
              <Rating size="large" defaultValue={4} precision={1} />
            </Box>
            <Tooltip
              placement="top"
              arrow
              title={t('Only verified customers can write reviews')}
            >
              <Box component="span">
                <Button
                  disabled
                  startIcon={<RateReviewTwoToneIcon />}
                  variant="contained"
                  size="large"
                >
                  {t('Write review')}
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    
    </>
  );
}

export default ReviewsTab;
