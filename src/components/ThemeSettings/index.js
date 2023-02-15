import { useContext, useRef, useState } from 'react';
import {
  Popover,
  styled,
  Typography,
  Stack,
  Divider,
  Box,
  Tooltip,
  IconButton
} from '@mui/material';
import { ThemeContext } from 'src/theme/ThemeProvider';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import Fab from '@mui/material/Fab';
import { useTranslation } from 'react-i18next';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import Brightness5Icon from '@mui/icons-material/Brightness6';

const IconWrapper = styled(IconButton)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      color: ${theme.palette.primary.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
      border-radius: 50px;
      box-shadow: 0px 1px 4px ${
        theme.colors.alpha.black[30]
      }, 0px 3px 12px 2px ${theme.colors.alpha.black[10]};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${theme.spacing(1.5, 2, 2.5)};
      position: relative;
      transition: ${theme.transitions.create(['all'])};


      &::after {
        position: absolute;
        content: '';
        border-radius: inherit;
        border: ${theme.colors.alpha.black[10]} solid 2px;
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        left: -${theme.spacing(1.5)};
        top: -${theme.spacing(1.5)};
        transition: ${theme.transitions.create(['border-color'])};
      }

      & + .MuiTypography-root {
        transition: ${theme.transitions.create(['color'])};
      }

      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        box-shadow: ${theme.colors.shadows.primary};

        & + .MuiTypography-root {
          color: ${theme.colors.alpha.black[100]};
        }

        &::after {
          border-color: ${theme.colors.primary.light};
        }
      }
`
);

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(4)};
          
          &::before {
              width: 30px;
              height: 30px;
              content: ' ';
              position: absolute;
              border-radius: 100px;
              left: 13px;
              top: 13px;
              background: ${theme.colors.primary.main};
              animation: ripple 1s infinite;
              transition: ${theme.transitions.create(['all'])};
          }

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
          border:0px;
  `
);

const ThemeSettings = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';

  const [theme, setTheme] = useState(curThemeName);

  const changeTheme = (theme) => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip arrow title={t('Theme Settings')}>
          <Fab ref={ref} onClick={handleOpen} color="primary" aria-label="add">
            <SettingsTwoToneIcon />
          </Fab>
        </Tooltip>
        <Popover
          disableScrollLock
          anchorEl={ref.current}
          onClose={handleClose}
          open={isOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Box p={2}>
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              variant="body1"
            >
             TEMAS
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ThemeToggleWrapper>
              <Stack alignItems="center" spacing={2}>
                <Tooltip placement="left" title="theme of the day" arrow>
                  <Box
                    className={theme === 'PureLightTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('PureLightTheme');
                    }}
                  >
                    <IconWrapper>
                      <Brightness5Icon/>
                    </IconWrapper>
                  </Box>
                </Tooltip>
              </Stack>
            </ThemeToggleWrapper>
            <ThemeToggleWrapper>
              <Stack alignItems="center" spacing={2}>
                <Tooltip placement="left" title="theme of the night" arrow>
                  <Box
                    className={theme === 'GreenFieldsTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('GreenFieldsTheme');
                    }}
                  >
                    <IconWrapper>
                      <NightlightTwoToneIcon/>
                    </IconWrapper>
                  </Box>
                </Tooltip>
              </Stack>
            </ThemeToggleWrapper>
          </Stack>
        </Popover>
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;
