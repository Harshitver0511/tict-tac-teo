let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let msg2=document.querySelector("#msg2");


let turn0=true;
 
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

let count=0;

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame =() =>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    count=0;
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box click");
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        count++;
        console.log(count);
        draw(count);

    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner= (winner) =>{
    msg.innerText=`Congratulation, Winner is${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const draw =(co) =>{
    if(co==9){
        msg2.classList.remove("hide1");
        msg.innerText="";
        msgcontainer.classList.remove("hide");
        count=0;
        
    }
    
}

const checkwinner = () =>{
    for(pattern of winpattern){
        
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2  && posval2==posval3){

                console.log("winner",posval1);
                showwinner(posval1);
                count=0;

            } 
        }
    }
};

newgamebtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);
