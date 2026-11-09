function randint(mini, maxi){
    return Math.floor(Math.random() * (maxi - mini + 1) + mini);
}

function generate(){
    smallChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    bigChars = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    specialChars = '!@#$%^&*'.split('');

    minLen = parseInt(document.getElementById("min").value);
    maxLen = parseInt(document.getElementById("max").value);
    big = document.getElementById("big").checked;
    special = document.getElementById("special").checked;
    if(isNaN(minLen)){
        minLen = 6;
    }
    if(isNaN(maxLen)){
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
    console.log(len);
    password = "";
    for(i = 0; i < len; i++){
        password = password + possible[randint(0, possible.length-1)];
    }

    document.querySelector("h1").innerHTML = password;
    alert(password);
}
