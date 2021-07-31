function sides(literals, ...expressions) {
    let area=expressions[0];
    let perimeter=expressions[1];
    let s1=(perimeter+Math.sqrt(perimeter*perimeter-(16*area)))/4;
    let s2=(perimeter-Math.sqrt(perimeter*perimeter-(16*area)))/4;
    var array=[s1,s2];
    array.sort(function(a,b){return a-b});
    return array;
}
