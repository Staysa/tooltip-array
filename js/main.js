window.onload = function() {
    var str = document.getElementById('string').innerHTML.toLocaleLowerCase(),
        select = document.getElementById('select'),
        sum = document.getElementById('sum'),
        pattern = new RegExp(/\W/g);

    strClean = str.replace(pattern, '%');

    var strArr = strClean.split('%').filter(function(e){return e});

    var strUnique = strArr.filter(function(elem, i, strArr) {
            return strArr.indexOf(elem) === i;
        }
    );

    var option = '';

    for (var i = 0; i < strUnique.length; i++) {
        option = new Option(strUnique[i], strUnique[i]);
        select.appendChild(option);
    }

    var optionAll = document.getElementsByTagName('option');

    select.onchange = function () {
        for (var i = 0; i < optionAll.length; i++) {
            if (optionAll[i].selected) {
                var insetCompare = optionAll[i].value;
                var patternCompare = new RegExp(insetCompare, 'g');
                var compare = strArr.join(', ').match(patternCompare);
                sum.innerHTML = compare.length;
            }
        }
    };



    //REVERSE FOOBAR

    var button = document.getElementById('reverse');

    button.setAttribute('value', 'foobar');

    var value = button.value.toString(),
        butArr = value.split('');

    button.onclick = function() {
        var change = butArr.reverse().join('');
        button.setAttribute('value', change);
    };


};