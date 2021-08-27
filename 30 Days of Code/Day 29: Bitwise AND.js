function bitwiseAnd(N, K) {
    // Write your code here
    let p=0
    for(let i=1;i<=N;i++){
        for(let j=i+1;j<=N;j++){
            let and=i&j
            if(and<K){
                if(and>p) p=and
            }
        }
    }
    return p
}
