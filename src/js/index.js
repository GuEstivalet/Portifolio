/*Ao clickar Enter, o scroll guiará até a seguinte section*/

document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        event.preventDefault();
        
        const sobreSec = document.getElementById('sobre');
        
        sobreSec.scrollIntoView({ behavior: 'smooth' });
    }
});

/*Ao clickar em Sobre no header, o scroll guará até a section sobre*/

document.getElementById('sobre-a').addEventListener('click', function(event) {

    event.preventDefault();
    
    const targetElement = document.getElementById('sobre');
    

    targetElement.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('sobre-b').addEventListener('click', function(event) {
    
    event.preventDefault();
    const link1 = document.getElementById('sobre-b');
    const link2 = document.getElementById('portifolio-b');
    const link3 = document.getElementById("ctt-b");
    const header = document.querySelector("header");
    const targetElement = document.getElementById('sobre');
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        link1.style.display = "none";
        link2.style.display = "none";
        link3.style.display = "none";
        header.style.height = '0px';
      }, 1000);
});

/*Ao clickar em Portifolio no header, o scroll guará até a section portifolio*/

document.getElementById('portifolio-a').addEventListener('click', function(event) {
    
    event.preventDefault();
    
    const targetElement = document.getElementById('portifolio');
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('portifolio-b').addEventListener('click', function(event) {
    
    event.preventDefault();

    const link1 = document.getElementById('sobre-b');
    const link2 = document.getElementById('portifolio-b');
    const link3 = document.getElementById("ctt-b");
    const header = document.querySelector("header");
    const targetElement = document.getElementById('portifolio');
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        link1.style.display = "none";
        link2.style.display = "none";
        link3.style.display = "none";
        header.style.height = '0px';
        header.style.transition = ' 1s ease';
      }, 1000);
});


document.getElementById('button-nav').addEventListener('click', function(event) {
    event.preventDefault();

    const buttonNav = document.getElementById('button-nav');
    const link = document.getElementById('ctt-b');
    const header = document.querySelector('header');

    if (link.style.display === "flex") {
      link.style.display = "none";
      header.style.height = '0px'; 
      header.style.transition = ' 1s ease';
    } else {
      setTimeout(() => {link.style.display = "flex";},400);
      setTimeout(() => {link.style.opacity = "1";},400);
      header.style.height = '15vh';
      header.style.transition = ' 1s ease';
    }
  });


  document.getElementById('button-nav').addEventListener('click', function(event) {
    event.preventDefault();

    const buttonNav = document.getElementById('button-nav');
    const link = document.getElementById('portifolio-b');
    const header = document.querySelector('header');

    if (link.style.display === "flex") {
      link.style.display = "none";
      header.style.height = '0px'; 
      header.style.transition = ' 1s ease';
    } else {
      setTimeout(() => {link.style.display = "flex";},300);
      setTimeout(() => {link.style.opacity = "1";},300);
      header.style.height = '15vh';
      header.style.transition = ' 1s ease';
    }
  });

  document.getElementById('button-nav').addEventListener('click', function(event) {
    event.preventDefault();

    const buttonNav = document.getElementById('button-nav');
    const link = document.getElementById('sobre-b');
    const header = document.querySelector('header');

    if (link.style.display === "flex") {
      link.style.display = "none";
      header.style.height = '0px'; 
      header.style.transition = ' 1s ease';
    } else {
      setTimeout(() => {link.style.display = "flex";},200);
      setTimeout(() => {link.style.opacity = "1";},200);
      header.style.height = '15vh';
      header.style.transition = ' 1s ease';
    }
  });

  function resizeDiv() {

    const link1 = document.getElementById('sobre-b');
    const link2 = document.getElementById('portifolio-b');
    const link3 = document.getElementById("ctt-b");
    const header = document.querySelector('header');

    if (window.innerWidth >= 650) {
      link1.style.display = "none";
      link2.style.display = "none";
      link3.style.display = "none";
      header.style.height = '0px';
      header.style.transition = ' 1s ease';
    }
  }

  window.addEventListener('resize', resizeDiv);

  
