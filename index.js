let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log("button text is ",buttontext);
        if (buttontext == "X"){
            buttontext = "*";
            screenValue += buttontext;
            screen.innerText = screenValue;

        }

        else if(buttontext == "C"){
            screenValue = "";
            screen.innerText = screenValue;
        }

        else if(buttontext == "="){
            screenValue = eval(screenValue);
            
            screen.innerText = screenValue;

        }

        else if(buttontext == "Del"){
            screenValue = screenValue.slice(0,-1)
            screen.innerText = screenValue;
        }
        

        else{
            screenValue += buttontext;
            screen.innerText = screenValue;
        }

    })


    document.addEventListener("keydown",(e)=>{
        if(e.key == "Enter"){
            screenValue = eval(screenValue);
            screen.innerText = screenValue;
        }
        else if(e.key == "Backspace"){
            console.log(e.key)
        }
    })

}