
//get original font sizes (global)
var originalFontSize_body = $('body').css('font-size');
var originalFontSize_h1 = $('h1').css('font-size');
var originalFontSize_h4 = $('h4').css('font-size');
var originalFontSize_btns = $('.btn').css('font-size');


//---------------------------------------------------
//increase all font sizes on screen by double
function increaseFontSize() {
    //get current font sizes
    var currentFontSize_body = $('body').css('font-size');
    var currentFontSize_h1 = $('h1').css('font-size');
    var currentFontSize_h4 = $('h4').css('font-size');
    var currentFontSize_btns = $('.btn').css('font-size');

    //increase font sizes (doubled each time)
    var newFontSize_body = parseInt(currentFontSize_body) * 2;
    var newFontSize_h1 = parseInt(currentFontSize_h1) * 2;
    var newFontSize_h4 = parseInt(currentFontSize_h4) * 2;
    var newFontSize_btns = parseInt(currentFontSize_btns) * 2;

    //set new font sizes
    $('body').css('font-size', newFontSize_body + "px");
    $('h1').css('font-size', newFontSize_h1 + "px");
    $('h4').css('font-size', newFontSize_h4 + "px");
    $('.btn').css('font-size', newFontSize_btns + "px");
}

//----------------------------------------------------
//change font type used to Comic Sans
function changeFontFamily() {
    $('body').css('font-family', '"Comic Sans MS", cursive, sans-serif'); //here, body also changes buttons, navbar and form style
    $('h1').css('font-family', '"Comic Sans MS", cursive, sans-serif');
}


//---------------------------------------------------
//reset back to original font sizes
function resetFontSize() {
    $('body').css('font-size', originalFontSize_body);
    $('h1').css('font-size', originalFontSize_h1);
    $('h4').css('font-size', originalFontSize_h4);
    $('.btn').css('font-size', originalFontSize_btns);
}


//---------------------------------------------------
//Onload will attach the two different functions to the respective images
function addImageListeners() {
    $('#mainImageDiv').on('click', mainImageReduceSize);
    $('.iphoneImagesDiv').on('click', iphoneImagesDisappear);
}

//Reduce size of main image on the left when clicked
function mainImageReduceSize() {
    $('.mainSection').css('width', '20vw');
    $('.mainSection').css('max-width', '25vw');
    $('#mainImageDiv').css('height', '50%');
}

//iPhone images disappear completely when clicked
function iphoneImagesDisappear() {
    $('.iphoneImagesDiv').css('display', 'none');
}

