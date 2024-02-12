import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { BaseButton} from './BaseButton'
import randomFact_api from './services/random';
import catFact_api from './services/cat';
import dogFact_api from './services/dog';
import poem_api from './services/poem';
import crypto_api from './services/crypto';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import Tilt from 'react-parallax-tilt';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [textResp, setTextResp] = useState('')
  return (
    <>
        <ThemeProvider theme={theme}>
          <Typography color="#FF004D" sx={{m:2}} align='center' variant="h1">
            A Totally Random
          </Typography>
        </ThemeProvider>
        {
          textResp !== '' ?
          <Tilt tiltReverse={true}>
              <Container sx={{ borderRadius: '16px', p: 4, height: '100%', backgroundColor:'#FAEF5D'}} >
              <Typography align='center' variant='h6'>
                {textResp}
              </Typography>
            </Container>
          </Tilt> : <></>
        }
    
        <Container align='center' sx={{ mt: 2 }}>
          <BaseButton value='fact' func={async () => {
            const res = await randomFact_api()
            setTextResp(res)
          }} />
          <BaseButton value='cat fact' func={async () => {
            const res = await catFact_api()
            setTextResp(res)
          }} />
          <BaseButton value='dog fact' func={async () => {
            const res = await dogFact_api()
            setTextResp(res)
          }} />
          <BaseButton value='poem' func={async () => {
            const res = await poem_api()
            setTextResp(res)
          }} />
          <BaseButton value='cryptocurrency' func={async () => {
            const res = await crypto_api()
            setTextResp(res)
          }} />
        </Container>
        
    </>
  )
}

export default App
