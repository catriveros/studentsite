document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton  = document.querySelector('.menu-button');
    const menunav  = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        if (menunav.getAttribute('data-navstate') === 'open') {
           //if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            //elese (if flase) do this:
            menunav.getAttribute('data-navstate', 'open');
        };
    });
  
  });