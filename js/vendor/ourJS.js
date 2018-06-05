$( document ).ready(function() {
  var $menu = $(".menu");
  var $menu_options = $(".menu-options");

  $menu.on('mouseover',function(){
    $menu_options.show();
  });
  $menu.on('mouseleave',function(){
    $menu_options.hide();
  });

});
