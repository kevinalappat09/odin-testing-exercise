function analyzeArray(arr) {
    let min_num = arr[0];
    let max_num = arr[0];
    let sum=0, avg;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] < min_num) {
            min_num = arr[i];
        }
        if(arr[i] > max_num) {
            max_num = arr[i];
        }
        sum+=arr[i];
    }
    avg = sum / arr.length;

    let obj = {
        average : avg,
        min : min_num,
        max : max_num,
        length : arr.length
    };

    return obj;
}

module.exports = analyzeArray;