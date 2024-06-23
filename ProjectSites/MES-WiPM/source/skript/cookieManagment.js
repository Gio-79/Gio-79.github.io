var cookiesConfirmed;

function readCookies(){
    if(String(document.cookie).includes('cookieconsent_status=comfirmed')){
        cookiesConfirmed = true;
    }
    else{
        cookiesConfirmed = false;
        document.getElementById('CookieConsentWindow').style.display = 'block';
    }
}

function consentCookies(){
    document.getElementById('CookieConsentWindow').style.display = 'none';
    var date = new Date();
    date.setMonth(date.getMonth() + 2);
    var expires = "; expires=" + date.toUTCString();
    document.cookie = 'cookieconsent_status=comfirmed' + expires + '; path=/';
    cookiesConfirmed = true;
}