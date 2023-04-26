function nanoBotShuttingZone()//DO NOT CHANGE THIS OR ENGINE WILL EXPLODE)
{
    let NanoBotX = 0 //By using let, you declare a variable that exist only in the code block, so it modified only the nanobot in the shutting zone
    let NanoBotY = 0 

    console.log(NanoBotX); // Output: 0
    console.log(NanoBotY); // Output: 0
}



function nanoBot()
{
    var NanoBotX = 5;
    let NanoBotY = 10;

    console.log(NanoBotX); // Output: 5
    console.log(NanoBotY); // Output: 10
    nanoBotShuttingZone()
    console.log(NanoBotX); // Output: 20
    console.log(NanoBotY); // Output: 10

}

module.exports = nanoBot;