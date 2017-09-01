// ==UserScript==
// @name         sis data extrapolate
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       Dries Meerman
// @match        https://sis.hva.nl:8011/psc/S2PRD/EMPLOYEE/HRMS/c/SNS_MENU_FLD.SNS_SS_STD_RES_FL.GBL
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    var results = [];
    $('.ps_grid-cell.RESULT').each(function (item){
  results.push($(this).find('span').text());
});
    console.log('Unfiltered', results);

    var numbers = [];
    var floats = [];
    var rounded = [];
    for (var i = 0; i < results.length; i++){
        var res = results[i];
        var numb = parseInt(res);
        var float = parseFloat(res.replace(',', '.'));
        
        if (!isNaN(numb)) numbers.push(res);
        if (!isNaN(float)) {
            floats.push(float)
            rounded.push(Math.round(float))
        };
    }
    console.log('Numbers', numbers);

    var counted = {};
    var countFloats = {}
    var roundedCounted = {};
    numbers.map(_countNum);
    floats.map(_countFloat);
    rounded.map(createMapper(roundedCounted))
    
    function createMapper(arr){
     return function (num){
       arr[num] = arr[num] ? arr[num]+1 : 1;  
     }
    }

    function _countNum(number){
        counted[number] = counted[number] ? counted[number]+1 : 1;
    }
    function _countFloat(number){
        countFloats[number+''] = countFloats[number+''] ? countFloats[number+'']+1 : 1;
    }
    console.log('mapped num', counted);
    console.log('mapped float', countFloats);
    console.log('mapped rounded', roundedCounted);
})();