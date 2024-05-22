let szobatipus;
let szobatipusnev;
let ellatas;
let ellatasnev;
let eletkor1;
let eletkor2;
let eletkor3;
let eletkor4;
let furdo=0;
function szoba1()
{
    szobatipus=9000;
    szobatipusnev="Egyágyas";
}
function szoba2()
{
    szobatipus=15000;
    szobatipusnev="Kétágyas";
}
function szoba3()
{
    szobatipus=18000;
    szobatipusnev="Kétágyas + egy pótágy";
}
function szoba4()
{
    szobatipus=21000;
    szobatipusnev="Kétágyas + kettő pótágy";
}
function ellatas1()
{
    ellatas=900;
    ellatasnev="Reggeli";
}
function ellatas2()
{
    ellatas=2900;
    ellatasnev="Félpanzió";
}
function ellatas3()
{
    ellatas=4900;
    ellatasnev="Teljes panzió";
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

            if(ellatas!=undefined && szobatipus!=undefined && vendegszam<=4 && vendegszam>0 && erkdatum!=tavdatum)
            {   
                alert("Foglalás felvéve \n Érkezés időpontja: "+erkdatum.getFullYear()+"."+(erkdatum.getMonth()+1)+"."+erkdatum.getDate()+"\n"
                    +"Távozás időpontja: "+tavdatum.getFullYear()+"."+(tavdatum.getMonth()+1)+"."+tavdatum.getDate()+"\n"
                    +"Szoba típusa: "+szobatipusnev+"\n"
                    +"Vendégek száma: "+vendegszam+" fő"+"\n"
                    +"Ellátás: "+ellatasnev+"\n"
                    +"Egyéb kérés, kívánság: "+keres)
            }
            else{
                alert("Valamit nem/nem jól adtál meg. Ellenőrizd az adatokat, és próbálkozz újra")
            }

    
            


}