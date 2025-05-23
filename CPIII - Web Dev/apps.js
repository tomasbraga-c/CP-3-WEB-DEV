const form = document.getElementById("form")
const inputnome = document.getElementById("nome")
const inputpreco = document.getElementById("preco")
const inputcategoria = document.getElementById("categoria")
const btnEnviar = document.getElementById("btnEnviar")
const mensagemErro = document.getElementById("mensagemErro")
const cadastro = document.getElementById("cadastroProdutos")


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()
    let nome = inputnome.value
    let preco = inputpreco.value.trim()
    let precoDec = parseFloat(preco)
    let categoria = inputcategoria.value

    if (nome == "" || preco == "" || categoria == "") {
        mensagemErro.textContent = "Peencha os campos vazios!"
        mensagemErro.style.color = "#ff0000"
        return
    }
    if (isNaN(precoDec) || precoDec <= 0) {
        mensagemErro.textContent = "O preço deve ser um número maior que 0!"
        mensagemErro.style.color = "#ff0000"
        return
    }
    preco = precoDec.toFixed(2)
    const cadastroProd = document.createElement('div')
    if (categoria === "tecnologia") {
        cadastroProd.innerHTML = `<p><strong> Nome: ${nome} - R$${preco} - Categoria: ${categoria} </strong></p>`
    }
    else if (categoria === "alimentos") {
        cadastroProd.innerHTML = `<p style = "background-color: yellow"> Nome: ${nome} - R$${preco} - Categoria: ${categoria} </p>`
    }
    else {
        cadastroProd.innerHTML = `<p> Nome: ${nome} - R$${preco} - Categoria: ${categoria} </p>`
    }
    cadastro.append(cadastroProd)
    form.reset()
})