// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
//Poor way to do it 
addFood(steak[0], '#steak', () => {//takes the first index of the array of strings and appends to the id and adds a callback
  addFood(steak[1], '#steak', () => {//which is the same function that also takes a callback till last index
    addFood(steak[2], '#steak', () =>{
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak');
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
.then(() => {//instead of adding a callback to the function we use .then which takes a callback (what you want to do after)
  addFood(mashPotatoes[1], '#mashPotatoes')
  .then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes')
    .then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes')
      .then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes');
      })
    })
  })
});

// Iteration 3 using async/await

  async function makeFood() {//creating async function
    //doing the steps manually
    // await addFood(brusselSprouts[0], '#brusselSprouts') 
    // await addFood(brusselSprouts[1], '#brusselSprouts')
    // await addFood(brusselSprouts[2], '#brusselSprouts')
    // await addFood(brusselSprouts[3], '#brusselSprouts')
    // await addFood(brusselSprouts[4], '#brusselSprouts')
    // await addFood(brusselSprouts[5], '#brusselSprouts')
    // await addFood(brusselSprouts[6], '#brusselSprouts')
    // await addFood(brusselSprouts[7], '#brusselSprouts')
    // await addFood(brusselSprouts[8], '#brusselSprouts')
    // using recurtion
    // if(step < brusselSprouts.length){
    //   await addFood(brusselSprouts[step], '#brusselSprouts') 
    //   return makeFood(step + 1)
    // }
    for(let i = 0;i < brusselSprouts.length;i++){ // using for loops
      await addFood(brusselSprouts[i], '#brusselSprouts')
    }
    }
  makeFood();
