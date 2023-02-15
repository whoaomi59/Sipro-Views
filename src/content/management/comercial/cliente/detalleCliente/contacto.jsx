import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    TableRow,
    Button
  } from '@mui/material';
  import PropTypes from 'prop-types';
//falta modal y pasar los arreglos
function contacto(DetaClien){
    console.log(DetaClien)
    return (
        <>
        <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid md={11}>

        </Grid>
            <Grid md={2}>
                <Button 
                variant="contained"
                color="primary"
                style={{marginBottom:20}}
                >
                    {('+ Nuevo')}
                </Button>
            </Grid>
        </Box>
        
            <TableContainer>
                <Table>
                    <TableHead style={{background:'rgb(167 167 167 / 7%)',borderBottom: '2px solid #80808059'}}>
                        <TableRow>
                            <TableCell>{('contacto')}</TableCell>
                            <TableCell>{('telefono')}</TableCell>
                            <TableCell>{('celular')}</TableCell>
                            <TableCell>{('email')}</TableCell>
                            <TableCell>{('cargo')}</TableCell>
                            <TableCell>{('sede')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

contacto.propTypes = {
    DetaClien: PropTypes.array.isRequired
  };
  
  
export default contacto;