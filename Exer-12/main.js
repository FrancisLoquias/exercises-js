function startTime() {
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(),
        ap = ( h < 12 ) ? 'AM' : 'PM';

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('output').innerHTML = h + ':'
         + m + ':' + s + ':' + ap;

    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    };// add zero in front of numbers < 10
    return i;
}
