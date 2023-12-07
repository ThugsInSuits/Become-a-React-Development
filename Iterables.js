let countdownIterator = {
  countdown: 20,
  next(){
    this.countdown -= 1;
    return {
      done: this.countdown === 0,
      value: this.countdown;
    };
  }
};

let countdownIterable = {
  [Symbol.iterator](){
    return Object.assign({},countdownIterable)
  }
}