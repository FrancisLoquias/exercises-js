function textTruncate () {
    var textsInput = document.getElementById('inputTexts').innerHTML,
        chopedTexts = textsInput.split('<br>'),
        output = document.getElementById('output');

        for (var i = 0; i < chopedTexts.length; i++) {
             var pElement = document.createElement('p'),
                textNode = document.createTextNode(chopedTexts[i]);
                pElement.append(textNode);

                output.append(pElement);
        }


}