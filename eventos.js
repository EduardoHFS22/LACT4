function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        window.location.hash = id;
    });

}

function recarregar() {

    window.location.reload();
} 

function escuro() {
    
    $('body').css("background-color","#121212");
    $('body, p').css("color","white");
    $('.secao, .list-group-item, .card').css("background-color","#121212");
    $('.aplicacao, .carousel-caption').css("background-color","black");
    $('.cor').css("color","blue");
}

function padrao() {
    
    $('body').css("background-color","#f0efef");
    $('body, p').css("color","#5a5a5a");
    $('.secao, .list-group-item, .card').css("background-color","#f0efef");
    $('.aplicacao, .carousel-caption').css("background-color","white");
    $('.cor').css("color","blue");
}

function extra() {
    
    $('body').css("background-color","#4e99b7");
    $('body, p').css("color","black");
    $('.secao, .list-group-item, .card').css("background-color","#9c8f9b");
    $('.aplicacao, .carousel-caption').css("background-color","#4e99b7");
    $('.cor').css("color","white");
}


$(function () {

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
    
    $("#logo").on("click", function () {
        recarregar();
    });
});
