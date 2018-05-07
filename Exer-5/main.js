function run() {
    var numberBases = document.getElementById('bases').value,
        numberExponent = document.getElementById('exponent').value;

        document.getElementById('output').innerHTML = Math.pow(numberBases,
            numberExponent );

    }

