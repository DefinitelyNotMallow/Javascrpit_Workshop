function battery(list) 
{
    let found = false;
    list.forEach(element => {
        if (element !== 1){
            console.log("Found !")
            found = true;
        }
    });
    if (!found)
        console.log("ALL THESE BATTERIES ARE THE SAME !!!!!!")
}

module.exports = battery;