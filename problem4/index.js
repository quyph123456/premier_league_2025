//Problem 4: Three ways to sum to n

//Do phuc tap: 0(1)
function sum_to_n_c(n) {
    return (n * (n + 1)) / 2;
  }
  
  //Do phuc tap: 0(n)
  function sum_to_n_b(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
      sum = sum + i;
      i++;
    }
    return sum;
  }
  
  //Do phuc tap: 0(n)
  function sum_to_n_a(n) {
    if (n === 1) return 1;
    return n + sum_to_n_a(n - 1);
  }
  
  let a = sum_to_n_a(6);
  console.log(a);
  
  let b = sum_to_n_b(6);
  console.log(b);
  
  let c = sum_to_n_c(6);
  console.log(c);