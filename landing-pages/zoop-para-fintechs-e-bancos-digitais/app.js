$(document).ready(function () {
    $("select[name='contas']").hide();
    $("select[name='transacionado']").hide();
    $("select[name='dev-proprio']").hide();
    $("select[name='ajuda']").hide();
    $("input[name='sujestao']").hide();

    $("select").change(function () {
        var area = $("select[name='area']").val();

        if (area == "Pagamentos") {
            $("select[name='transacionado']").fadeIn();
            $("select[name='contas']").hide();
            $("select[name='transacionado']").css("width", "100%");
        }
        if (area == "Banking") {
            $("select[name='transacionado']").hide();
            $("select[name='contas']").fadeIn();
            $("select[name='contas']").css("width", "100%");
        }
        if (area == "Pagamentos/Banking") {
            $("select[name='transacionado']").fadeIn();
            $("select[name='contas']").fadeIn();
            $("select[name='transacionado']").css("width", "100%");
            $("select[name='contas']").css("width", "100%");
        }
    });

    $("select[name='contas']").change(function () {
        $("select[name='dev-proprio']").fadeIn();
        $("select[name='dev-proprio']").css("width", "100%");
    });

    $("select[name='transacionado']").change(function () {
        $("select[name='ajuda']").fadeIn();
        $("select[name='ajuda']").css("width", "100%");
        $("input[name='sujestao']").fadeIn();
        $("input[name='sujestao']").css("width", "100%");
    });

    $("select[name='dev-proprio']").change(function () {
        $("select[name='ajuda']").fadeIn();
        $("select[name='ajuda']").css("width", "100%");
        $("input[name='sujestao']").fadeIn();
        $("input[name='sujestao']").css("width", "100%");
    });

    $("input[name='tel']")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {
            var target, phone, element;
            target = event.currentTarget
                ? event.currentTarget
                : event.srcElement;
            phone = target.value.replace(/\D/g, "");
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });

    function getUrlParamByName(name, url) {
        if (!url) url = window.location.href;

        name = name.replace(/[\[\]]/g, "\\$&");

        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);

        if (!results) return null;
        if (!results[2]) return "";

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $("#utm_source").val(getUrlParamByName("utm_source"));
    $("#utm_medium").val(getUrlParamByName("utm_medium"));
    $("#utm_campaign").val(getUrlParamByName("utm_campaign"));

    $("#enviar").click(function () {
        var identificador = "zoop-para-fintechs-e-bancos-digitais";
        var nome = $("input[name='nome']");
        var sobrenome = $("input[name='sobrenome']");
        var email = $("input[name='email']");
        var telefone = $("input[name='tel']");
        var empresa = $("input[name='empresa']");
        var temcnpj = $("select[name='tem-cnpj']");
        var cargo = $("select[name='cargo']");
        var setormercado = $("select[name='setormercado']");
        var tamanho = $("select[name='tamanho']");
        var area = $("select[name='area']");
        var transacionado = $("select[name='transacionado']");
        var contas = $("select[name='contas']");
        var desenvolvimento = $("select[name='dev-proprio']");
        var ajuda = $("select[name='ajuda']");
        var sujestao = $("input[name='sujestao']");

        var utm_source = $("#utm_source");
        var utm_medium = $("#utm_medium");
        var utm_campaign = $("#utm_campaign");

        var fonte = "Contato Comercial";

        /*var url = 'https://crm.zoho.com/crm/WebToLeadForm?xnQsjsdp=2a678cabb187398a00d6701f4a556e00dc455e4e78c488388b773a6b883f9b06&zc_gad=&xmIwtLD=fa7ca0107b21afbf84778dc8f5dbc127cbfd3e39c63f1a4196c735d6483bb1c8&actionType=TGVhZHM=&First Name='
          + nome.val() + '&Last Name=' + sobrenome.val() + '&Email=' + email.val() + '&Phone=' + telefone.val()
          + '&Company=' + empresa.val() + '&LEADCF122=' + tamanho.val() + '&LEADCF18=' + transacionado.val()
          + '&LEADCF166=' + contas.val() + '&LEADCF169=' + area.val() + '&LEADCF11=' + temcnpj.val() + '&LEADCF15=' + cargo.val()
          + '&LEADCF171=' + areaatuacao.val() + '&Lead_Source=' + fonte +
          '&eo=14f4ec16431e0686150daa43f3210513&te=true&la=0cf464d6861a382a9253d18d89c2e6e5';*/

        if (!nome.val()) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe seu nome",
                timer: 2000,
                onAfterClose: () => {
                    nome.focus();
                },
            });
        } else if (!sobrenome.val()) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe seu sobrenome",
                timer: 2000,
                onAfterClose: () => {
                    sobrenome.focus();
                },
            });
        } else if (!validacaoEmail(email.val())) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe um e-mail válido",
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                },
            });
        } else if (!emailCorporativo(email.val())) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe um e-mail comercial",
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                },
            });
        } else if (!telefone.val()) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe seu telefone",
                timer: 2000,
                onAfterClose: () => {
                    telefone.focus();
                },
            });
        } else if (!empresa.val()) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe sua empresa",
                timer: 2000,
                onAfterClose: () => {
                    empresa.focus();
                },
            });
        } else if (temcnpj.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe se possui cnpj",
                timer: 2000,
                onAfterClose: () => {
                    temcnpj.focus();
                },
            });
        } else if (cargo.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe seu cargo",
                timer: 2000,
                onAfterClose: () => {
                    cargo.focus();
                },
            });
        } else if (setormercado.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe seu Setor de mercado",
                timer: 2000,
                onAfterClose: () => {
                    setormercado.focus();
                },
            });
        } else if (tamanho.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o número de funcionários",
                timer: 2000,
                onAfterClose: () => {
                    tamanho.focus();
                },
            });
        } else if (area.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe a área de interesse",
                timer: 2000,
                onAfterClose: () => {
                    area.focus();
                },
            });
        } else if (
            area.val() == "Pagamentos" &&
            transacionado.val() == "nulo"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o valor transacionado",
                timer: 2000,
                onAfterClose: () => {
                    transacionado.focus();
                },
            });
        } else if (area.val() == "Banking" && contas.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o potencial de contas bancarias",
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                },
            });
        } else if (
            area.val() == "Pagamentos/Banking" &&
            transacionado.val() == "nulo"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o valor transacionado",
                timer: 2000,
                onAfterClose: () => {
                    transacionado.focus();
                },
            });
        } else if (
            area.val() == "Pagamentos/Banking" &&
            contas.val() == "nulo"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o potencial de contas bancarias",
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                },
            });
        } else if (
            desenvolvimento.val() == "Banking" &&
            contas.val() == "nulo"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe se tem time de desenvolvimento próprio",
                timer: 2000,
                onAfterClose: () => {
                    desenvolvimento.focus();
                },
            });
        } else if (
            desenvolvimento.val() == "Pagamentos/Banking" &&
            contas.val() == "nulo"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe se tem time de desenvolvimento próprio",
                timer: 2000,
                onAfterClose: () => {
                    desenvolvimento.focus();
                },
            });
        } else if (ajuda.val() == "nulo") {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Informe o que a Zoop poderia ajudar",
                timer: 2000,
                onAfterClose: () => {
                    ajuda.focus();
                },
            });
        } else if (!$("#optin").is(":checked")) {
            Swal.fire({
                icon: "warning",
                title: "Campo obrigatório",
                text: "Necessário dar ciência em receber comunicações",
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                },
            });
        } else {
            $("#enviar").html("Enviando...");

            var sendRD = [
                { name: "identificador", value: identificador },
                { name: "Fonte", value: fonte },
                { name: "Nome", value: nome.val() },
                { name: "Sobrenome", value: sobrenome.val() },
                { name: "email", value: email.val() },
                { name: "telefone", value: telefone.val() },
                { name: "empresa", value: empresa.val() },
                { name: "Possui CNPJ?", value: temcnpj.val() },
                { name: "Setor de mercado", value: setormercado.val() },
                { name: "Cargo", value: cargo.val() },
                { name: "Nº de Funcionários", value: tamanho.val() },
                { name: "Áreas de Interesse", value: area.val() },
                {
                    name: "Faturamento médio mensal dos seus clientes",
                    value: transacionado.val(),
                },
                {
                    name: "Potencial número de contas bancárias",
                    value: contas.val(),
                },
                {
                    name: "Você tem um time de desenvolvimento próprio?",
                    value: desenvolvimento.val(),
                },
                {
                    name: "Como a Zoop poderia te ajudar hoje?",
                    value: ajuda.val(),
                },
                {
                    name: "Algo mais que gostaria de dizer?",
                    value: sujestao.val(),
                },
                { name: "utm_source", value: utm_source.val() },
                { name: "utm_medium", value: utm_medium.val() },
                { name: "utm_campaign", value: utm_campaign.val() },
                { name: "url_pagina", value: window.location.href },
                {
                    name: "token_rdstation",
                    value: "1d5df0c08ce8734ee6677ffa08df91bc",
                },
            ];

            RdIntegration.post(sendRD);

            /*var settings = {
                  "url": url,
                  "method": "POST",
                  "timeout": 0,
                  "headers": {
                      "Content-Type": "application/x-www-form-urlencoded",
                      "Cookie": "webformsubmission_fa7ca0107b21afbf84778dc8f5dbc127cbfd3e39c63f1a4196c735d6483bb1c8=fa7ca0107b21afbf84778dc8f5dbc127cbfd3e39c63f1a4196c735d6483bb1c8; 1a99390653=68d443faf8715005d8a391e170c7d294; 6e4b8efee4=d6751c5d1a58f6d195fc930e2225bfb6; crmcsr=21a7883b-35d5-4d71-a9ac-21a27b260f0d; _zcsr_tmp=21a7883b-35d5-4d71-a9ac-21a27b260f0d; JSESSIONID=8D4349828372F652A560E05D66ED836C"
                  },
                };
                
                $.ajax(settings).done(function (response) {
                  console.log(response);
                });*/

            setTimeout(function () {
                window.location.href = "./obrigado.html";
            }, 2000);
        }

        return false;
    });
});

function validacaoEmail(email) {
    var verifica =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

var invalidDomains = [
    "@gmail.",
    "@yahoo.",
    "@hotmail.",
    "@live.",
    "@aol.",
    "@outlook.",
    "@bol.",
    "@uol.",
];

function emailCorporativo(email) {
    for (var i = 0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
        }
    }
    return true;
}

$("input[name='nome']").keypress(function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which; // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

$("input[name='nome']").on("input", function () {
    $(this).val(
        $(this)
            .val()
            .replace(/[^a-z0-9]/gi, "")
    );
});
