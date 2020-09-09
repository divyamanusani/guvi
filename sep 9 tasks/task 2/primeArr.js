var numArr=[...Array(101).keys()].slice(1);


const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
  
const myPrimeArr = numArr.filter(ele => isPrime(ele));
console.log(myPrimeArr);