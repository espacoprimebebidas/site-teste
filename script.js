function copiar(el){
    el.parentElement.querySelector("input").select();
    navigator.clipboard.writeText(el.parentElement.querySelector("input").value);
}
function apagar(el){
    el.parentElement.querySelector("input").value = "";
    el.parentElement.querySelector("input").select();
}
function removerCaracEsp(){
    var a = document.querySelector("input[name='inputRemover']").value.replace(/[^a-zA-Z0-9 ]|\s/g, '');
    document.querySelector("input[name='inputRemover']").value = a;
}
function maiuscula(){
    var a = document.querySelector("input[name='inputAlterarMM']").value.toUpperCase();
    document.querySelector("input[name='inputAlterarMM']").value = a;
}
function minuscula(){
    var a = document.querySelector("input[name='inputAlterarMM']").value.toLowerCase();
    document.querySelector("input[name='inputAlterarMM']").value = a;
}
function primeiraMaiuscula(){
    var a = document.querySelector("input[name='inputAlterarMM']").value.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());;
    document.querySelector("input[name='inputAlterarMM']").value = a;
}

if(document.cookie.indexOf('visitado') == -1 && window.location.href.indexOf("politica-") == -1){
    //insertCss <3
    function insertCss(code){
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) style.styleSheet.cssText = code;
        else style.innerHTML = code;
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    var visit = document.createElement("div");
    visit.className = "divMaior18";
    visit.innerHTML = "<div id='intDivMaior'><p>Você tem mais de 18 anos?</p><button id='fecharDivMaior'>Sim</button><button id='naoSouMaior'>Não</button><p>A venda de bebidas alcoólicas é <b>proibida para menores de 18 anos</b>.<br><br>Usamos rastreamento e um sistema de cookies para armazenamento de dados. Clicando em Sim você concorda com a nossa <a href='https://www.espacoprime.com.br/politica-de-privacidade'>Política de Privacidade</a>.</p><span><a href='https://www.jusbrasil.com.br/artigos/vender-ou-oferecer-bebidas-a-menores-de-idade-e-crime/921235770' target='_blank'>Lei nº 13.106/15</a></span></div>";
    insertCss("body, html{overflow: hidden;}.divMaior18{position: absolute;display: inline-flex;width: 100%;height: 100%;top: 0;left: 0;padding: 1rem;text-align: center;border-radius: 5px;background-color: #69696969;z-index: 10000;}#intDivMaior{height: min-content;width: 100%;max-width: 400px;background-color: #000;background-size: cover;background-position: center;color: #fff;margin: auto;padding-bottom: 20px;border-radius: 25px;box-shadow: 0px 0px 7px #fff;}#intDivMaior p{font-size: 20px;margin: 30px 20px 10px;text-shadow: 0px 1px 3px #000;-webkit-user-select: none;-webkit-touch-callout: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}#intDivMaior a{color: #fff;text-decoration: underline;}#intDivMaior button{width: 51%;height: 30px;background-size: 250%;background-image: linear-gradient(-45deg, #1a1818 50%, #fff 50%);color: #000;border-radius: 3px;margin: 0.1rem auto;transition: .3s;}#intDivMaior button:hover{background-position: right;color: #fff;}");
    document.querySelector(".topbar-bg").append(visit);
    document.getElementById('fecharDivMaior').onclick = function(){
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 24000 * 365);
        document.cookie = "visitado=true; expires=" + now.toUTCString() + "; path=/";
        insertCss("body, html{overflow: unset;}");
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
    document.getElementById('naoSouMaior').onclick = function(){
        document.getElementById("intDivMaior").innerHTML = "<p>Art. 243. Vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, de qualquer forma, a criança ou a adolescente, bebida alcoólica ou, sem justa causa, outros produtos cujos componentes possam causar dependência física ou psíquica: (Redação dada pela Lei nº 13.106, de 2015).</p><button onclick='location.href = `https://www.google.com.br`;'>Sair</button>";
        insertCss("#intDivMaior p{font-size: 18px;background-color: #00000075;margin-bottom: 1.5rem;}");
        return false;
    };
}