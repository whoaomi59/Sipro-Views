import { useState, useEffect, useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DatePicker from '@mui/lab/DatePicker';
import Addcom from '@mui/icons-material/AddComment';
import EditorText from './materials/textEditor';
import Delete from '@mui/icons-material/Backspace';
import {
    Card,
    Box,
    Grid,
    IconButton,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Tooltip,
    TextField
  } from '@mui/material';
const Info = ({}) => {
    const [Html, setHtml] = useState('');
    const [value, setValue] = useState(null);
    const docu=[{
        usuacrea:'yes',
        netdnomb:'sapooo'
    }]
    return (
        <Card>
        <Grid spacing={0} container>
            <Box style={{paddingLeft:20}}>
            <h2 >INFORMACION DEL CLIENTE </h2>
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
            <Box py={4} pr={4} flex={1} >
                <Grid container  style={{display:'flex',justifyContent:'center'}}>
                <Grid xs={12} sm={5}  style={{margin:'20px'}}>
                    <label className='label-input'>Comercial</label><input type='text' className='input-text'/>
                    <label className='label-input'>Fecha de la Oportunidad</label><input type='text' className='input-text'/>
                    <label className='label-input'>¿Necesita Preventa?</label><input type='text' className='input-text'/>
                    <label className='label-input'>Probabilidad</label>
                    <div className='Select-cont'>
                        <select>
                            <option>Seleccione....</option>
                        </select>
                    </div>
                    <label className='label-input'>¿Requiere Cotización?</label>
                    <div className='Swif-cont'>
                        <label>SI</label>
                        <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        />
                        <label>NO</label>
                    </div>
                    <label className='label-input'>Cerrar Oportunidad</label>
                    <div className='Select-cont'>
                        <select>
                            <option>Seleccione....</option>
                        </select>
                    </div>
                </Grid>
                <Grid xs={12} sm={5} >
                    <TableContainer style={{margin:'20px'}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell>{('Categoria')}</TableCell>
                                <TableCell>{('Tipo')}</TableCell>
                                <TableCell>
                                    <Tooltip title={('Agregar')} arrow>
                                        <IconButton>
                                        <Addcom className='amarillo' style={{fontSize:'33px'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {docu.map(data => {
                                return (
                                <TableRow key={data}>
                                <TableCell>{data.usuacrea}</TableCell>
                                <TableCell>{data.netdnomb}</TableCell>
                                <TableCell>
                                <Tooltip title={('Eliminar')} arrow>
                                    <IconButton>
                                    <Delete className='naranja'/>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                                </TableRow>
                                )})}
                            </TableBody>  
                        </Table>
                    </TableContainer> 
                    <EditorText setHtml={setHtml} style={{margin:'20px'}}/>
                    <div className='cont-flex margin'>
                    <label className='label-input margin'>Entrega de cotización al cliente:</label>
                    <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                        placeholder={('Select due date...')}
                        {...params}
                        />
                    )}
                    />
                    </div>
                    <div className='cont-flex margin'>
                    <label className='label-input margin'>Estimada de Cierre del Negocio:</label>
                    <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                        placeholder={('Select due date...')}
                        {...params}
                        />
                    )}
                    />
                    </div>
                </Grid>
                </Grid>
            </Box>
            </Grid>
        </Grid>
        </Card>
    );
}

export default Info;
  