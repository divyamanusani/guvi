(function (n) {
    var primeArr = [];
    for (i = 2; i <= n; i++) {
        count = 0;
        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            primeArr.push(i);
        }
    }
    console.log(primeArr.join());
})(100);