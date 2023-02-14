import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import defaultTheme from '@/styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
