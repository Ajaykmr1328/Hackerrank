function reverseString(s) {
        let newString;
        try{
        s=s.split("").reverse().join("");
        }catch(exception){
            console.log(exception.message);
        }finally{
            console.log(s);
        }
}
