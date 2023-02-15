import { Box, Card, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Card className="footer">
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2022 -  SIPRO - SISTEMA DE INFORMACIÓN Y PROCESOS, INGEAL S.A.
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          Ingeal S.A {' '}
          <Link
            href="https://ingeal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sipro
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}

export default Footer;
