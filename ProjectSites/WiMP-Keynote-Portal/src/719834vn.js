const shift = 3; // Verschiebung für Caesar-Verschlüsselung

function caesarEncrypt(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
}

function caesarDecrypt(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
}

function base64Encode(text) {
    return btoa(text);
}

function base64Decode(text) {
    return atob(text);
}

function encrypt(text) {
    const caesarEncrypted = caesarEncrypt(text);
    return base64Encode(caesarEncrypted);
}

function decrypt(text) {
    const base64Decoded = base64Decode(text);
    return caesarDecrypt(base64Decoded);
}


function Login(){
    if(encrypt(document.getElementById('password').value) === "WmxTUC0yNC8wNi8yNCM="){
        window.location.href = decrypt('Li4vUEhWLVpsU1AvbHFnaGEua3dwbw==');
    }
    else{
        document.getElementById('failedLoggin').style.display = "block";
    }
}
