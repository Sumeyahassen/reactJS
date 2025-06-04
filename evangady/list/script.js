let formlist = document.querySelector("#formlist");
const list=["abebe","kebede","alemu","seada"];
let ulitem=document.createElement("ul");
list.forEach(
    (item)=>{
        let liitem=document.createElement("li");
        liitem.textContent=item;
        ulitem.appendChild(liitem);
    }
);
formlist.appendChild(ulitem);