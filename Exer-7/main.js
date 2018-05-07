function displayRandomImage() {
    var theImages = [{
        src: 'https://www.basket4us.com/blog/wp-content/uploads/2017/10/lebron-james.jpg',
        width: '240',
        height: '160'
    }, {
        src: 'http://images.performgroup.com/di/library/sporting_news/dd/4d/lebron-james-ftr-getty-jpg_1pjppaf9lr4011oxf9qw0wbxgl.jpg',
        width: '320',
        height: '195'
    }, {
        src: 'https://cavsnation.com/wp-content/uploads/2017/04/lebron-james-18.jpg',
        width: '500',
        height: '343'
    }];

    var preBuffer = [];
        for (var i = 0, j = theImages.length; i < j; i++) {
            preBuffer[i] = new Image();
            preBuffer[i].src = theImages[i].src;
            preBuffer[i].width = theImages[i].width;
            preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min,max) {

        //  return Math.floor(Math.random() * (max - min + 1)) + min;
        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img'),
    l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image
    document.body.appendChild(newImage);
}