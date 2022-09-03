/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let buyPrice = prices[0];
    let profit = 0;
    
    // go through array to decide if there is profit 
    for(let i=0; i < prices.length-1; i++){
        let tempProfit = prices[i+1]-prices[i];
        
        if(tempProfit > 0){
            if(prices[i] < buyPrice){
                buyPrice=prices[i];
            }
            
            if(prices[i+1]-buyPrice > profit){
                profit = prices[i+1] - buyPrice
            }
    }
    }
    return profit 
};