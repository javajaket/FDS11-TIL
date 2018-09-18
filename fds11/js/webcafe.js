// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item');
var subItem= $('.sub-menu a');
var tab = $('.tab');
var list = $('.related-list');

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
// list.hover(function(){
//   $(this).toggleClass('related-act');
// });
// 관련 사이트 목록 애니메이션을 위한 함수
list.on('mouseover focusin', function(){
  $(this).addClass('related-act');
})

list.on('mouseout focusout', function () {
  $(this).removeClass('related-act');
}) 