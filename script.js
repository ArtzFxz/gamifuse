let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"

    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado") 
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarInscricao = (event) => {
    let valorEmail = document.getElementById("campo-email").value

    console.log(valorEmail)        

    let dadosForm = {
        email: valorEmail
    }
}
