class Stack{
  constructor(){
    this._elements = [];
  }

  get len(){
    return this._elements.length;
  }

  push(element) {
    this._elements.push(element);
  }

  pop(){
    this._elements.pop();
  }
}

function fib2( n,acc1 = 1,acc2 = 0 )
{
  if(n <= 0) return 0;
  if(n === 1) return 1;

  return fib2(n-1,acc1 + acc2,acc1)
}

function fib(n){
  if (n <= 1) {
    return n;
  }

  let acc1 =1;
  let acc2 = 0;
  for(let i = 2;i<= n;i++) {
    // [acc1,acc2] = [acc1+acc2,acc1];
    acc1 = acc1 + acc2;
    acc2 = acc2;
  }
  return acc1;



}

