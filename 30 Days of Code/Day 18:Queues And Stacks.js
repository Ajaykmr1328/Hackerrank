function Solution(){
  //Write your code here
  let stack=[],queue=[];
  this.pushCharacter=c=>{stack.push(c)};
  this.popCharacter=()=>{return stack.pop()};
  this.enqueueCharacter=c=>{stack.push(c)};
  this.dequeueCharacter=()=>{return stack.shift()};
}
