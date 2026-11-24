import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

document.documentElement.classList.add("js");
// modos de teste de fluidez no celular (?teste=fio,reveal): desligam uma peça por vez
const params = new URLSearchParams(location.search);
params
  .get("teste")
  ?.split(",")
  .forEach((p) => document.documentElement.classList.add(`t-${p.trim()}`));
// ?ver=<id> pula para a seção, para revisão de cada capítulo por print
const ver = params.get("ver");
if (ver)
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = "auto";
    const el = document.getElementById(ver);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY);
  });

const root = document.getElementById("root")!;
// no site publicado o HTML já vem pronto (pré-renderizado no build): o React só assume a página
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
