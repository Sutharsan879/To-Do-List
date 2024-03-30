const inputbox=document.getElementById("input-box");
const addbox=document.getElementById("list-container");

function addbtn()
{
    if(inputbox.value==='')
    {
        alert("Write Something here..");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        addbox.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}

addbox.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata()
{
    localStorage.setItem("data",addbox.innerHTML);
}
function listitem()
{
    addbox.innerHTML=localStorage.getItem("data");
}
listitem();