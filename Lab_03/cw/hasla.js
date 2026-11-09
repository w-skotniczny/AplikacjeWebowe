function randint(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function generate(){
    smallChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    bigChars = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    specialChars = '!@#$%^&*'.split('');

    minLen = document.getElementById("min").value;
    maxLen = document.getElementById("max").value;
    big = document.getElementById("big").checked;
    special = document.getElementById("special").checked;
    if(minLen == ""){
        minLen = 6;
    }
    if(maxLen == ""){
        maxLen = 12;
    }

    possible = smallChars;
    if(big){
        possible = possible.concat(bigChars);
    }
    if(special){
        possible = possible.concat(specialChars);
    }

    len = randint(minLen, maxLen);
    password = "";
    for(i = 0; i < len; i++){
        password = password + possible[randint(0, possible.length)];
    }

    document.querySelector("h1").innerHTML = password;
}
