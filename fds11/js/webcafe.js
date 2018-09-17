// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item');
var subItem= $('.sub-menu a');
var tab = $('.tab');

// 메인 메뉴 제어 함수
item.attr('tabindex','0');
subItem.attr("class",'fas fa-angle-left');
tab.attr('tabindex','0');


item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

subItem.hover(function(){
  $(this).toggleclass('fa-angle-right');
});
// 탭 매뉴 제어를 위한 함수
tab.on('click focusin',function(){
  $(this).parent().siblings().removeClass('tab-act');
  $(this).parent().addClass('tab-act');
});