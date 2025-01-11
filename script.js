// Função para gerar senha
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includespecialcharacters) {
    // lista de caracteres usaveis.
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialcharacters = "!@#$%&/*-+";
  
    let charPool = ""; // Conjunto de caracteres permitido na senha
  
    // Adicionar os conjuntos selecionados
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includespecialcharacters) charPool += specialcharacters;
  
    // Verificar se pelo menos um conjunto foi selecionado
    if (charPool === "") {
      alert("Por favor, selecione pelo menos uma opção.");
      return "";
    }
  
    // Gerar senha
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
  
    return password;
  }
  
  // Lógica para o evento de clique no botão
  document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includespecialcharacters = document.getElementById("specialcharacters").checked;
  
    // Gerar a senha
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includespecialcharacters);
  
    // Mostrar a senha no elemento HTML
    document.getElementById("password").textContent = password;
  });
  