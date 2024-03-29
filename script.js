import initScrollSuave from "./js/scroll-suave.js";
import initAnimacaoScroll from "./js/anima-scroll.js";
import initSimulator from "./js/simulador.js";
import initAccordion from "./js/accordion.js";
import initFuncionamento from "./js/funcionamento.js";
import initTooltip from "./js/tooltip.js";

initScrollSuave();
initAnimacaoScroll();
initSimulator();
initAccordion();
initFuncionamento();
initTooltip();

import MenuMobile from "./js/menu-mobile.js";
const menuMobileInstance = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]'
);
menuMobileInstance.init();

import SlideNav from "./js/slide.js";
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
