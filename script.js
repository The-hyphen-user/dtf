
var lastSelected = "reg";
function costSelect() {
    const input = document.getElementById('cost');
    input.focus();
    input.select();
}

function onResetChange() {
    if ((document.getElementById("dest").value) == 300000) {
        //console.log("wut: ", document.getElementById("dest").value);
        //console.log("dfcgujvh")
    }
    //console.log(document.getElementById("dest").value);
    //document.getElementById("size").value = NaN;
    onChange()
}

function onChange() {
    var size = parseFloat(document.getElementById("size").value);
    var x = document.getElementById("dest").value;
    //console.log("x: ", x)
    if (x == 300000000) {
        lastSelected = "max"
        //console.log("setting to max")
    } else if (lastSelected == "max") {
        document.getElementById("size").value = NaN;
        size = NaN;
        lastSelected = "reg"
        //console.log("setting to reg")
        //console.log("here i am")
    }
    //console.log("value: ", x)
    var iskpm3 = parseFloat(document.getElementById("dest").value);
    //console.log(iskpm3)

    if (iskpm3 == 300000000) {
        size = 300000
        document.getElementById("size").value = "300000";
        document.getElementById("short-hand-size").innerHTML = "300 K";
    } else if (isNaN(size)) {
        document.getElementById("short-hand-size").innerHTML = "";
        size = 0;
    } else if (size == 0) {
        let shortHandSize = shortHand(size);
        document.getElementById("short-hand-size").innerHTML = "0";
    } else if (size > 0 && size <= 300000) {
        let shortHandSize = shortHand(size);
        document.getElementById("short-hand-size").innerHTML = shortHandSize;
    } else {
        document.getElementById('size').value = 300000
        size = 300000;
        let shortHandSize = shortHand(size);
        document.getElementById("short-hand-size").innerHTML = shortHandSize;
    }
    var coll = parseFloat(document.getElementById("coll").value);
    if (isNaN(coll)) {
        document.getElementById("short-hand-coll").innerHTML = "";
        coll = 0;
    } else if (coll == 0) {
        let shortHandColl = shortHand(coll);
        document.getElementById("short-hand-size").innerHTML = "0";
    } else if (coll > 0 && coll <= 25000000000) {
        let shortHandColl = shortHand(coll);
        document.getElementById("short-hand-coll").innerHTML = shortHandColl;
    } else {
        document.getElementById('coll').value = 25000000000
        coll = 25000000000;
        let shortHandColl = shortHand(coll);
        document.getElementById("short-hand-coll").innerHTML = shortHandColl;
    }

    var cost;
    if (iskpm3 == 300000000) {
        cost = (iskpm3 + (coll * 0.01))
    } else {
        cost = ((iskpm3 * size) + (coll * 0.01))
    }
    cost = Math.round(cost)
    //console.log("digits: ", ". Cost: ", cost)
    let digits = cost.toString().length;

    //console.log("digits: ", digits, ". Cost: ", cost)
    let numOfDigitsBeforeRounding = 3;
    //change this ^^^ to change how many numbers before all the zeros
    if (digits > numOfDigitsBeforeRounding) {
        let num = (Math.pow(10, (digits - numOfDigitsBeforeRounding)));
        //console.log("num: ", num)
        cost /= num;
        cost = Math.round(cost);
        cost *= num;
    }
    if (cost < 25000000) {
        cost = 25000000;
    }
    document.getElementById("cost").value = cost;
    let shortHandCost = shortHand(cost);

    document.getElementById("short-hand-cost").innerHTML = shortHandCost;
}


function shortHand(number) {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1000000) {
        number /= 1000;
        Math.round(number);
        number = fixIt(number);
        let numToString = number.toString();
        let endFix = " K"
        return (numToString + " " + endFix);
    } else if (number >= 1000000 && number < 1000000000) {
        number /= 1000000;
        Math.round(number);
        number = fixIt(number);
        let numToString = number.toString();
        let endFix = " M"
        return (numToString + " " + endFix);
    } else if (number >= 1000000000 && number < 1000000000000) {
        number /= 1000000000;
        Math.round(number);
        number = fixIt(number);
        let numToString = number.toString();
        let endFix = " B"
        return (numToString + " " + endFix);
    } else if (number >= 1000000000000 && number < 1000000000000000) {
        number /= 1000000000000;
        Math.round(number);
        number = fixIt(number);
        let numToString = number.toString();
        let endFix = " T"
        return (numToString + " " + endFix);
    }
    return number;
}


function fixIt(number) {
    if (number < 10) {
        number = number.toFixed(2)
    } else if (number < 100) {
        number = number.toFixed(1)
    } else if (number >= 100) {
        number = number.toFixed(0)
    }
    return number;
}

   // <span class="catch-phrase">you contract it, we truck it</span>


/*
<img src="1-4.jpg" alt="courier contract 1/4" class="img" width="200">
<img src="4-4.jpg" alt="courier contract 4/4"  class="img" width="200">
 */