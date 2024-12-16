$(function () {
  let checkedCount = 0;
  let checklistVisible = true; // checklist의 표시 여부를 추적
  // 페이지 로드 및 창 크기 변경 시 체크
  window.onload = checkWindowWidth;
  window.onresize = checkWindowWidth;

  function checkWindowWidth() {
    const width = window.innerWidth;

    const wideMessage = document.getElementById('wide-message');
    const narrowMessage = document.getElementById('narrow-message');

    if (width >= 3000) {
      wideMessage.style.display = 'block';
      narrowMessage.style.display = 'none'; 
    } 
    else if (width <= 1650) {
      narrowMessage.style.display = 'block';
      wideMessage.style.display = 'none'; 
    } 
    else {
      wideMessage.style.display = 'none';
      narrowMessage.style.display = 'none';
    }
  }

  // 스크롤 이벤트 처리
  $(window).on('scroll', function () {
    const yPos = $(window).scrollTop();
    $('#box1').text(yPos);

    // text01의 투명도 조절
    if (yPos >= 1000) {
      $('#text01').stop().animate({ 'opacity': 1 }, 500);
    } else {
      $('#text01').stop().animate({ 'opacity': 0 }, 500);
    }

    // checklist의 투명도 조절
    if (yPos >= 2500 && checklistVisible) {
      $('#checklist').stop(true).animate({'opacity': 1}, 300);
    } else {
      $('#checklist').stop(true).animate({'opacity': 0}, 300);

    }

    if (yPos >= 3700) {
      $('#last-text01').stop().animate({ 'opacity': 1 }, 300);
    } else {
      $('#last-text01').stop().animate({ 'opacity': 0 }, 300);
    }

    if (yPos >= 4800) {
      $('#last-text02').stop().animate({ 'opacity': 1 }, 300);
    } else {
      $('#last-text02').stop().animate({ 'opacity': 0 }, 300);
    }

    if (yPos >= 5700) {
      $('#last-text03').stop().animate({ 'opacity': 1 }, 300);
      $('#last-pill').stop().animate({ 'opacity': 1 }, 300);
    } else {
      $('#last-text03').stop().animate({ 'opacity': 0 }, 300);
      $('#last-pill').stop().animate({ 'opacity': 0 }, 300);
    }

    if (yPos <= 2300 && yPos >= 3500) {
      $('.overlay').stop().animate({ 'opacity': 0}, 300);
    } else {
      $('.overlay').stop().animate({ 'opacity': 1 }, 300);
    }
  }); 

  $('.check-item').on('change', function () {
    $(this).is(':checked') ? checkedCount++ : checkedCount--; // 체크된 항목 수 체크크
  
    if (checkedCount >= 3) {
      // 3개 이상 체크
      $('.overlay').css({
        'visibility': 'visible',
        'opacity': 1
      }, 500);
      $('#circle10').stop(true, true).animate({ 'left': '60%' }, 300);
  
      if (checklistVisible) {
        $('#checklist').stop(true, true).animate({ 'opacity': 0 }, 500);
        checklistVisible = false;
      }
      $('#result').stop(true, true).css({
        'opacity': 1,
        'visibility': 'visible'
      }, 500);
  
      $('#last-text01, #last-text02, #last-text03').css('color', 'white');
  
    } else {
      // 체크 3개 미만
      $('#circle10').stop(true, true).animate({ 'left': '-40%' }, 200);
      $('.overlay').css({
        'opacity': 0,
        'visibility': 'hidden'
      }, 200);
      $('#result').stop(true, true).css({
        'opacity': 0,
        'visibility': 'hidden'
      }, 500);
  
      if (!checklistVisible) {
        $('#checklist').stop(true, true).animate({ 'opacity': 1 }, 500);
        checklistVisible = true;
      }
  
      $('#last-text01, #last-text02, #last-text03').css('color', 'black');
    }
  });
  /*
  $('#pill03').off('click').on('click', function() {
    window.location.href = 'https://www.example.com';  // 외부 사이트로 이동
  });
  */
  $('#pill02, #pill03, #pill04, #pill05, #pill06, #pill07').on({
    mouseenter: function () {
      // 현재 pill의 -hover 요소만 보이게 설정
      $(this).find('div').css('opacity', '1');
    },
    mouseleave: function () {
      // 현재 pill의 -hover 요소 다시 숨김
      $(this).find('div').css('opacity', '0');
    },
  });

  
});
