function main() {
    const N = parseInt(readLine().trim(), 10);
    if(N%2!=0){
        console.log('Weird');
    }
    else if(N%2==0&&N<5){
        console.log('Not Weird');
    }
    else if(N%2==0&&N<=20&&N>=6){
        console.log('Weird');
    }
    else{
        console.log('Not Weird');
    }
}
