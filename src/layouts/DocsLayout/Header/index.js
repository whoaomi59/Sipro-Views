import { Card, Box, Button, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import Logo from 'src/components/Logo';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 6;
    top: 0;
    padding: 0 ${theme.spacing(2)};
    height: ${theme.spacing(10)};
`
);

function Header() {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Logo />
      <Box>
        <Button
          component={RouterLink}
          to="/extended-sidebar/dashboards"
          variant="contained"
          sx={{
            mx: 2
          }}
        >
          {t('iniciar sesión')}
        </Button>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
