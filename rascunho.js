let isDrawing = false
let x = 0
let y = 0

const myPics = document.getElementById('myPics')
const context = myPics.getContext('2d')

myPics.addEventListener('mousedown', (e) => {
    x = e.offsetX
    y = e.offsetY
    isDrawing = true
}) 

myPics.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawline(context, x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
    }
})

window.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        drawline(context, x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
        isDrawing = false
    }
})

function drawline(context, x1, y1, x2, y2) {
    context.beginPath()
    context.strokeStyle = 'black'
    context.lineWidth = 1
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}