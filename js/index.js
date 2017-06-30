$('body,html').click(function(e){
   $('input[name="menu-button"]:checked ~ .slide-in-menu').addClass('hide-menu');
});