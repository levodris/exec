function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let horas = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()
//horas = 19
msg.innerHTML = (`Agora são exatamente ${horas}:${minutos}:${segundos}`)
if(horas >= 0 && horas <= 12){
    img.src = 'manha.jpg'
    document.body.style.background = '#f7e9b7'
}else if (horas >=12 && horas <= 18){
    img.src = 'tarde.jpg' 
    document.body.style.background = '#f86903'
}else{
    img.src = 'noite.jpg' 
    document.body.style.background = '#2b5492'
}
}