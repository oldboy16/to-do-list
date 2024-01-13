let elInp = document.querySelector('.inp')
let elList = document.querySelector('.list')
let elUIinp = document.querySelector('.u__inp')
let data = []

if(window.localStorage.getItem('locData')){
    data = JSON.parse(window.localStorage.getItem('locData'))
}

function fnAdd(){
    data.push(elInp.value)
    window.localStorage.setItem('locData', JSON.stringify(data))
    elInp.value = ''
    fnMapper(JSON.parse(window.localStorage.getItem('locData')))
}

fnMapper(JSON.parse(window.localStorage.getItem('locData')))

function fnMapper(data){
    elList.innerHTML = ''
    data.map((item,index)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="hero__inner">
            <p>${item}</p>
            <button class="btn btn-danger" onclick="fnDel(${index})">d</button>
            <button class="btn btn-info" onclick="fnUpdate(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">u</button>
        </div>
        `
        elList.appendChild(newLi)
    })
}


function fnDel(id){
    console.log(id);
    let data = JSON.parse(window.localStorage.getItem('locData'))
    let filData = data.filter((item,index)=> index != id)
    window.localStorage.setItem('locData', JSON.stringify(filData))
    fnMapper(JSON.parse(window.localStorage.getItem('locData')))
}


function fnUpdate(id){
    window.localStorage.setItem('id',id)
    elUIinp.value = JSON.parse(window.localStorage.getItem('locData'))[id]
}

function fnAddUpdated(){
    let data = JSON.parse(window.localStorage.getItem('locData'))
    data[window.localStorage.getItem('id')] = elUIinp.value
    console.log(data);
    window.localStorage.setItem('locData',JSON.stringify(data))
    fnMapper(JSON.parse(window.localStorage.getItem('locData')))
}