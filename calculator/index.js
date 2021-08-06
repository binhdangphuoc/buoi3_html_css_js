const numbers = document.getElementsByClassName('val');
const result = document.getElementById('result');
check = false
for(let num of numbers){
    num.addEventListener('click',function(){
        if(check) {
            result.innerHTML = this.value
            check=false
        }else result.innerHTML += this.value
        
    });
}

function tinhtoan(){
    let list = result.innerHTML
    console.log(list)
    let ans = list + " = " + eval(list)
    console.log(ans)
    this.result.innerHTML=ans
    check = true
}
function AC(){
    this.result.innerHTML=""
    check=false
}
function Del(){
    if(check) {
        this.result.innerHTML=""
        check=false
        return
    }
    let list = this.result.innerHTML
    list = list.slice(0,list.length-1)
    this.result.innerHTML = list
}
function sin(){
    let number = result.innerHTML
    let ans = Math.sin(number)
    result.innerHTML = ans
    check=true
}
function cos(){
    let number = result.innerHTML
    let ans = Math.cos(number)
    result.innerHTML = ans
    check=true
}
