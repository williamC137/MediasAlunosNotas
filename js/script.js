function CalculateAverageNotes(){
    let input_verication_first_inbox = document.getElementById("first_inbox");
    let input_verication_second_inbox = document.getElementById("second_inbox");
    let verification_inbox = new Boolean(true);
    let average_clean = document.getElementById("average");
    average_clean.innerText="";

    if(input_verication_first_inbox.value == ""){
        document.getElementById("invalid_value_first").innerHTML = "Invalid value";
        verification_inbox = false;
    }else{
        document.getElementById("invalid_value_first").innerText = "";
    }if(input_verication_second_inbox.value == ""){
        document.getElementById("invalid_value_second").innerHTML = "Invalid value";
        verification_inbox = false;
    }else{
        document.getElementById("invalid_value_second").innerText = "";
    }
    if(verification_inbox){
        let first_inbox_value = parseInt(document.getElementById("first_inbox").value);
        let second_inbox_value = parseInt(document.getElementById("second_inbox").value);   
        let verification_value = new Boolean(true);
        if(first_inbox_value>10 || first_inbox_value < 0){
            document.getElementById("invalid_value_first").innerHTML = "Invalid value";
            verification_value = false;
        }else{
            document.getElementById("invalid_value_first").innerText = "";
        }if(second_inbox_value>10 || second_inbox_value < 0){
            document.getElementById("invalid_value_second").innerHTML = "Invalid value";
            verification_value = false
        }else{
            document.getElementById("invalid_value_second").innerText = "";
        }
        if(verification_value){
            let average_grades = (first_inbox_value + second_inbox_value)/2;
            document.getElementById("average").innerHTML = "Avarage:" + average_grades.toFixed(2);
            if(average_grades < 6){
                document.getElementById("grade_third").innerHTML = "<div id='third_completed'><p class='title_inbox'>Third Note</p><input class='inbox_text' id='third_inbox' type='number' placeholder='Enter the grade'><p class='invalid_value' id='invalid_value_third'></p></div>"
                let button_send = document.getElementById("button_send")
                button_send.parentElement.removeChild(button_send)
                document.getElementById("buttons_send").innerHTML = "<button id='new_button_send' onmousemove='ChangeColorNewButtonSend()' onmouseout='ReturnOriginColorNewButtonSend()' onclick='ReceiveThirdAmount()'>Send</button>"
            }else{
                document.getElementById("grade_third").innerHTML = "<div id='third_completed'></div>"
            }
        }
    }
}
function CleanReset(){
    document.getElementById("average").innerText="";
    document.getElementById("invalid_value_first").innerText="";
    document.getElementById("invalid_value_second").innerText="";
    document.getElementById("first_inbox").value = "";
    document.getElementById("second_inbox").value = "";
    let clean_third_inbox = document.getElementById("third_completed")
    clean_third_inbox.parentElement.removeChild(clean_third_inbox)
    document.getElementById("buttons_send").innerHTML = "<button class='buttons' id='button_send' onmouseover='ChangeColorButtonSend()' onmouseout='ReturnOriginColorButtonSend()' onclick='CalculateAverageNotes()' >Send</button>"
}
function ReceiveThirdAmount(){
    let input_verication_first_inbox = document.getElementById("first_inbox");
    let input_verication_second_inbox = document.getElementById("second_inbox");
    let input_verication_third_inbox = document.getElementById("third_inbox");
    let verification_third_inbox = new Boolean(true);
    if(input_verication_first_inbox.value == ""){
        document.getElementById("invalid_value_first").innerHTML = "Invalid value";
        verification_third_inbox = false;
    }else{
        document.getElementById("invalid_value_first").innerText = "";
    }if(input_verication_second_inbox.value == ""){
        document.getElementById("invalid_value_second").innerHTML = "Invalid value";
        verification_third_inbox = false;
    }else{
        document.getElementById("invalid_value_second").innerText = "";
    }
    if(input_verication_third_inbox.value == ""){
        document.getElementById("invalid_value_third").innerHTML = "Invalid value";
        verification_third_inbox = false;
    }else{
        document.getElementById("invalid_value_third").innerText = "";
    }
    if(verification_third_inbox){
        let third_inbox_value = parseInt(document.getElementById("third_inbox").value);  
        let first_inbox_value = parseInt(document.getElementById("first_inbox").value);
        let second_inbox_value = parseInt(document.getElementById("second_inbox").value); 
        let verification_third_value = new Boolean(true);
        if(third_inbox_value>10 || third_inbox_value < 0){
            document.getElementById("invalid_value_third").innerHTML = "Invalid value";
            verification_third_value = false;
        }else{
            document.getElementById("invalid_value_third").innerText = "";
        }
        if(first_inbox_value>10 || first_inbox_value < 0){
            document.getElementById("invalid_value_first").innerHTML = "Invalid value";
            verification_third_value = false;
        }else{
            document.getElementById("invalid_value_first").innerText = "";
        }if(second_inbox_value>10 || second_inbox_value < 0){
            document.getElementById("invalid_value_second").innerHTML = "Invalid value";
            verification_third_value = false
        }else{
            document.getElementById("invalid_value_second").innerText = "";
        }
        if(verification_third_value){
            let new_average_grades = (first_inbox_value + second_inbox_value + third_inbox_value)/3;
            document.getElementById("average").innerHTML = "Avarage:" + new_average_grades.toFixed(2);
        }
    }
}