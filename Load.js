function Load ()
{
    var l = []
    var sw = false;
    for (let i = 0; i < 10000; i++) {
        l.push(1);
    }
    l.forEach((n, i) => {
        var v = Math.round(Math.random());
        if (v == 1 && sw == false) {
            l[i] = "1";
            sw = true;
        }
    })
    if (!sw) {
        l.push("1");
    }
    return l;
}

module.exports = Load;