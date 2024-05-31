let szobatipus;
let szobatipusnev;
let ellatas;
let ellatasnev;
let eletkor1;
let eletkor2;
let eletkor3;
let eletkor4;
let fiatalkoru1=0;
let fiatalkoru2=0;
let fiatalkoru3=0;
let fiatalkoru4=0;
let fiatalkoruszam;
let cboxert1=0;
let cboxert2=0;
let cboxert3=0;
let cboxert4=0;
let cboxszov1="";
let cboxszov2="";
let cboxszov3="";
let cboxszov4="";

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
        document.getElementById("elet2").value=null;
        document.getElementById("elet3").disabled=true;
        document.getElementById("elet3").value=null;
        document.getElementById("elet4").disabled=true;
        document.getElementById("elet4").value=null;
    
        }
    else if(vendegszam==2)
    {
        document.getElementById("elet1").disabled=false;
        document.getElementById("elet2").disabled=false;
        document.getElementById("elet3").disabled=true;
        document.getElementById("elet3").value=null;
        document.getElementById("elet4").disabled=true;
        document.getElementById("elet4").value=null;
    }
    else if(vendegszam==3)
        {
            document.getElementById("elet1").disabled=false;
            document.getElementById("elet2").disabled=false;
            document.getElementById("elet3").disabled=false;
            document.getElementById("elet4").disabled=true;
            document.getElementById("elet4").value=null;
        }
    else if(vendegszam==4)
        {
            document.getElementById("elet1").disabled=false;
            document.getElementById("elet2").disabled=false;
            document.getElementById("elet3").disabled=false;
            document.getElementById("elet4").disabled=false;
        }
 }
 function osszes()
    {
        if(document.getElementById("cbox4").checked==true)
        {
            cboxert4=2000;
            cboxszov4=" Teljes belépő "
            document.getElementById("cbox1").checked=false;
            document.getElementById("cbox2").checked=false;
            document.getElementById("cbox3").checked=false;
            document.getElementById("cbox1").disabled=true;
            document.getElementById("cbox2").disabled=true;
            document.getElementById("cbox3").disabled=true;


        }
        else{
            document.getElementById("cbox1").disabled=false;
            cboxszov4="";
            cboxert4=0;
            document.getElementById("cbox2").disabled=false;
            document.getElementById("cbox3").disabled=false;

        }
    }




function ellenorzes()
{


            let erkdatum=new Date(document.getElementById("erkezes").value);
            let tavdatum=new Date(document.getElementById("tavozas").value);
            let eltoltottido=(((+tavdatum)-(+erkdatum))/3600000)/24;
            let vendegszam=Number(document.getElementById("vszam").value);
            eletkor1=Number(document.getElementById("elet1").value);
            if(eletkor1<16){fiatalkoru1=1;}
            else{fiatalkoru1=0}
            eletkor2=Number(document.getElementById("elet2").value);
            if(eletkor2<16){fiatalkoru2=1;}
            else{fiatalkoru2=0}
            eletkor3=Number(document.getElementById("elet3").value);
            if(eletkor3<16){fiatalkoru3=1;}
            else{fiatalkoru3=0}
            eletkor4=Number(document.getElementById("elet4").value);
            if(eletkor4<16){fiatalkoru4=1;}
            else{fiatalkoru4=0}
            keres=document.getElementById("keres").value;
            fiatalkoruszam=fiatalkoru1+fiatalkoru2+fiatalkoru3+fiatalkoru4;

            if(ellatas!=undefined && szobatipus!=undefined && vendegszam<=4 && vendegszam>0 && erkdatum!=tavdatum &&!(fiatalkoruszam<2 && szobatipusnev=="Kétágyas + kettő pótágy"))
            {   
                
                if(document.getElementById("cbox1").checked==true)
                    {
                        cboxert1=800;
                        cboxszov1=" Beltéri medencék "
                    }
                else
                {
                    cboxert1=0;
                    cboxszov1="";   
                }

                    if(document.getElementById("cbox2").checked==true)
                        {
                            cboxert2=800;
                            cboxszov2=" Kültéri medencék "
                        }
                        else
                        {
                            cboxert2=0;
                            cboxszov2="";   
                        }
                        if(document.getElementById("cbox3").checked==true)
                            {
                                cboxert3=800;
                                cboxszov3=" Szauna belépő "
                            }
                            else
                            {
                                cboxert3=0;
                                cboxszov3="";   
                            }
                    

                    
                alert("Foglalás felvéve \n Érkezés időpontja: "+erkdatum.getFullYear()+"."+(erkdatum.getMonth()+1)+"."+erkdatum.getDate()+"\n"
                    +"Távozás időpontja: "+tavdatum.getFullYear()+"."+(tavdatum.getMonth()+1)+"."+tavdatum.getDate()+"\n"
                    +"Szoba típusa: "+szobatipusnev+"\n"
                    +"Vendégek száma: "+vendegszam+" fő"+"\n"
                    +"Ellátás: "+ellatasnev+"\n"
                    +"Egyéb kérés, kívánság: "+keres+"\n"
                    +"Össz költség: "+(szobatipus*eltoltottido+(cboxert1+cboxert2+cboxert3+cboxert4+ellatas)*vendegszam)+" Ft"+"\n"
                    +"Fürdő szolgáltatások:"+ cboxszov1+cboxszov2+cboxszov3+cboxszov4)
            }
            else{
                alert("Valamit nem/nem jól adtál meg. Ellenőrizd az adatokat, és próbálkozz újra");
            }

    
            


}