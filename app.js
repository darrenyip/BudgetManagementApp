// Plan
//1. event handler--bottons
//2. get input values
//3. add new item to data
//4. add itmes to UI
//5. calcualte part
//6. update UI
//then Yeah!!

//Lets get started
//1. UI module
//    get input
//    add new item to UI
//    update
//
//2. data module
//     add items to data structure
//     calcualte
//3. controller module
//    event handler

//update log  1. modules setup!


var budgetController = (function(){
  var x = 1;
  var add = function(a){
    return x+a;
  }
  return {
    publicTest: function(b){
      return add(b);
    }
  }

})();

var UIController = (function(){

})();

var controller = (function(budgetCtrl, UICtrl){
  var z = budgetCtrl.publicTest(5);
  return{
    anotherPublic: function(){
      console.log(z);
    }
  }

})(budgetController,UIController);

//   :)
