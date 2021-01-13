let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
 let card=document.querySelector(".card")
 let tableList=document.querySelector(".listName");

//console.log(allBtn);
//let title=card.children[0].children[1].children[0].textContent;
//console.log(title);
//let price=card.children[0].children[1].children[1].textContent;
//console.log(price);
let name1=document.getElementById("name1").textContent;
let name2=document.getElementById("name2").textContent;
let name3=document.getElementById("name3").textContent;
let name4=document.getElementById("name4").textContent;
let price1=document.getElementById("price1").textContent;
let price2=document.getElementById("price2").textContent;
let price3=document.getElementById("price3").textContent;
let price4=document.getElementById("price4").textContent;

////**btn 1 */
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
  let tr=document.createElement("tr")
  let td1=document.createElement("td")
  td1.appendChild(document.createTextNode(name1))
  tr.appendChild(td1)
  let td2=document.createElement("td")
  td2.appendChild(document.createTextNode(price1))
  tr.appendChild(td2)
  let td3=document.createElement("td")
  let icon=document.createElement("i")
  icon.className="fas fa-times-circle fa-2x"
  td3.appendChild(icon)
  tr.appendChild(td3)
  tableList.appendChild(tr)
})
////**btn 2 */
btn2.addEventListener("click",(e)=>{
    e.preventDefault();
  let tr=document.createElement("tr")
  let td1=document.createElement("td")
  td1.appendChild(document.createTextNode(name2))
  tr.appendChild(td1)
  let td2=document.createElement("td")
  td2.appendChild(document.createTextNode(price2))
  tr.appendChild(td2)
  let td3=document.createElement("td")
  let icon=document.createElement("i")
  icon.className="fas fa-times-circle fa-2x"
  td3.appendChild(icon)
  tr.appendChild(td3)
  tableList.appendChild(tr)
})

////****btn 3 */
btn3.addEventListener("click",(e)=>{
    e.preventDefault();
  let tr=document.createElement("tr")
  let td1=document.createElement("td")
  td1.appendChild(document.createTextNode(name3))
  tr.appendChild(td1)
  let td2=document.createElement("td")
  td2.appendChild(document.createTextNode(price3))
  tr.appendChild(td2)
  let td3=document.createElement("td")
  let icon=document.createElement("i")
  icon.className="fas fa-times-circle fa-2x"
  td3.appendChild(icon)
  tr.appendChild(td3)
  tableList.appendChild(tr)
})


//////////****bnt 4 */
btn4.addEventListener("click",(e)=>{
    e.preventDefault();
  let tr=document.createElement("tr")
  let td1=document.createElement("td")
  td1.appendChild(document.createTextNode(name4))
  tr.appendChild(td1)
  let td2=document.createElement("td")
  td2.appendChild(document.createTextNode(price4))
  tr.appendChild(td2)
  let td3=document.createElement("td")
  let icon=document.createElement("i")
  icon.className="fas fa-times-circle fa-2x"
  td3.appendChild(icon)
  tr.appendChild(td3)
  tableList.appendChild(tr)
})


tableList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fas")){
     if(confirm("Are you sure you want to delete?")){
        let parent=e.target.parentElement.parentElement
        tableList.removeChild(parent)
     }
        
    }
})