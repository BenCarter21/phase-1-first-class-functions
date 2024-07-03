function receivesAFunction(callback) {
callback();
};

function returnsANamedFunction() {
    let smileMore = function() {
      console.log("Me");
    };
    return smileMore;
  }
  
  let my = returnsANamedFunction();
  myFunction();

  function returnsAnAnonymousFunction() {
    return function() {
      1 + 1
    };
  }
