---

# 🧮 Calculadora Web com Histórico

Uma calculadora web desenvolvida com **HTML, CSS e JavaScript puro**, que realiza operações matemáticas básicas e mantém um histórico das últimas contas realizadas.

---

## 📌 Funcionalidades

✔ Operações básicas:

* Soma (+)
* Subtração (-)
* Multiplicação (x)
* Divisão (/)
* Porcentagem (%)

✔ Outras funções:

* Botão **C** (limpar tudo)
* Botão **Backspace** (apagar último número)
* Suporte a números decimais
* Histórico das **3 últimas operações**
* Possibilidade de reutilizar contas anteriores clicando nelas

---

## 🗂 Estrutura do Projeto

```
📁 calculadora
│-- index.html
│-- style.css
│-- script.js
```

---

## 🧱 Tecnologias Utilizadas

* **HTML5** → Estrutura da página
* **CSS3** → Estilização da interface
* **JavaScript** → Lógica da calculadora
* **Font Awesome** → Ícone do botão de apagar

---

## 🎨 Interface

* Layout centralizado com Flexbox
* Design moderno com:

  * Fundo preto
  * Botões arredondados
  * Efeito hover com animação
* Visor principal grande
* Histórico exibido acima do resultado atual

---

## ⚙️ Como Funciona

### 📌 Lógica Principal

A aplicação funciona armazenando a expressão digitada em uma variável (`calculo`) e exibindo no visor (`conta`).

Quando o usuário pressiona **=**, o sistema executa a expressão usando:

```javascript
new Function("return " + calculo)();
```

O resultado é:

* Mostrado na tela principal
* Enviado para o histórico
* Transformado no novo valor base para próximos cálculos

---

## 🧠 Sistema de Histórico

A calculadora mantém até **3 operações anteriores**, armazenadas em:

* conta2
* conta3
* conta4

Ao clicar em uma delas:

* A operação volta para o visor
* Pode ser editada ou executada novamente

---

## 🚀 Como Executar

1. Baixe ou clone o projeto
2. Abra o arquivo `index.html` no navegador
3. Use normalmente

Não é necessário servidor ou instalação adicional.

---

## 📈 Melhorias Futuras (Sugestões)

* 🔒 Substituir `new Function()` por método mais seguro
* 📱 Tornar totalmente responsiva para celulares
* 🔢 Criar uma única função para números (código mais limpo)
* 🎨 Melhorar design com modo escuro/claro
* ⌨️ Adicionar suporte ao teclado

---

## 👨‍💻 Autor

Desenvolvido por **Adryan Galdino Soares**

---
