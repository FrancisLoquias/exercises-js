function run() {
    var input = document.createElement('input');
        text = document.createElement('span'),
        output = document.getElementById('output');

    function firstNotRepeatedChar(n){
        var arra1 = n.split(''),
            result = '',
            ctr = 0;

        for (var x = 0; x < arra1.length; x++) {
            ctr = 0;

            for (var y = 0; y < arra1.length; y++) {
                if (arra1[x] === arra1[y]) {
                    ctr+= 1;
                }
            }

            if (ctr < 2) {
                result = arra1[x];
                break;
            }
        }
        return result;
    }

    output.innerHTML = '';
    output.appendChild(input);
    output.appendChild(text);

    input.onchange = function() {
        var inputText = input.value;

       text.innerHTML = firstNotRepeatedChar(inputText);
    };
}

run();