
let input=document.querySelector('#input');
let list=document.querySelector('#list');

input.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addItem(this.value)
        this.value=""
    }
})

let addItem=(input)=>{
    let listItem=document.createElement("li");
    listItem.innerHTML=`${input}<i></i>`;

    

    list.appendChild(listItem);}
