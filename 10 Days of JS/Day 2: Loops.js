function vowelsAndConsonants(s) {
    let vowel=['a','e','i','o','u'];
    for(let i=0;i<s.length;i++){
        if(vowel.indexOf(s[i])>-1){
            console.log(s[i]);
        }
    }
    for(var i=0;i<s.length;i++){
        if(vowel.indexOf(s[i])<0){
            console.log(s[i]);
        }
    }
}
