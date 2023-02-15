import { useTranslation } from 'react-i18next';
import {
Box,
Card,
Grid,
Table,
TableBody,
TableCell,
TableHead,
TableContainer,
TableRow,
Button,
IconButton,
Tooltip,
} from '@mui/material';
import Delete from '@mui/icons-material/Backspace';
const Info = ({Docu}) => {
    console.log(Docu)
    const { t } = useTranslation();
    return (
      <Card>
        <Grid spacing={0} container>
            <div className='cont-top'>
                <div className='cont-flex'><h2>DOCUMENTOS</h2></div>
                <div><Button variant="contained" style={{float:'right'}}>Agregar</Button></div>
            </div>
            <Grid
                sx={{
                position: 'relative'
                }}
                item
                xs={12}
                md={12}
            >
            <TableContainer style={{margin:'20px'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>{t('Usuario')}</TableCell>
                        <TableCell>{t('Tipo')}</TableCell>
                        <TableCell>{t('Documento')}</TableCell>
                        <TableCell>{t('Comentario')}</TableCell>
                        <TableCell>{t('')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Docu.map(data => {
                        return (
                        <TableRow key={data}>
                        <TableCell>{data.usuacrea}</TableCell>
                        <TableCell>{data.netdnomb}</TableCell>
                        <TableCell><a target="_blank" href="{{nedoruta}}">{data.nedofile}</a></TableCell>
                        <div dangerouslySetInnerHTML={{__html: data.nedomemo}} className='container'/>
                        <TableCell>
                                <Tooltip title={t('Eliminar')} arrow>
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
          </Grid>
        </Grid>
      </Card>
    );
  }
export default Info;
  