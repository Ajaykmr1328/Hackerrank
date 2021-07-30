function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
     let cost;
     let tax;
     let tip;
     tax=Number(tax_percent)*Number(meal_cost)/100;
     tip=Number(tip_percent)*Number(meal_cost)/100;
     cost=Number(meal_cost)+Number(tip)+Number(tax);
     console.log(Math.round(cost));
}
