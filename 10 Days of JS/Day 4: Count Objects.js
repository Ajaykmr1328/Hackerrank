function getCount(objects) {
    let count=0;
    for(var index in objects){
       if(objects[index].x==objects[index].y)
         count++;
    }
    return count;
}
