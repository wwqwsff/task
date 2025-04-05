const button1 = document.getElementById('klik1')
const button2 = document.getElementById('klik2')
const info = document.getElementById('information')

button1.onclick = function() {
    if (button2.style.backgroundColor === 'blue') {
        button2.style.backgroundColor = ''
    } else {
        button2.style.backgroundColor = 'blue'
    }
}

button2.onclick = function() {
    const infoContent = info.textContent
    console.log(infoContent)
}