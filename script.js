$(document).ready(function() {
  const AMAZON_URL = "https://www.amazon.com/dp/";
  const AMAZON_AFFILIATE_ID = "ephblog-20";

  var questions = questionnaire.questions;
  var currentPage = 0;

  var currentQuestion = 0;
  var selections = [];

  for(var i = 0; i < questions.length; i++){
      selections[questions[i].id] = [];
  }

  showPage();

  $("#question").html(questions[0].question);

  $("#takethequiz").click(function(event){
    currentPage += 1;
    showPage();
  });

  // let the user go to the next question
  $("#next-button").click(function(event){
    currentQuestion = currentQuestion + 1;
    showPage();
  });

  // let the user go to the previous question
  $("#previous-button").click(function(event){
     currentQuestion = currentQuestion - 1;
     showPage();
  });

  $("#options").click(function(event){
    var idCurrent = questions[currentQuestion].id;
    selections[idCurrent] = [];
    $('input:checked').each(function() {
      selections[idCurrent].push($(this).attr('value'));
    });
    showProducts();
  })

  function showPage(){
    if(currentPage == 0){
      showEntryPage();
    }
    else{
      showQuestions();
    }
  }

  function showEntryPage() {
    $('#questions').hide();
    $('#intro').show();
    $('#title').html(questionnaire.introduction.title);
    $('#shortdescription').html(questionnaire.introduction.shortdescription);
    $('#description').html(questionnaire.introduction.description);
  }

  function showQuestions(){
    $('#questions').show();
    $('#intro').hide();
    showQuestion();
    showOptions();
    showButtons();
    showProducts();
  }

  function showQuestion() {
    $("#question").html(questions[currentQuestion].question);
  }

  function showOptions(){
    $("#options").empty();
    for(var key in questions[currentQuestion].options){
        var idCurrent = questions[currentQuestion].id;
        var isChecked = "";
        // key holds the value stored in arrays
        if(selections[idCurrent].indexOf(key) >= 0){
          isChecked = "checked";
        }
        var isMultiple = questions[currentQuestion].multiple;
        // ternary expression (3 parts)
        var type = isMultiple ? "checkbox" : "radio";
        $("#options").append(`<div class="funkyradio-primary"><input type="${type}" ${isChecked} name="options" value="${key}" id="${key}"><label for="${key}"> ${questions[currentQuestion].options[key]}</label></div> `);
    }
  }

  function showButtons(){
    if (currentQuestion == 0){
      $("#previous-button").hide();
    }
    else {
      $("#previous-button").show();
    }

    if (currentQuestion == questions.length - 1){
      $("#next-button").hide();
    }
    else {
      $("#next-button").show();
    }
  }

  function showProducts() {
    if(currentQuestion == questions.length - 1){
      $("#product-title").html(questionnaire.introduction.finalproducts);
    }
    else{
      $("#product-title").html(questionnaire.introduction.productssofar);
    }
    $('#product-table tbody').empty();
    var selected_products = [];
    for(var i in products){
      var isSelectable = true;
      for(var key in selections){
          isSelectable = isSelectable && selections[key].every(elem => products[i].attributes[key].indexOf(elem) > -1);
      }
      if(isSelectable){
        selected_products.push(products[i]);
      }
    }
    for(var i in selected_products){
        $('#product-table > tbody:last-child').append(`<tr> <td style="text-align:center;"> <img src = "${selected_products[i].image}" height = "95px">  </td> <td> <a href="${AMAZON_URL}${selected_products[i].id}?tag=${AMAZON_AFFILIATE_ID}" target="_blank">${selected_products[i].name}</a> </td> </tr>`);
    }
  }
});
