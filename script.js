function cadastrar() {
  const usuario = document.getElementById("cadastro_usuario").value;
  const senha = document.getElementById("cadastro_senha").value;

  if (!usuario || !senha) {
    document.getElementById("mensagem").innerText = "Preencha todos os campos.";
    return;
  }

  // Aqui normalmente enviaria para o back-end
  document.getElementById("mensagem").innerText = "Cadastro enviado! (simulado)";
}

function logar() {
  const usuario = document.getElementById("login_usuario").value;
  const senha = document.getElementById("login_senha").value;

  if (!usuario || !senha) {
    document.getElementById("mensagem").innerText = "Preencha todos os campos.";
    return;
  }

  // Aqui normalmente enviaria para o back-end
  document.getElementById("mensagem").innerText = "Login enviado! (simulado)";
}
