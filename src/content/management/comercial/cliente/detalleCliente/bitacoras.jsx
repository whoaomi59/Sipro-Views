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
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//falta modal y pasar los arreglos
function bitacoras(){
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
                            <TableCell>{('#')}</TableCell>
                            <TableCell>{('Usuario')}</TableCell>
                            <TableCell>{('Fecha')}</TableCell>
                            <TableCell>{('Historico')}</TableCell>
                            <TableCell>{('Aprobacion')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
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
  
export default bitacoras;