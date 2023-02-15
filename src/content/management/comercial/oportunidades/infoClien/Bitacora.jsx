import {
Card,
Box,
Grid,
Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
const Info = ({Bita}) => {
    return (
      <Card>
        <Grid spacing={0} container>
            <div className='cont-top'>
                <div className='cont-flex'><h2>BITACORA</h2></div>
                <div>
                  <Button
                    sx={{
                      mt: { xs: 2, sm: 0 }
                    }}
                    variant="contained"
                    startIcon={<AddTwoToneIcon fontSize="small" />}
                  >
                    {('Nuevo')}
                  </Button>
            </div>
            </div>
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
              <Grid container>
                <div className='cont-txt'>
                {Bita.map(data => {
                return (
                  <>
                  <strong>{data.usuanomb}</strong> | <label>{data.sobifech}</label>
                  <div dangerouslySetInnerHTML={{ __html: data.sobitext }} />
                  </>
                 )})}
                </div>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }
  
export default Info;
  