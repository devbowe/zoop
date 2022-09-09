$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });
    $('.registration-form input[type="number"]').on('focus', function () {
            $(this).removeClass('input-error');
    });

    $('.registration-form select#sel').on('focus', function () {
        $(this).removeClass('input-error');
});

    $('.registration-form .btn-submit').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var identificador = 'pre-lancamento-relatorio-tendencias-2022';
        var nome = $("input[name='nome']" );
        var email = $("input[name='email']" );
        var empresa = $("input[name='empresa']" );
        var cargo = $("select[name='cargo']" );


        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');
        var utm_content = $('#utm_content');

        var fonte = 'ABM - performance';

        if (!nome.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu nome',
                timer: 2000,
                onAfterClose: () => {
                    nome.focus();
                }
            });
        } else if (!validacaoEmail(email.val())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe um e-mail vÃ¡lido',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!emailCorporativo(email.val())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe um e-mail comercial',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!empresa.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe sua empresa',
                timer: 2000,
                onAfterClose: () => {
                    empresa.focus();
                }
            });
        } else if (cargo.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu cargo',
                timer: 2000,
                onAfterClose: () => {
                    cargo.focus();
                }
            });
        } else {

            $(".registration-form .btn-submit").html('Enviando...');

            var sendRD = [
                { name: 'identificador', value: identificador},
                { name: 'Fonte', value: fonte},
                { name: 'Nome', value: nome.val()},
                { name: 'email', value: email.val()},
                { name: 'empresa', value: empresa.val()},
                { name: 'Cargo', value: cargo.val()},
                { name: 'privacy_data[communications]', value: '1'},
                { name: 'utm_source', value: utm_source.val()},
                { name: 'utm_medium', value: utm_medium.val()},
                { name: 'utm_campaign', value: utm_campaign.val()},
                { name: 'utm_content', value: utm_content.val()},
                { name: 'url_pagina', value: window.location.href},
                { name: 'token_rdstation', value: '1d5df0c08ce8734ee6677ffa08df91bc'}
            ];

            RdIntegration.post(sendRD);

            if (next_step) {
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }

        }

        return false;

       });
   
});

function validacaoEmail(email) {
    var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
    }
    
    var invalidDomains = ["@gmail.","@yahoo.","@hotmail.","@live.","@aol.","@outlook.","@bol.", "@uol."];
        
    function emailCorporativo(email) {
        for(var i=0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
            }
        }
        return true;
    }
    
    /*** script modal ***/
    
    $('.playvideo').click(function(){
        $('.modalvideo').css('display','flex');
        $('html').css('overflow-y','hidden');
        $('body > div > iframe').attr("src","https://www.youtube.com/embed/ziv7H69SHkc?autoplay=1");;
    
    });
    $('.modalvideo .close').click(function(){
        $('.modalvideo').css('display','none');
        $('html').css('overflow-y','auto');
        $('body > div > iframe').attr("src","");;
    });