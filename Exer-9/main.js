    window.onload = getBoldItems();

    // Collect all <strong> tags
    function getBoldItems() {
        boldItems = document.getElementsByTagName('strong');
    }
    // all bold tags and change color
    function highlight() {
        for (var i = 0; i < boldItems.length; i++) {
            boldItems[i].style.color = '#f4021a';
        }
    }

    // On mouse out highlighted words become black
    function returnNormal() {
        for (var i = 0; i < boldItems.length; i++) {
            boldItems[i].style.color = '#000';
        }
    }
