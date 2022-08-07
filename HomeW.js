let bttn = document.getElementById("resultButton");
let bttnFr = document.getElementById("FahrenheitButton");
let bttnTicket = document.getElementById("TicketButton");

 // ----------Task 1 

function ColBotlle() {
    let lWall = document.getElementById("lengthWall").value;
    let wWall = document.getElementById("weighthWall").value;
    let hWall = document.getElementById("heightWall").value;
    let isCheck = true;
    let arreaWall = 0;
    
        if  (lWall <= 0 || lWall > 1000 ){
            isCheck = false;
            alert("Значення довжина повинно бути в межах він 1 до 1000.");
        }  

        if  (wWall <=0 || wWall > 1000){
            isCheck = false;
            alert("Значення ширина повинно бути в межах він 1 до 1000.");
        }  

        if  (hWall <=0 || hWall > 1000){
            isCheck = false;
            alert("Значення висота повинно бути в межах він 1 до 1000.");
        }  

        if (isCheck==true){
            arreaWall = (lWall*2+wWall*2)*hWall;
            document.getElementById("paintBotlle").value = Math.ceil(arreaWall/16);
        }else{
            document.getElementById("paintBotlle").value = 0;
        }
        
}

// ----------Task 2

function CtoF() {
    let grCel = document.getElementById("grCelsius").value;

    if(grCel >= -273  && !isNaN(grCel)){
        document.getElementById("grFahrenheit").value =  grCel*1.8;
    }
    else{
        document.getElementById("grFahrenheit").value = 0;
        alert("Потрбіно вносити тільки цифрові значення!");
    }

}

// ----------Task 3

function TicketCheck() {
    let TicketNumber = document.getElementById("Ticket").value;
    let firstNum = 0;
    let secondNum = 0;
     
    if(!isNaN(TicketNumber)){
        
        firstNum = parseInt(TicketNumber[0])+parseInt(TicketNumber[1])+parseInt(TicketNumber[2]);
        secondNum = parseInt(TicketNumber[3])+parseInt(TicketNumber[4])+parseInt(TicketNumber[5]);
       // console.log(firstNum);
       // console.log(secondNum);
        if (firstNum==secondNum){
            document.getElementById("bCheck").value =  "Квиток щасливий.";
        }else
        {
            document.getElementById("bCheck").value =  "Нажаль ні.";
        }
        
    }
    else{
        document.getElementById("bCheck").value = "Результат невідомий.";
        alert("Потрібно вносити тільки цифри . ");
    }

}

bttn.onclick = ColBotlle;
bttnFr.onclick = CtoF;
bttnTicket.onclick = TicketCheck; 