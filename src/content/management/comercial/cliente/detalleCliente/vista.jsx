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
import Edit from '@mui/icons-material/Edit';
import Clear from '@mui/icons-material/Clear';
import User from '@mui/icons-material/AccountCircle';
//falta modal y pasar los arreglos
function vista(){
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
                            <TableCell>{('usuario')}</TableCell>
                            <TableCell>{('fecha asignada')}</TableCell>
                            <TableCell>{('fecha fin')}</TableCell>
                            <TableCell>{('detalle')}</TableCell>
                            <TableCell>{('detalle actividad')}</TableCell>
                            <TableCell>{('')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>
                            <Edit style={{fontSize:'28px',color:'rgb(50, 216, 188)',cursor:'pointer'}}/>
                            <Clear style={{fontSize:'28px',color:'rgb(241, 96, 29)',cursor:'pointer'}}/>
                            <User style={{fontSize:'28px',color:'rgb(253, 189, 52)',cursor:'pointer'}}/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
  
export default vista;