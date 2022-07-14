const results = document.getElementById('graph')
const roll = document.getElementById('roll')

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


roll.addEventListener('click', diceRoll)

function diceRoll(){
    const count = [0,0,0,0,0,0,0,0,0,0,0]
    let access = 0
    let countRoll = 1
    results.innerHTML = ""
    while(countRoll <= 1000){
        let dice_1 = random(1,6)
        let dice_2 = random(1,6)
        let sum = dice_1 + dice_2
        count[sum-2] = count[sum-2] + 1
        countRoll += 1
    }
    for(let i = 2; i < count.length + 2; i++){
        const div = document.createElement('div')
        div.innerText = `${i}  :  ${count[access]}`
        div.style.width = `${count[access] * 2}px`
        div.style.backgroundColor = "red"
        results.appendChild(div)
        access += 1
    }
    console.log(count)
    return count
}


