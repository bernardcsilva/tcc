function Somar() {
    let soma1 = document.getElementById('soma')
    let soma2 = document.getElementById('soma2')
    let res1 = document.getElementById('res1')

    if (soma1.value + soma2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val = Number(soma1.value) + Number(soma2.value)
        res1.innerHTML = `O valor da soma é ${val}`
    }
}
function Diminuir() {
    let dim1 = document.getElementById('dim')
    let dim2 = document.getElementById('dim2')
    let res2 = document.getElementById('res2')

    if (dim1.value - dim2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val2 = Number(dim1.value) - Number(dim2.value)
        res2.innerHTML = `O valor da Subtração é de ${val2} `
    }
}
function Multiplicar() {
    let mult1 = document.getElementById('mult')
    let mult2 = document.getElementById('mult2')
    let res3 = document.getElementById('res3')

    if (mult1.value * mult2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val3 = Number(mult1.value) * Number(mult2.value)
        res3.innerHTML = `O valor da Multiplicação é de ${val3} `
    }
}
function Divisao() {

    let divi1 = document.getElementById('divi')
    let divi2 = document.getElementById('divi2')
    let res4 = document.getElementById('res4')

    if (divi1.value / divi2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val4 = Number(divi1.value) / Number(divi2.value)
        res4.innerHTML = `O valor da Multiplicação é de ${val4} `
    }
}
function converter () {
    let temp = document.getElementById('temp')
    let res5 = document.getElementById('res5')
    let num = temp.value
    let val1 = 32
    let val2 = 5/9
    if (num >= 0) {
        let cal = (num - val1) * val2
        res5.innerHTML = `${cal}° C`
    } else {
        let cal = (num - val1) * val2
        res5.innerHTML = `${cal}° C`
    }
}
function converter2() {
    let temp2 = document.getElementById('temp2')
    let res6 = document.getElementById('res6')
    let num2 = temp2.value
    let val3 = 9/5
    let val4 = 32
    if (num2 >= 0) {
        let cal2 = (num2 * val3) + val4
        res6.innerHTML = `${cal2}° Fahreinheit`
        
    } else {
        let cal2 = (num2 * val3) + val4
        res6.innerHTML = `${cal2}° Fahreinheit`
    }
}