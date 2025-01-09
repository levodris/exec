function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebemenino.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "meninolindo.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "homemadulto.jpg");
      } else if (idade < 100) {
        //idoso
        img.setAttribute("src", "homemidoso,jpg");
      } else {
        img.setAttribute("src", "caixao.jpg");
        alert("Verifique os dados e tente novamente!");
        return;
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";

      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebemenina.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "menina.jpg");
      } else if (idade < 50) {
        //adulta
        img.setAttribute("src", "mulheradulta.jpg");
      } else if (idade < 100) {
        //idosa
        img.setAttribute("src", "mulheridosa.jpg");
      } else {
        img.setAttribute("src", "caixao.jpg");
        alert("Verifique os dados e tente novamente!");
        return;
      }
    }
    //res.style.textAlign = 'center', serve para centralizar o texto usando JS
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
