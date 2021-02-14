import { createGlobalStyle } from "@nfront/global-styles";
import globalStyle from "./globalStyle"

const GlobalStyleComponent = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyleComponent;
