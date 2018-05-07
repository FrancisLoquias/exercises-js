function run() {
    var input = document.createElement('input');
        text = document.createElement('span'),
        output = document.getElementById('output');

    function alphabeticalOrder(n) {
            var splitText,
                sortText,
                joinText,
                stringVariable;

            stringVariable = n + '';
            splitText = stringVariable.split('');
            sortText = splitText.sort();
            joinText = sortText.join('');

            return joinText;

        }

    output.innerHTML = '';
    output.appendChild(input);
    output.appendChild(text);

    input.onchange = function() {
        var inputText = input.value;

        text.innerHTML = alphabeticalOrder(inputText);
    };
}

run();