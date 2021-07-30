function processData(input) {
    message=input.split('\n');
    let num=parseInt(message[0]);
    for(i=0;i<num;i++){
     let m=message[i+1];
     let length=m.length;
     let nums=m.split('');
     let ra='';
     let rb='';
     for(let j=0;j<length;j++){
        if(j%2==0)
          ra+=nums[j];
        else
          rb+=nums[j];  
     }     
     console.log(ra+' '+rb);
    }
}
