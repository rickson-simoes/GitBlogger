import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}
