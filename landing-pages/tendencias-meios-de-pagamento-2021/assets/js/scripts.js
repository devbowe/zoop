/*** script slide ***/

    var count = 1;

    function transition() {

        if(count == 1) {
            $('.opt1').click();
            count = 2;

        } else if(count == 2) {
            $('.opt2').click()
            count = 3;

        } else if(count == 3) {
            $('.opt3').click()
            count = 4;

        } else if(count == 4) {
            $('.opt4').click()
            count = 5;

        } else if(count == 5) {
            $('.opt5').click()
            count = 1;
        }

    }
    setInterval(transition, 7000);

    $('.opt1').click(function(){
        $('.opt1').addClass('active');
        $('.opt2').removeClass('active');
        $('.opt3').removeClass('active');
        $('.opt4').removeClass('active');
        $('.opt5').removeClass('active');
        $('#section03 .imagem').css('background', 'url(./assets/images/Gustavo-Gierun.png) bottom center no-repeat,linear-gradient(180deg, #ffb400 .56%, #ff9b00 50.1%, #ff7300 98.62%)');
        //$('#section03 .imagem h3').html('Gustavo Gawry');
        //$('#section03 .imagem h4').html('CEO Zoop');

        $("#link1").attr("href", "https://www.linkedin.com/in/gustavo-gierun-4490948a/");
        $("#link1").show();
        $("#link2").hide();
        $("#link3").hide();

        count = 2;

    });
    $('.opt2').click(function(){
        $('.opt1').removeClass('active');
        $('.opt2').addClass('active');
        $('.opt3').removeClass('active');
        $('.opt4').removeClass('active');
        $('.opt5').removeClass('active');
        $('#section03 .imagem').css('background', 'url(./assets/images/Andre-Calabro.png) bottom center no-repeat,linear-gradient(180deg, #ffb400 .56%, #ff9b00 50.1%, #ff7300 98.62%)');
        //$('#section03 .imagem h3').html('Nome');
        //$('#section03 .imagem h4').html('CEO Zoop');

        $("#link1").attr("href", "https://www.linkedin.com/in/andre-calabro-48999720/");
        $("#link1").show();
        $("#link2").hide();
        $("#link3").hide();

        count = 3;

    });
    $('.opt3').click(function(){
        $('.opt1').removeClass('active');
        $('.opt2').removeClass('active');
        $('.opt3').addClass('active');
        $('.opt4').removeClass('active');
        $('.opt5').removeClass('active');
        $('#section03 .imagem').css('background', 'url(./assets/images/Convidados.png) bottom center no-repeat,linear-gradient(180deg, #ffb400 .56%, #ff9b00 50.1%, #ff7300 98.62%)');
        //$('#section03 .imagem h3').html('Nome');
        //$('#section03 .imagem h4').html('CEO Zoop');

        $("#link1").hide();
        $("#link2").show();
        $("#link3").show();

        count = 4;

    });
    $('.opt4').click(function(){
        $('.opt1').removeClass('active');
        $('.opt2').removeClass('active');
        $('.opt3').removeClass('active');
        $('.opt4').addClass('active');
        $('.opt5').removeClass('active');
        $('#section03 .imagem').css('background', 'url(./assets/images/Leiziane.png) bottom center no-repeat,linear-gradient(180deg, #ffb400 .56%, #ff9b00 50.1%, #ff7300 98.62%)');
        //$('#section03 .imagem h3').html('Nome');
        //$('#section03 .imagem h4').html('CEO Zoop');

        $("#link1").attr("href", "https://www.linkedin.com/in/leiziane-oliveira-da-silva-a568866a/");
        $("#link1").show();
        $("#link2").hide();
        $("#link3").hide();

        count = 5;

    });
    $('.opt5').click(function(){
        $('.opt1').removeClass('active');
        $('.opt2').removeClass('active');
        $('.opt3').removeClass('active');
        $('.opt4').removeClass('active');
        $('.opt5').addClass('active');
        $('#section03 .imagem').css('background', 'url(./assets/images/Fernanda-Ribeiro.png) bottom center no-repeat,linear-gradient(180deg, #ffb400 .56%, #ff9b00 50.1%, #ff7300 98.62%)');
        //$('#section03 .imagem h3').html('Nome');
        //$('#section03 .imagem h4').html('CEO Zoop');

        $("#link1").attr("href", "https://www.linkedin.com/in/fernanda-ribeiro-68a573110/");
        $("#link1").show();
        $("#link2").hide();
        $("#link3").hide();

        count = 1;

    });



/*** script form rdstation e zoho ***/


    $('#nome').keypress(function(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
        if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
        }
    });

    $('#nome').on('input', function() {
        $(this).val($(this).val().replace(/[^a-z0-9]/gi, ''));
    });

    $(document).ready(function() {

        function getUrlParamByName(name, url) {
            if (!url) url = window.location.href;
      
            name = name.replace(/[\[\]]/g, '\\$&');
      
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            var results = regex.exec(url);
      
            if (!results) return null;
            if (!results[2]) return '';
      
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
          }

        $('#utm_source').val(getUrlParamByName('utm_source'));
        $('#utm_medium').val(getUrlParamByName('utm_medium'));
        $('#utm_campaign').val(getUrlParamByName('utm_campaign'));

        $('#baixar').click(function() {
            
            var identificador = 'Relatório de Tendência';
            var nome = $('#nome');
            var sobrenome = $('#sobrenome');
            var email = $('#email');
            var cargo = $('#cargo');
            var telefone = $('#telefone');
            var utm_source = $('#utm_source');
            var utm_medium = $('#utm_medium');
            var utm_campaign = $('#utm_campaign');

            var url = 'https://crm.zoho.com/crm/WebToLeadForm?xnQsjsdp=2a678cabb187398a00d6701f4a556e00dc455e4e78c488388b773a6b883f9b06&zc_gad=&xmIwtLD=fa7ca0107b21afbf84778dc8f5dbc12779e96d17c74f400a0c4455e7286f9539&actionType=TGVhZHM=&First Name=' + nome.val() + '&Last Name=' + sobrenome.val() + '&LEADCF15=' + cargo.val() + '&Email=' + email.val() + '&Phone=' + telefone.val() + '&eo=14f4ec16431e0686150daa43f3210513&te=true&la=0cf464d6861a382a9253d18d89c2e6e5&returnURL=https://zoop.com.br/tendencias-meios-de-pagamento-2021/obrigado.html';

            if (!nome.val()){
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo obrigatório',
                    text: 'Por favor, informe seu nome',
                    timer: 2000,
                    onAfterClose: () => {
                        nome.focus();
                    }
                });
            } else if (!sobrenome.val()){
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo obrigatório',
                    text: 'Por favor, informe seu sobrenome',
                    timer: 2000,
                    onAfterClose: () => {
                        sobrenome.focus();
                    }
                });
            } else if(telefone.val().length < 9){

                Swal.fire({
                    icon: 'warning',
                    title: 'Campo obrigatório',
                    text: 'Por favor, informe seu telefone',
                    timer: 2000,
                    onAfterClose: () => {
                        telefone.focus();
                    }
                });
        
            } else if (!validacaoEmail(email.val())){
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo obrigatório',
                    text: 'Por favor, informe um e-mail válido',
                    timer: 2000,
                    onAfterClose: () => {
                        email.focus();
                    }
                });
            } else if (!cargo.val()){
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo obrigatório',
                    text: 'Por favor, informe seu cargo',
                    timer: 2000,
                    onAfterClose: () => {
                        cargo.focus();
                    }
                });
            } else {

                $("#baixar").html('Enviando...');

                var sendRD = [
                    { name: 'identificador', value: identificador},
                    { name: 'Nome', value: nome.val()},
                    { name: 'Sobrenome', value: sobrenome.val()},
                    { name: 'email', value: email.val()},
                    { name: 'telefone', value: telefone.val()},
                    { name: 'cargo', value: cargo.val()},
                    { name: 'utm_source', value: utm_source.val()},
                    { name: 'utm_medium', value: utm_medium.val()},
                    { name: 'utm_campaign', value: utm_campaign.val()},
                    { name: 'url_pagina', value: window.location.href},
                    { name: 'token_rdstation', value: '1d5df0c08ce8734ee6677ffa08df91bc'}
                ];

                RdIntegration.post(sendRD);

                var settings = {
                    "url": url,
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                      "Content-Type": "application/x-www-form-urlencoded",
                      "Cookie": "webformsubmission_fa7ca0107b21afbf84778dc8f5dbc12779e96d17c74f400a0c4455e7286f9539=fa7ca0107b21afbf84778dc8f5dbc12779e96d17c74f400a0c4455e7286f9539; 1a99390653=68d443faf8715005d8a391e170c7d294; 6e4b8efee4=d6751c5d1a58f6d195fc930e2225bfb6; crmcsr=21a7883b-35d5-4d71-a9ac-21a27b260f0d; _zcsr_tmp=21a7883b-35d5-4d71-a9ac-21a27b260f0d; JSESSIONID=8D4349828372F652A560E05D66ED836C"
                    },
                  };
                  
                  $.ajax(settings).done(function (response) {
                    console.log(response);
                  });

                setTimeout(function(){ 
                    window.location.href = "./obrigado.html";
                 }, 3000);

            }

            return false;

        });

    });

function validacaoEmail(email) {
    var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

$("#telefone")
    .mask("(99) 9999-9999?9")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 99999-999?9");  
        } else {  
            element.mask("(99) 9999-9999?9");  
        }  
});


/*** script modal ***/

    $('.playvideo').click(function(){
        $('.modalvideo').css('display','flex');
        $('html').css('overflow-y','hidden');
        $('body > div > iframe').attr("src","https://www.youtube.com/embed/DC_dEz7fPyM?autoplay=1");;

    });
    $('.modalvideo .close').click(function(){
        $('.modalvideo').css('display','none');
        $('html').css('overflow-y','auto');
        $('body > div > iframe').attr("src","");;
    });