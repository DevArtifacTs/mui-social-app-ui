function breakingRecords(scores) {
    console.log(scores);
    // Write your code here
    let max = scores[0];
    let min = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for( let i = 0; i < scores.length; i++ ){
        console.log('scores[i]', scores[i]);
        if(scores[i] > max ){
            max = scores[i];
            console.log('max', max);
            maxCount += 1 ;
            console.log('maxCount', maxCount);
        }
        if( scores[i] < min){
            min = scores[i]
            console.log('min', min);    
            minCount += 1 ;
            console.log('minCount', minCount);
        }
    }
    return [maxCount, minCount];
}

const result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
console.log(result);