import { css } from "@nfront/global-styles"

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #F2F2F2;
    color: #2D2D2D;
    font-family: 'Lexend Deca', sans-serif;
  }

  a {
    text-decoration: none;
    color: #2D2D2D;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100vh;
  }
  
  @media screen and (max-width: 818px) {
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  // IPad
  @media screen and (width: 768px) and (height: 1024px) {
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }  
  }

  @media screen and (width: 1024px) and (height: 768px) {
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  // Ipad Pro
  @media screen and (width: 1024px) and (height: 1366px) {
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }  
  }
`

export default globalStyle
