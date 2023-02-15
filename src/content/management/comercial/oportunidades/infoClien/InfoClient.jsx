import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import UserIco from '@mui/icons-material/AccountCircle';
import {
    Card,
    Box,
    Grid,
    Button
  } from '@mui/material';
const Info = ({Info}) => {
  const Sapo =[{
    name:'sapo',
  },{
    name:'perro',
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
            <Box py={4} pr={4} flex={1}>
              <Grid container spacing={0}>
                <Grid
                  xs={12}
                  sm={5}
                  item
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                </Grid>
                <Grid xs={12} sm={7} item >
                    <label className='label-input'>Cliente</label><input value={Info.emprnomb}  type='text' className='input-text'/>
                    <label className='label-input'>Oportunidad:</label><input value={Info.id} type='text' className='input-text'/>
                    <label className='label-input'>NIT</label><input value={Info.emprnit} type='text' className='input-text'/>
                    <label className='label-input'>Ciudad</label><input value={Info.muninomb} type='text' className='input-text'/>
                    <label className='label-input'>Dirección</label><input value={Info.emprdire} type='text' className='input-text'/>
                    <label className='label-input'>Teléfono</label><input value={Info.emprtels} type='text' className='input-text'/>
                    <label className='label-input'>Fax</label><input value={Info.emprfax} type='text' className='input-text'/>
                    <label className='label-input'>Email</label><input value={Info.emprmail} type='text' className='input-text'/>
                    <label className='label-input'>Tipo de Cliente</label><input value={Info.tiponomb} type='text' className='input-text'/>
                    <label className='label-input'>Contacto Comercial</label><input value={Info.contnomb} type='text' className='input-text'/>
                    <label className='label-input'>Contacto Comercial</label>
                    <div className='Select-cont'>
                      <select>
                        <option>Seleccione....</option>
                        <option>Camilo Jerez</option>
                        <option>Carlos Cardena</option>
                        <option>Jorge Alejandro Hoyos</option>
                      </select>
                      <button className='botu-Dimi'><UserIco/></button>
                    </div>
                    <label className='label-input'>Origen</label>
                    <div className='Select-cont'>
                      <select>
                        <option>Seleccione....</option>
                        <option>Camilo Jerez</option>
                        <option>Carlos Cardena</option>
                        <option>Jorge Alejandro Hoyos</option>
                      </select>
                    </div>
                    <label className='label-input'>Etapa</label>
                    <div className='Select-cont'>
                      <select>
                        <option>Seleccione....</option>
                        <option>Camilo Jerez</option>
                        <option>Carlos Cardena</option>
                        <option>Jorge Alejandro Hoyos</option>
                      </select>
                    </div>
                    <label className='label-input'>¿Es viable?</label>
                    <div className='Swif-cont'>
                      <label>NO</label>
                      <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                      />
                      <label>SI</label>
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
  