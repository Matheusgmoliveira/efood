import { createGlobalStyle } from 'styled-components'
export const cores = {
  salmao: '#E66767',
  rosaClaro: '#FFEBD9',
  branco: '#FFFFFF',
  cinzaClaro: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1366px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Roboto, sans-serif;
    text-decoration:none;
    }

    body{
    background-color:${cores.branco};
    color:${cores.salmao};}

    .container{
      display:flex;
      justify-content:center;
      align-items:center;


      max-width: 1366px;
      width: 100%;
      margin: 0 auto;

       @media (max-width: ${breakpoints.desktop}){
       max-width: 80%;
       }
      }

`
