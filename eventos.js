function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
    });

}

function recarregar() {

    window.location.reload();
} 

function escuro() {
    
    $('body').css("background-color","black");
    $('body').css("color","white");
    $('.secao, .list-group-item, .card, .aplicacao').css("background-color","black");
}

function padrao() {
    
    $('body').css("background-color","white");
    $('body').css("color","#5a5a5a");
    $('.secao, .list-group-item, .card, .aplicacao').css("background-color","white");
}

function extra() {
    
    $('body').css("background-color","#4e99b7");
    $('body').css("color","black");
    $('.secao, .list-group-item, .card, .aplicacao').css("background-color","#9c8f9b");
    $('.card').css("color","white");
}


$(function () { // jquery

    console.log("documento carregado..");
    
    $("#oque").on("click", function () {
        console.log("funcao ir para secao 1 acionada..");
        scrollPara("#secao1");
    });
    
    $("#util").on("click", function () {
        console.log("funcao ir para secao 2 acionada..");
        scrollPara("#secao2");
    });
    
    $("#exemplos").on("click", function () {
        console.log("funcao ir para secao 3 acionada..");
        scrollPara("#secao3");
    });

    $("#inscricao").on("click", function () {
        console.log("funcao ir para secao 4 acionada..");
        scrollPara("#secao4");
    });

    $("#referencias").on("click", function () {
        console.log("funcao ir para secao 5 acionada..");
        scrollPara("#secao5");
    });

    $("#escuro").on("click", function () {
        escuro();
    });

    $("#padrao").on("click", function () {
        padrao();
    });

    $("#extra").on("click", function () {
        extra();
    });

    $("#Confirmar").on("click", function () {
        alert("Seu dados não foram salvos, tente no semestre que vem.");
    });
});
