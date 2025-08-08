const sobre = document.querySelector('#about')

const formulario = document.querySelector("#formulario")

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
	try {
		// Enviar uma Requisição HTTP para a API do Github
		const dadosPerfil = await fetch(
			`https://api.github.com/users/phccoelho`
		)

		// Converte a Resposta HTTP para o formato JSON
		const perfil = await dadosPerfil.json()

		// Criando o conteúdo da Seção about
		let conteudo = `
    
            <!-- Imagem da seção Sobre -->
            <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}" />

            <!-- Texto da seção Sobre -->
            <article id="about_texto">
                <h1>Sobre mim</h1>
                <p>${perfil.bio}</p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} seguidores</p>
                    <p>${perfil.public_repos} repositórios</p>
                </div>
            </article>
            
    `
		// Adicionar o conteúdo na página index.html, na Seção about
		sobre.innerHTML += conteudo

	} catch (error) {
		console.error(error)
	}
}

formulario.addEventListener("submit", function(event){

    event.preventDefault()

    const campoNome = document.querySelector("#nome")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres"
        campoNome.focus()
        return
    }else{
        txtNome.innerHTML = ""
    }

     const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido"
        campoEmail.focus()
        return
    }else{
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto")
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres"
        campoAssunto.focus()
        return
    }else{
        txtAssunto.innerHTML = ""
    }

    // Enviar o e-mail
    formulario.submit()
})

getApiGithub()


let canvas; // para armazenar o canvas do p5

function setup() {
  canvas = createCanvas(window.innerWidth, document.querySelector('.home_container').offsetHeight);
  canvas.parent('water-bg');
  noFill();
  stroke(0, 119, 255, 50);
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  let t = frameCount * 0.5;

  for (let i = 0; i < 10; i++) {
    let r = t - i * 30;
    if (r > 0) {
      strokeWeight(2);
      ellipse(0, 0, r * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, document.querySelector('.home_container').offsetHeight);
}