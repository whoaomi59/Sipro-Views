import {
    Box,
    Typography,
    styled
  
  } from '@mui/material';
const ListItemWrapper = styled(Box)(
    () => `
      display: flex;
      align-items: center;
  `
  );
  const MuiAvatar = styled(Box)(
    ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: rgba(200, 200, 200, 0.2);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(2)};
  
      img {
        width: 65%;
        height: 60%;
        display: block;
        border-radius:6px;
      }
  `
  );
function logos(){
    return(
        <>
        <ListItemWrapper
            sx={{
              mt: 5,
              mb: 2
            }}
          >
            <MuiAvatar>
              <img
                src="/static/images/logo/node.png"
                alt="Node js"
              />
              {/* logos lenguajes  */}
            </MuiAvatar>
            <Typography variant="h6">
              <b>Node js</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - js® Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node. js está diseñado para crear aplicaciones network escalables.
              </Typography>
            </Typography>
          </ListItemWrapper>
          <ListItemWrapper>
            <MuiAvatar>
              <img src="/static/images/logo/javascript.svg" alt="Javascript" />
            </MuiAvatar>
            <Typography variant="h6">
              <b>Javascript</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - El panel de administración de Javascript presenta un moderno
                pila de tecnología y está construido con React + Javascript.
              </Typography>
            </Typography>
          </ListItemWrapper>
          <ListItemWrapper sx={{mt: 2}}>
            <MuiAvatar>
              <img
                src="https://cdn.filestackcontent.com/5yjLJYBrQ6EHpN9dK0ak"
                alt="Material Design"
              />
              {/* logos lenguajes  */}
            </MuiAvatar>
            <Typography variant="h6">
              <b>Material UI</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - biblioteca de código abierto que implementa el lenguaje visual de «materiales» de Google en sus componentes React. 
              </Typography>
            </Typography>
          </ListItemWrapper>
          </>
    );
}
    

export default logos;
