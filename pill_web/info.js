<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function () {
    // #info에 마우스 호버 시
    $("#info").on({
      mouseenter: function () {
        // #pop-up과 #newsinfo의 투명도를 1로 설정
        $("#pop-up, #newsinfo").css("opacity", "1");
      },
      mouseleave: function () {
        // #pop-up과 #newsinfo의 투명도를 0으로 복원
        $("#pop-up, #newsinfo").css("opacity", "0");
      },
    });
  });
</script>
