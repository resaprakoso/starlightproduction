window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.backgroundColor = "rgba(51, 26, 65, 1)";
    document.getElementById("nav").style.boxShadow = "3px 4px 7px 0px rgba(10, 10, 10, .25)";
  } else {
    document.getElementById("nav").style.backgroundColor = "rgba(46, 28, 43, 0)";
    document.getElementById("nav").style.boxShadow = "3px 4px 7px 0px rgba(51, 26, 65, 0)";
  }
}

const menuOpen = document.querySelector('.box-menu-mobile');
menuOpen.addEventListener('click', function(){
  const listMenu = document.querySelector('.list-menu-mobile');
  listMenu.style.top = "0";
});

const menuClose = document.querySelector('.list-menu-mobile');
menuClose.addEventListener('click', function(){
  const listMenu = document.querySelector('.list-menu-mobile');
  listMenu.style.top = "-100vh";
});

const btnServiceDesktop = document.getElementById('btnServiceDesktop');
btnServiceDesktop.addEventListener('click', function(){
  const klikServiceDesktop = document.getElementById('service')
  klikServiceDesktop.scrollIntoView();
});

const btnServiceMobile = document.getElementById('btnServiceMobile');
btnServiceMobile.addEventListener('click', function(){
  const klikServiceMobile = document.getElementById('service')
  klikServiceMobile.scrollIntoView();
});

const btnPortfolioDesktop = document.getElementById('btnPortfolioDesktop');
btnPortfolioDesktop.addEventListener('click', function(){
  const klikPortfolioDesktop = document.getElementById('portfolio')
  klikPortfolioDesktop.scrollIntoView();
});

const btnPortfolioMobile = document.getElementById('btnPortfolioMobile');
btnPortfolioMobile.addEventListener('click', function(){
  const klikPortfolioMobile = document.getElementById('portfolio')
  klikPortfolioMobile.scrollIntoView();
});
