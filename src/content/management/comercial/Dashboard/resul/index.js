import { Grid } from '@mui/material';
//*****************************************/
//#     #  ######  #       #        ####  //
//#     #  #       #       #       #    # //
//#######  #####   #       #       #    # //
//#     #  #       #       #       #    # //
//#     #  #       #       #       #    # //
//#     #  ######  ######  ######   #### //
//*****************************************/

import Resumen from './resumen';
import MetaComer from './MetaComer';
import MetaComerEne from './MetaVenEn';
import Efect from './Efect';


const dash = () =>(
    <>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
      style={{marginBottom:'30px',padding:'20px'}}
    >
        <Grid item md={6} xs={12}>
            <Resumen />
        </Grid>
        <Grid item md={6} xs={12}>
            <MetaComer />
        </Grid>
        <Grid item md={6} xs={12}>
            <MetaComerEne/>
        </Grid>
        <Grid item md={6} xs={12}>
            <Efect/>
        </Grid>
    </Grid>
    </>
)

export default dash;