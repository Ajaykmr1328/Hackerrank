function staircase(n) {
    // Write your code here
for(let space=n,hash=1;0<space;space--,hash++){
    console.log(' '.repeat(space-1)+'#'.repeat(hash))
}
}
