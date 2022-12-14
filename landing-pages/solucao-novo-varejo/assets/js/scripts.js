$(document).ready(function(){


    var tela = $(window).width();

    $('#abrir-form').click(function() {

        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 500);

        $('.form').show();
        $('html').css('overflow-y','hidden');

        return false;

    });

    $('#close-form').click(function() {

        $('.form').hide();
        $('html').css('overflow-y','auto');

        return false;

    });

    
    $("select[name='contas']" ).hide();
    $("select[name='transacionado']" ).hide();
    $("select[name='ajuda']" ).hide();
    $("select[name='dev-proprio']" ).hide();
    $("input[name='sujestao']" ).hide();

    $("select").change(function(){
        
        var area = $("select[name='area']" ).val();

        if (area == 'Pagamentos') {
            $("select[name='transacionado']" ).fadeIn();
            $("select[name='contas']" ).hide();
            $("select[name='transacionado']" ).css("width", "100%");
        }
        if (area == 'Banking'){
            $("select[name='transacionado']" ).hide();
            $("select[name='contas']" ).fadeIn();
            $("select[name='contas']" ).css("width", "100%");
        }
        if(area == 'Pagamentos/Banking'){
            $("select[name='transacionado']" ).fadeIn();
            $("select[name='contas']" ).fadeIn();
            $("select[name='transacionado']" ).css("width", "48%");
            $("select[name='contas']" ).css("width", "48%");
        }
    });

    $("select[name='contas']").change(function(){
        $("select[name='dev-proprio']").fadeIn();            
        $("select[name='dev-proprio']" ).css("width", "100%");
    });
    
    $("select[name='transacionado']").change(function(){
        $("select[name='ajuda']").fadeIn();            
        $("select[name='ajuda']" ).css("width", "100%");
        $("input[name='sujestao']").fadeIn();            
        $("input[name='sujestao']").css("width", "97%");
    });
    
    $("select[name='dev-proprio']").change(function(){
        $("select[name='ajuda']").fadeIn();            
        $("select[name='ajuda']" ).css("width", "100%");
        $("input[name='sujestao']").fadeIn();            
        $("input[name='sujestao']").css("width", "97%");
    });    

    $("input[name='tel']" )
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

});

    !function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(o).forEach(function(t){i.options[t]=o[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(!0===this.showCursor&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,o=t.substr(s);if("^"===o.charAt(0)){var r=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],r+=o.length,e=parseInt(o)),t=t.substring(0,s)+t.substring(s+r)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="";for(a="<"===n?">":";";t.substr(s+1).charAt(0)!==a&&(t.substr(s).charAt(0),!(++s+1>t.length)););s++,a}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(;"<"!==t.substr(s-1).charAt(0)&&(t.substr(s).charAt(0),!(--s<0)););s--,"<"}var i=t.substr(0,s);e.replaceText(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,e){Array.prototype.slice.apply(s.querySelectorAll(t)).forEach(function(t){var s=t._typed,o="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,o),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),o=s.data("typed"),r="object"==typeof t&&t;o&&o.reset(),s.data("typed",o=new i(this,r)),"string"==typeof t&&o[t]()})}),t.Typed=i;var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"_",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);

$(function() {
    $('#typed').typed({
        strings: ["custo de setup", "mensalidade", "tarifas de cancelamento", "tarifas por usu??rio", "taxas ocultas", "taxas recorrentes", "burocracia"],
        typeSpeed: 30,
        loop: true,
        backSpeed: 20,
        backDelay: 500
    });
});

$("input[name='nome']" ).keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
    if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
    }
});

$("input[name='nome']" ).on('input', function() {
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
    $('#utm_term').val(getUrlParamByName('utm_term'));
    $('#utm_content').val(getUrlParamByName('utm_content'));

    $('#enviar').click(function() {
        
        var identificador = '/solucao-novo-varejo';
        var nome = $("input[name='nome']" );
        var sobrenome = $("input[name='sobrenome']" );
        var email = $("input[name='email']" );
        var telefone = $("input[name='tel']" );
        var empresa = $("input[name='empresa']" );
        var temcnpj = 'Sim';
        var cargo = $("select[name='cargo']" );
        var setormercado = $("select[name='setormercado']" );
        var area = $("select[name='area']" );
        var transacionado = $("select[name='transacionado']" );
        var contas = $("select[name='contas']" );
        var desenvolvimento = $("select[name='dev-proprio']" );
        var ajuda = $("select[name='ajuda']" );
        var sujestao = $("input[name='sujestao']" );

        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');
        var utm_term = $('#utm_term');
        var utm_content = $('#utm_content');

        var fonte = 'Contato Comercial';

        if (!nome.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe seu nome',
                timer: 2000,
                onAfterClose: () => {
                    nome.focus();
                }
            });
        } else if (!sobrenome.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe seu sobrenome',
                timer: 2000,
                onAfterClose: () => {
                    sobrenome.focus();
                }
            });
        } else if (!validacaoEmail(email.val().toLowerCase())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe um e-mail v??lido',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!emailCorporativo(email.val().toLowerCase())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe um e-mail comercial',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!telefone.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe seu telefone',
                timer: 2000,
                onAfterClose: () => {
                    telefone.focus();
                }
            });
        }  else if (
            telefone.val() == '(99) 9999-9999' ||
            telefone.val() == '(00) 0000-0000' ||
            telefone.val() == '(11) 1111-1111' ||
            telefone.val() == '(22) 2222-2222' ||
            telefone.val() == '(33) 3333-3333' ||
            telefone.val() == '(44) 4444-4444' ||
            telefone.val() == '(55) 5555-5555' ||
            telefone.val() == '(66) 6666-6666' ||
            telefone.val() == '(77) 7777-7777' ||
            telefone.val() == '(88) 8888-8888' ||
            telefone.val() == '(99) 99999-9999' ||
            telefone.val() == '(00) 00000-0000' ||
            telefone.val() == '(11) 11111-1111' ||
            telefone.val() == '(22) 22222-2222' ||
            telefone.val() == '(33) 33333-3333' ||
            telefone.val() == '(44) 44444-4444' ||
            telefone.val() == '(55) 55555-5555' ||
            telefone.val() == '(66) 66666-6666' ||
            telefone.val() == '(77) 77777-7777' ||
            telefone.val() == '(88) 88888-8888'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe um telefone v??lido',
                timer: 2000,
                onAfterClose: () => {
                    telefone.focus();
                }
            });
        } else if (!empresa.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe sua empresa',
                timer: 2000,
                onAfterClose: () => {
                    empresa.focus();
                }
            });
        } else if (cargo.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe seu cargo',
                timer: 2000,
                onAfterClose: () => {
                    cargo.focus();
                }
            });
        } else if (setormercado.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe seu Setor de mercado',
                timer: 2000,
                onAfterClose: () => {
                    setormercado.focus();
                }
            });
        } else if (area.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe a ??rea de interesse',
                timer: 2000,
                onAfterClose: () => {
                    area.focus();
                }
            });
        } else if (area.val() == 'Pagamentos' && transacionado.val() == 'nulo') {
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe o valor transacionado',
                timer: 2000,
                onAfterClose: () => {
                    transacionado.focus();
                }
            });
        } else if (area.val() == 'Banking' && contas.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe o potencial de contas bancarias',
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                }
            });
        } else if((area.val() == 'Pagamentos/Banking' && transacionado.val() == 'nulo')){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe o valor transacionado',
                timer: 2000,
                onAfterClose: () => {
                    transacionado.focus();
                }
            });
        } else if (area.val() == 'Pagamentos/Banking' && contas.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe o potencial de contas bancarias',
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                }
            });
        } else if (desenvolvimento.val() == 'Banking' && contas.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe se tem time de desenvolvimento pr??prio',
                timer: 2000,
                onAfterClose: () => {
                    desenvolvimento.focus();
                }
            });
        } else if (desenvolvimento.val() == 'Pagamentos/Banking' && contas.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe se tem time de desenvolvimento pr??prio',
                timer: 2000,
                onAfterClose: () => {
                    desenvolvimento.focus();
                }
            });
        } else if (ajuda.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Informe o que a Zoop poderia ajudar',
                timer: 2000,
                onAfterClose: () => {
                    ajuda.focus();
                }
            });
        } else if (!$('#optin').is(':checked')){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigat??rio',
                text: 'Necess??rio dar ci??ncia em receber comunica????es',
                timer: 2000,
                onAfterClose: () => {
                    contas.focus();
                }
            });
        } else {

            $("#enviar").html('Enviando...');
            $("#enviar").css('pointer-events','none');

            var sendRD = [
                { name: 'identificador', value: identificador},
                { name: 'Fonte', value: fonte},
                { name: 'Nome', value: nome.val()},
                { name: 'Sobrenome', value: sobrenome.val()},
                { name: 'email', value: email.val()},
                { name: 'telefone', value: telefone.val()},
                { name: 'empresa', value: empresa.val()},
                { name: 'Possui CNPJ?', value: temcnpj},
                { name: 'Setor de mercado', value: setormercado.val()},
                { name: 'Cargo', value: cargo.val()},
                { name: '??reas de Interesse', value: area.val()},
                { name: 'Faturamento m??dio mensal dos seus clientes', value: transacionado.val()},
                { name: 'Potencial n??mero de contas banc??rias', value: contas.val()},
                { name: 'Voc?? tem um time de desenvolvimento pr??prio?', value: desenvolvimento.val()},
                { name: 'Como a Zoop poderia te ajudar hoje?', value: ajuda.val()},
                { name: 'Algo mais que gostaria de dizer?', value: sujestao.val()},
                { name: 'privacy_data[communications]', value: '1'},
                { name: 'utm_source', value: utm_source.val()},
                { name: 'utm_medium', value: utm_medium.val()},
                { name: 'utm_campaign', value: utm_campaign.val()},
                { name: 'utm_term', value: utm_term.val()},
                { name: 'utm_content', value: utm_content.val()},
                { name: 'url_pagina', value: window.location.href},
                { name: 'token_rdstation', value: '1d5df0c08ce8734ee6677ffa08df91bc'}
            ];

            RdIntegration.post(sendRD);



            setTimeout(function(){ 
                window.location.href = "./obrigado.html";
             }, 2000);

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