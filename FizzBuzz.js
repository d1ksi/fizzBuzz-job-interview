function fizzBuzz(n) {
   if (typeof n === 'number') {
      n = [n];
   } else if (!Array.isArray(n)) {
      return [];
   }
   const answer = [];
   for (let i = 0; i < n.length; i++) {
      const num = n[i];
      if (isNaN(num)) {
         answer.push("NaN");
      } else {
         const fizz = num % 3 === 0;
         const buzz = num % 5 === 0;
         answer.push(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : num.toString());
      }
   }
   return answer;
}