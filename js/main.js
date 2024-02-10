// Função para o menu mobile - esconder as seções para a barra de pesquisa não fechar e bugar o Menu Mobile
const Main = document.querySelector('main')
const Footer = document.querySelector('footer')
const menuOculto = document.getElementById('menu-oculto')
const menuMobile = document.getElementById('menu-items')

function abrir(){
        menuMobile.classList.toggle('aberto')
        menuOculto.classList.toggle('menu-animacao')
        Main.classList.toggle('esconder')
        Footer.classList.toggle('esconder')
}

// Função para o menu mobile - Scroll Menu Fixed
function animacaoMenuFixed() {
const menu = document.querySelector('header');

function ativarScroll(){
  menu.classList.toggle('ativo', scrollY > 0)
}

window.addEventListener('scroll', ativarScroll)
}
animacaoMenuFixed();

// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();