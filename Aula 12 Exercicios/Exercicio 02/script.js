/*
document.addEventListener -> "Página, fica ligada que você vai receber um evento"
Página: "Mas qual evento?"
"submit" -> "O evento de envio de formulário"
Página: Beleza! O que é pra eu fazer quando o formulário for enviado?
processar_formulario -> "Roda a função processar_formulario"
*/
document.addEventListener("submit", processar_formulario);

function processar_formulario(evento) { // Evento do que? Não sei!
  evento.preventDefault();

  // Ver se o formulário foi preenchido corretamente -> Retorna os dados do formulário ou produz um erro (e retorna null)
  const dados1 = obter_dados(); // ? dados1 recebe a caixinha

  if (dados1 === null) {
    window.alert("Verifique os dados e tente novamente!");
    return;
  }

  // Obter imagem e mensagem corretas para os dados
  const mensagem_e_imagem = obter_mensagem_e_foto(dados1); // ? obter_mensagem_e_foto recebe a caixinha

  // Incluir imagem e texto na página
  adicionar_mensagem_e_foto(mensagem_e_imagem);
}

/**
 * @returns retorna a lista contendo idade e sexo
 */
function obter_dados() {
  const data = new Date();
  const ano_atual = data.getFullYear();

  const form_data = new FormData(document.querySelector("form"));
  const ano_nascimento = Number(form_data.get("ano_nascimento"));
  const sexo = form_data.get("sex");

  if (ano_nascimento > ano_atual) {
    return null;
  }

  const idade = ano_atual - ano_nascimento;

  const caixinha = []; // ? <- 1. Cria a caixinha vazia

  caixinha[0] = idade; // ? <- idade entra na caixinha
  caixinha[1] = sexo; // ? <- sexo entra na caixinha

  return caixinha; // ? <- jogo a caixinha pra fora
}

/**
 * @param dados2 lista com idade e sexo
 * @returns retorna um objeto com a mensagem e a imagem (nome do arquivo)
 * { mensagem, imagem }
 */
function obter_mensagem_e_foto(dados2) {
  const idade = dados2[0]; // ? tiro idade e sesc da caixinha
  const sexo = dados2[1];
  const isHomem = sexo === "Homem"; // É homem?

  const grupo = {
    mensagem: "",
    imagem: "",
  };

  if (idade >= 100) {
    grupo.mensagem = "Você esta morto!";
    grupo.imagem = "caixao.jpg";

    return grupo;
  }

  grupo.mensagem = `Detectamos ${sexo} com ${idade} anos.`;

  if (idade >= 0 && idade < 10) {
    // criança
    grupo.imagem = isHomem ? "bebemenino.jpg" : "bebemenina.jpg";
  } else if (idade < 21) {
    // jovem
    grupo.imagem = isHomem ? "meninolindo.jpg" : "menina.png";
  } else if (idade < 50) {
    // adulto
    grupo.imagem = isHomem ? "homemadulto.jpg" : "mulheradulta.jpg";
  } else if (idade < 100) {
    // idoso
    grupo.imagem = isHomem ? "homemidoso.jpg" : "mulheridosa.jpg";
  }

  return grupo;
}

/**
 * Incluir/inserir na página a mensagem e a foto
 */
function adicionar_mensagem_e_foto(mensagem_e_imagem) {
  const mensagem = mensagem_e_imagem.mensagem;
  const imagem = mensagem_e_imagem.imagem;

  const elemento_resultado = document.querySelector("div#resultado");
  elemento_resultado.innerHTML = mensagem;

  const img = document.createElement("img");
  img.setAttribute("id", "foto");
  img.setAttribute("src", imagem); // ? src = source = fonte (em inglês)
  elemento_resultado.appendChild(img);
}
