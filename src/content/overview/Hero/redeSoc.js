import {
    Typography,
    IconButton,
    styled
  } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Fab from '@mui/material/Fab';

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);
const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      border-radius: 60px;
      border:0
      &:hover{
        color:blue;
        font-size:520px;
        background:  rgba(200, 200, 200, 0.1);
      }
  `
);
  
  function Scenes() {
    return (
      <>
         <TypographyH2
          marginBottom={2}
           style={{
            display: 'flex',
          }}
          >
          <IconButtonWrapper>
          <Fab  style={{
                color:'#fff',
                background:'#3b5998',
                }}>
          <FacebookIcon/>
          </Fab>
          </IconButtonWrapper>
          <IconButtonWrapper>
          <Fab  style={{
                color:'#fff',
                background:'#00acee'
                }}>
          <TwitterIcon/>
          </Fab>
          </IconButtonWrapper>
          <IconButtonWrapper>
          <Fab  style={{
                color:'#fff',
                background:'#0e76a8'
                }}>
          <LinkedInIcon/>
          </Fab>
          </IconButtonWrapper>
          <IconButtonWrapper>
          <Fab style={{
                color:'#fff',
                background:'#c4302b'
                }}>
          <YouTubeIcon/>
          </Fab>
          </IconButtonWrapper>
          <IconButtonWrapper>
          <Fab style={{
                color:'#fff',
                background:'#e95950'
                }}>
                <InstagramIcon/> 
          </Fab>
          </IconButtonWrapper>
          </TypographyH2>
      </>
    );
  }
  
  export default Scenes;