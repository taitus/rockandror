var
  navHeight = $("nav").height(),
  heightTopBar = $(".top-bar").height(),
  windowHeight = $(window).height() - heightTopBar;
  windowWidth = $(window).width();

function init(){
  animation();
  resizeDiv();
  scrollToSection();
  $('li.anim.has-dropdown.portfolio.not-click').click(function(){
    //return false;
  });
  initBudgetSteps();
  updatePrice();
  budgetAmountWidth();

}

function budgetAmountWidth(){
  var budget_ammount = $('form.new_budget .wizard .steps li a').width();
  $('#budget_ammount').width(budget_ammount);
}

function initBudgetSteps(){
  var wizard = $("#new_budget div");
  wizard.steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "none",
      titleTemplate: "#title#",
      stepsOrientation: "vertical",
      onFinished: function (event, currentIndex)
      {
        wizard.closest("form").submit();
      },
      labels: { next: "Siguiente",
      previous: "Anterior",
      finish: "Enviar solicitud" }
  });

  if (($("#new_budget").data("errored") == true) || ($("#new_budget").data("received-params") == true)) {
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
  }
}

function resizeDiv() {

  if(windowHeight <= 1025){
    $(".intro .container a").css('margin-top','20px');
    $(".intro").css({'height': $(window).height() + 'px'});
  }

  if(windowHeight == 1280 && windowWidth == 800){
    $(".intro .container a").css('margin-top','20px');
    $(".intro").css({'height': $(window).height() + 'px'});
  }

}

function scrollToSection(){
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $( this ).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if($(window).width() <= 768){
          $('html,body').animate({ scrollTop:target.offset().top }, 700);
        }else{
          $('html,body').animate({ scrollTop:target.offset().top }, 700);
        }
        return false;
      }
    }
  });
}

function updatePrice(){
  $('#budget_ammount').val(parseInt($("#budget_ammount").val()) + ' €');

  $("#budget_module_1").click(function() {
    if ($("#budget_module_1")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 1000 + ' €')
      $("#checked-1").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 1000 + ' €')
      $("#checked-1").html("")
    }
  });
  $("#budget_module_2").click(function() {
    if ($("#budget_module_2")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 1000 + ' €')
      $("#checked-2").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 1000 + ' €')
      $("#checked-2").html("")
    }
  });
  $("#budget_module_3").click(function() {
    if ($("#budget_module_3")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 500 + ' €')
      $("#checked-3").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 500 + ' €')
      $("#checked-3").html("")
    }
  });
  $("#budget_module_4").click(function() {
    if ($("#budget_module_4")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 2000 + ' €')
      $("#checked-4").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 2000 + ' €')
      $("#checked-4").html("")
    }
  });
  $("#budget_module_5").click(function() {
    if ($("#budget_module_5")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 3200 + ' €')
      $("#checked-5").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 3200 + ' €')
      $("#checked-5").html("")
    }
  });
  $("#budget_module_6").click(function() {
    if ($("#budget_module_6")[0].checked == true) {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) + 7200 + ' €')
      $("#checked-6").html("√")
    } else {
      $("#budget_ammount").val(parseInt($("#budget_ammount").val()) - 7200 + ' €')
      $("#checked-6").html("")
    }
  });
}

$(window).on('resize', function(){
  resizeDiv();
  budgetAmountWidth();
});

var ready;
ready = function() {
  $(document).foundation();

  init();
};

$(document).on('page:update', ready);
