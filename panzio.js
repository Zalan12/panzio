let szobatipus;
let ellatas;
let eletkor1;
let eletkor2;
let eletkor3;
let eletkor4;
let furdo=0;
let f1=0;
function szoba1()
{
    szobatipus=9000;
}
function szoba2()
{
    szobatipus=15000;
}
function szoba3()
{
    szobatipus=18000;
}
function szoba4()
{
    szobatipus=21000;
}
function ellatas1()
{
    ellatas=900;
}
function ellatas2()
{
    ellatas=2900;
}
function ellatas3()
{
    ellatas=4900;
}


function elerheto()
 {
    let vendegszam=Number(document.getElementById("vszam").value);
    if(vendegszam==1)
        {document.getElementById("elet1").disabled=false;
        document.getElementById("elet2").disabled=true;
        document.getElementById("elet3").disabled=true;
        document.getElementById("elet4").disabled=true;
    
        }
    else if(vendegszam==2)
    {
        document.getElementById("elet1").disabled=false;
        document.getElementById("elet2").disabled=false;
        document.getElementById("elet3").disabled=true;
        document.getElementById("elet4").disabled=true;
    }
    else if(vendegszam==3)
        {
            document.getElementById("elet1").disabled=false;
            document.getElementById("elet2").disabled=false;
            document.getElementById("elet3").disabled=false;
            document.getElementById("elet4").disabled=true;
        }
    else if(vendegszam==4)
        {
            document.getElementById("elet1").disabled=false;
            document.getElementById("elet2").disabled=false;
            document.getElementById("elet3").disabled=false;
            document.getElementById("elet4").disabled=false;
        }
 }

function ellenorzes()
{  
    let erkdatum=new Date(document.getElementById("erkezes").value);
    let tavdatum=new Date(document.getElementById("tavozas").value);
    let eltoltottido=(((+tavdatum)-(+erkdatum))/3600000)/24;
    let vendegszam=Number(document.getElementById("vszam").value);
    eletkor1=Number(document.getElementById("elet1").value);
    eletkor2=Number(document.getElementById("elet2").value);
    eletkor3=Number(document.getElementById("elet3").value);
    eletkor4=Number(document.getElementById("elet4").value);
    keres=document.getElementById("keres").value;
    alert(furdo)


}