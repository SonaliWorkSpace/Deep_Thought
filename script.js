

// toggle description //

document.addEventListener('DOMContentLoaded', function() {
    const toggleDescriptions = document.querySelectorAll('.toggle-description1');
    
    
    toggleDescriptions.forEach(img => {
      img.addEventListener('click', function() {
        const description = this.parentNode.querySelector('.description');
        description.classList.toggle('visible');

        const grp = document.querySelector('.grp img');
        if (grp) { 
          if (description.classList.contains('visible')) {
            grp.style.marginTop = '64%'; 
          } else {
            grp.style.marginTop = ''; 
          }
        }
        
        const thread = document.querySelector('.thread');
        if (thread) {
          if (description.classList.contains('visible')) {
            thread.style.marginTop = '-2px'; 
            thread.style.height = '39px'
          } else {
            thread.style.marginTop = '';
            thread.style.height = ''; 
          }
        }

        const big = document.querySelector('.thebig');
        if (big) {
          if (description.classList.contains('visible')) {
            big.style.marginTop = '-48px'; 
          } else {
            big.style.marginTop = '';
          }
        }



        const btn = document.querySelector('.selbtn');
        if (btn) { 
          if (description.classList.contains('visible')) {
            btn.style.marginTop = '-39px';
          } else {
            btn.style.marginTop = '';
          }
        }
     
    

    const nbtn = document.querySelector('.selbtn button');
    if (nbtn) { 
      if (description.classList.contains('visible')) {
        nbtn.style.marginTop = '214px';
        nbtn.style.padding = '7px' 
      } else {
        nbtn.style.marginTop = '';
        nbtn.style.padding = ''; 
      }
    }

      });
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const toggleDescriptions3 = document.querySelectorAll('.toggle-description3');
    const toggleDescriptions4 = document.querySelectorAll('.toggle-description4');
    
    toggleDescriptions3.forEach(img => {
      img.addEventListener('click', function() {
        const description = this.parentNode.querySelector('.description');
        description.classList.toggle('visible');
        
        const nbig = document.querySelector('.bigcont');
        if (nbig) {
          if (description.classList.contains('visible')) {
            nbig.style.marginTop = '200px';
          } else {
            nbig.style.marginTop = '';
          }
        }
      });
    });

    toggleDescriptions4.forEach(img => {
      img.addEventListener('click', function() {
        const description = this.parentNode.querySelector('.description');
        description.classList.toggle('visible');
        
        const bigmo = document.querySelector('.bigmo');
        if (bigmo) {
          if (description.classList.contains('visible')) {
            bigmo.style.marginTop = '103px';
          } else {
            bigmo.style.marginTop = '';
          }
        }
      });
    });
  });



  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleDescriptions = document.querySelectorAll('.toggle-description');
    
    
    toggleDescriptions.forEach(img => {
      img.addEventListener('click', function() {
        const description = this.parentNode.querySelector('.description');
        description.classList.toggle('visible');
    


      });
    });
  });


  // side menu //
  
  
  
function toggleMenu() {
  const menu = document.getElementById('menu');
  const icon = document.getElementById('toggleIcon');
  const listItems = document.querySelectorAll('.limenu li, .short-list li');
  const rect = document.querySelector('.rect');

  const currentLeft = window.getComputedStyle(menu).left;

  if (currentLeft === '-299px' || currentLeft === '-299px') {
    menu.style.left = '0';
    icon.classList.remove('fa-circle-arrow-right');
    icon.classList.add('fa-circle-arrow-left');
    rect.style.visibility = 'hidden';

    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.visibility = 'visible';
    }
  } else {
    menu.style.left = '-299px';
    icon.classList.remove('fa-circle-arrow-left');
    icon.classList.add('fa-circle-arrow-right');
    rect.style.visibility = 'visible';

    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.visibility = 'hidden';
    }
  }
}
