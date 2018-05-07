function run() {
    var input = document.createElement('input');
    text = document.createElement('span'),
    output = document.getElementById('output');

    function testPrime(n) {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return true;
                }
            }
            return false;
        }
    }

    output.innerHTML = '';
    output.appendChild(input);
    output.appendChild(text);

    input.onchange = function() {
        var inputText = input.value;

        text.innerHTML = testPrime(inputText);
    };
}