const res = document.querySelector("#res");
const buttons = document.querySelectorAll(".cal button");

console.log(buttons);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(value >= 0 || value === "."){
            console.log(value);
            if(!(value === "." && (value === uV || res.innerText === ""))){
                res.innerText += value
            }
        }
        else if(value === "="){
            res.innerText = eval(res.innerText.replace(/x/g, "*")).toFixed(2).replace(/\.?0+$/, ''); 
        }
        else if(value === "C"){
            res.innerText = "";
        }
        else if(value === "<"){
            res.innerText = res.innerText.substring(0, res.innerText.length - 1);
        }
        else{
            console.log("Op: " + value);
            if(!(res.innerText === "") && !(uV === value)){
                res.innerText += value
            }
        }

        uV = value;
    })
})