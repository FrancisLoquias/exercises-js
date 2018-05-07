function run() {
    var input = document.createElement('input'),
        text = document.createElement('span'),
        output = document.getElementById('output');

    function reverse(n) {
        var splitText,
            reverseText,
            joinText,
            stringVariable;

        stringVariable = n + '';
        splitText = stringVariable.split('');
        reverseText = splitText.reverse();
        joinText = reverseText.join('');

        return joinText;
    }

    output.innerHTML = '';
    output.appendChild(input);
    output.appendChild(text);

    input.onchange = function() {
        var inputText = input.value;

        text.innerHTML = reverse(inputText);
    };
}

run();