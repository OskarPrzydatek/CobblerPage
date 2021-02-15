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
`

export default globalStyle
