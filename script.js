function kerület()
{
    var A_oldal = parseFloat(document.getElementById("aOldal").value);
    var B_oldal = parseFloat(document.getElementById("bOldal").value);

     var eredmény= A_oldal * 2 + B_oldal * 2;

     if( !isNaN(parseInt(eredmény)))
    document.getElementById("válasz").innerText = "A kerülete " + eredmény + " cm."
}

function terület()
{
    var A_oldal = parseFloat(document.getElementById("aOldal").value);
    var B_oldal = parseFloat(document.getElementById("bOldal").value);

     var eredmény= A_oldal *  B_oldal;

     if( !isNaN(parseInt(eredmény)))
    document.getElementById("válasz").innerText = "A területe " + eredmény + " cm."
}

function felszín()
{
    var A_oldal = parseFloat(document.getElementById("TaOldal").value);
    var B_oldal = parseFloat(document.getElementById("TbOldal").value);
    var C_oldal = parseFloat(document.getElementById("TcOldal").value);
     var Teredmény= ( A_oldal *  B_oldal + A_oldal * C_oldal + B_oldal * C_oldal ) * 2;

     if( !isNaN(parseInt(Teredmény)))
    document.getElementById("Tválasz").innerText = "A felszíne " + Teredmény + " cm."
}

function térfogat()
{
    var A_oldal = parseFloat(document.getElementById("TaOldal").value);
    var B_oldal = parseFloat(document.getElementById("TbOldal").value);
    var C_oldal = parseFloat(document.getElementById("TcOldal").value);
     var Teredmény= A_oldal * B_oldal * C_oldal;

     if( !isNaN(parseInt(Teredmény)))
    document.getElementById("Tválasz").innerText = "A térfogata " + Teredmény + " cm."
}

function Hkerület()
{
    var A_oldal = parseFloat(document.getElementById("HaOldal").value);
    var B_oldal = parseFloat(document.getElementById("HbOldal").value);
    var C_oldal = parseFloat(document.getElementById("HcOldal").value);
     var Heredmény= A_oldal + B_oldal + C_oldal;

     if( !isNaN(parseInt(Heredmény)))
    document.getElementById("Hválasz").innerText = "A kerülete " + Heredmény + " cm."
}


function Hterület()
{
    var Alap = parseFloat(document.getElementById("HaOldal").value);
    var Ma = parseFloat(document.getElementById("Ma").value);
     var Heredmény= Alap *  Ma / 2;

     if( !isNaN(parseInt(Heredmény)))
    document.getElementById("Hválasz").innerText = "A területe " + Heredmény + " cm."
}

function Pfelszín()
{
    var Alap = parseFloat(document.getElementById("PaOldal").value);
    var Ma = parseFloat(document.getElementById("Ma").value);
    var Mo = parseFloat(document.getElementById("Mo").value);
     var Peredmény= Alap * Alap + ( Alap * Mo ) * 4 ;

     if( !isNaN(parseInt(Peredmény)))
    document.getElementById("Pválasz").innerText = "A felszíne " + Peredmény + " cm."
}

function Ptérfogat()
{
    var Alap = parseFloat(document.getElementById("PaOldal").value);
    var Ma = parseFloat(document.getElementById("PMa").value);
     var Peredmény= ( Alap * Alap  * Ma ) / 3 ;

     if( !isNaN(parseInt(Peredmény)))
    document.getElementById("Pválasz").innerText = "A térfogata " + Peredmény + " cm."
}