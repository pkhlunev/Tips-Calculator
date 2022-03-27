const vybor = document.querySelector('.vybor');
const one = document.querySelector('.ab');
const two = document.querySelector('.abc')
const button = document.querySelector('.count2')
button.addEventListener('click', convert)
const button2 =document.querySelector('.sbros')
button2.addEventListener('click', deleteall)
const totalmoney = document.querySelector('.totalmoney');
const extramoney = document.querySelector('.extramoney')
function deleteall(event){
document.getElementByClassName('abc')[0].value=''
document.getElementByClassName('ab')[0].value=''
}
function convert(event) {
const vybor2 = vybor.value;
if ( vybor2 === 'bad'){
    const totalmoney2 = (one.value / two.value)
    const totalmoney3 = ((totalmoney2/100*0))
    const totalmoney4 = (totalmoney2 + totalmoney3)
    totalmoney.innerHTML = `Всего: ${totalmoney4}`
    extramoney.innerHTML = `Чаевые: ${totalmoney3}`
} else {
if (vybor2 === 'normal'){
    const totalmoney2 = (one.value / two.value)
    const totalmoney3 = ((totalmoney2/100*5))
    const totalmoney4 = (totalmoney2 + totalmoney3)
    totalmoney.innerHTML = `Всего: ${totalmoney4}`
    extramoney.innerHTML = `Чаевые: ${totalmoney3}`
} else{
if (vybor2 === 'good'){
    const totalmoney2 = (one.value / two.value)
    const totalmoney3 = ((totalmoney2/100*10))
    const totalmoney4 = (totalmoney2 + totalmoney3)
    totalmoney.innerHTML = `Всего: ${totalmoney4}`
    extramoney.innerHTML = `Чаевые: ${totalmoney3}`
}else{
if(vybor2 === 'perfect'){
    const totalmoney2 = (one.value / two.value)
    const totalmoney3 = ((totalmoney2/100*15))
    const totalmoney4 = (totalmoney2 + totalmoney3)
    totalmoney.innerHTML = `Всего: ${totalmoney4}`
    extramoney.innerHTML = `Чаевые: ${totalmoney3}`
}
}
}
}
}
