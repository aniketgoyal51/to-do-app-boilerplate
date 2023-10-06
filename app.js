var listofitems=[]

const btn=document.getElementById("button")
const input=document.getElementById("input")
const tdl=document.getElementById("todolist")

btn.onclick = click;

function click(){
    listofitems.push(input.value);
    console.log(listofitems)
    input.value="";
    showList()
}

function showList(){
    tdl.innerHTML = " ";

    listofitems.forEach(function (n,i){  //n == element , i == index
        tdl.innerHTML+= `<li>${ n }<a onclick='editItem(${ i })'>Edit </a> <a onclick='deleteItem(${ i })'>&times | </a></li>`  // &times is cross sign
    });
}

function deleteItem(i){
    listofitems.splice(i,1);
    showList()
}

function editItem(i){
    var newItem=prompt("Pease Enter your new value")
    listofitems.splice(i,1,newItem);
    showList()
}