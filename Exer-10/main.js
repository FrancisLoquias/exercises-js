function run() {
    Object.objsize = function(Myobj) {
        var osize = 0, key;
        for (key in Myobj) {
            if (Myobj.hasOwnProperty(key))
                osize++;
        }
        return osize;
    };

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    var objsize = Object.objsize(student);
    document.getElementById("output").innerHTML = objsize;
}