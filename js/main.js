// Scroll 3 (ScrollTriger)
// Scroll 3 (제이쿼리 설정 아래만 하면 나머지  css로 해주면 이걸로 끝)
// Scroll 3 (css 위주)

// document.addEventListener('DOMContentLoaded', function(){
// 아래랑 같은뜻===
// $()는 제이쿼리의 문법. 앞에썼던 거니깐 그냥 써준다
$(function () {
  // 홈피에서 긁어오기 becoms에서
  var trigger = new ScrollTrigger({
    //클래스명 바꾸기 (기본적으로 보이면 나오게 한다)
    toggle: {
    visible: 'active',
    hidden: 'inactive'
  },
    //나타나는 타이밍 (그 요소가 y축 아래에서 300px나올때 발동하게한다)
    offset: {
         x: 0,
         y: 300
       },
       // inactive를 반복안하고 실행한번만 하도록 , 즉 위에 inactive를 넣어주지 않는다
       once: true


  });

  // 클래스 추가하고 싶은곳에 html추가 <div data-scroll></div>
  // 여기선 부모 클래스들에게


});






// Scroll 2 (waypoint)
// Scroll 2
// Scroll 2

// $(function () {
//
//     var $device = $('.device');
//     var $features= $('.features');
//     var $location = $('.location');
//
//     var waypoints1 = $device.waypoint(function() {
//         $device.find('img').addClass('animate');
//         $features.find('img').addClass('grow-img');
//         $features.find('h4').addClass('grow-img');
//
//     }, {
//       offset: '50%'
//     })
//
//     var waypoints2 = $features.waypoint(function() {
//         $features.find('img').addClass('grow-img');
//         $features.find('h4').addClass('grow-img');
//
//     }, {
//       offset: '50%'
//     })
//
//     var waypoints3 = $location.waypoint(function() {
//         $('.stripte').each(function (idx) {
//         var $this = $(this);
//         setTimeout(function () { $this.addClass('animate_down');},100*idx);
//         })
//
//     }, {
//       offset: '50%'
//     })
//
// });
// ----------------------------------------
// // var waypoints = $('#handler-first').waypoint(function(direction) {
// /    //할일
// //   notify(this.element.id + ' hit 25% from top of window')
// // }, {
// //   offset: '25%'
// // })








// // Scroll 1
// Scroll 1
// Scroll 1
// $(function(){
//
//     var $device =$('.device');
//     // 스크롤 내릴때 이프발동되는  높이 설정
//     var $location =$('.location')
//     var $offset = 600;
//     var $offset2 = 900;
//     var $deviceOST =$device.offset().top -$offset;
//     var $featuresOST =$('.features').offset().top -$offset2;
//     var $locationOST =$('.location').offset().top -$offset;
//
//     $(window).scroll(function () {
//         if($(this).scrollTop() > $deviceOST) {
//           $device.find('img').addClass('animate');
//         }
//         if($(this).scrollTop() > $featuresOST) {
//           $('.features').find('img').addClass('grow-img');
//           $('.features').find('h4').addClass('grow-img');
//         }
//         if($(this).scrollTop() > $locationOST) {
//           // $location.find('.stripte').addClass('animate_down');
//           // 시간을 한번 재서, 그 시간이 지나면 할일?
//           // setTimeout(할일,시간)
//           // 할일 = 함수 function(){실제로 할일}
//           //           each 는  idx를 가져온다 순번
//           $('.stripte').each(function (idx) {
//             var $this = $(this);
//             setTimeout(function () { $this.addClass('animate_down');},100*idx);
//           })
//           // setTimeout(function () {$('#s1').addClass('animate_down');},100);
//         }
//     });
// });
