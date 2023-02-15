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
import Delete from '@mui/icons-material/DeleteForever';
const Info = ({data}) => {

    const { t } = useTranslation();
    return (
      <Card>
        <Grid spacing={0} container>
          <Box style={{paddingLeft:20}}>
              <h2>DOCUMENTOS</h2>
          </Box>
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
                    {data.map(data => {
                        return (
                        <TableRow key={data}>
                        <TableCell>{data.usuacrea}</TableCell>
                        <TableCell>{data.netdnomb}</TableCell>
                        <TableCell><a target="_blank" href="{{nedoruta}}">{data.nedofile}</a></TableCell>
                        <TableCell><div dangerouslySetInnerHTML={{__html: data.nedomemo}} className='container'/></TableCell>
                        <TableCell></TableCell>
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
  