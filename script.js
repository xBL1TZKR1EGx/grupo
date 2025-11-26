document.addEventListener("DOMContentLoaded", () => {
    
    // Formulário da página Contato
    const form = document.getElementById("formContato");
    const msg = document.getElementById("mensagem");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            msg.textContent = "Mensagem enviada com sucesso! Em breve retornaremos.";
            msg.style.color = "green";
        });
    }
});
