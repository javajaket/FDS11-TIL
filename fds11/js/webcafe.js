// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item');
var subItem= $('.sub-menu a');
item.attr('tabindex','0');
subItem.attr("class",'fas fa-angle-left');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

subItem.hover(function(){
  $(this).toggleclass('fa-angle-right');
});