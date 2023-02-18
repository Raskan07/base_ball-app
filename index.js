let Homedefult = document.getElementById("home_defult")
let Guestdefult = document.getElementById("guest_defult")

console.log(Homedefult,Guestdefult)

let count = 0
let count_u =0

function add1(){
    count = count + 1
    Homedefult.textContent = count
}

function add2(){
    count = count + 2
    Homedefult.textContent = count
}

function add3(){
    count = count + 3
    Homedefult.textContent = count
}

function add_1(){
    count_u = count_u + 1
    Guestdefult.textContent = count_u
}
function add_2(){
    count_u = count_u + 2
    Guestdefult.textContent = count_u
}
function add_3(){
    count_u = count_u + 3
    Guestdefult.textContent = count_u
}
