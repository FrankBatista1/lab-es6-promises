/* CALL THIS FUNCTION FROM OTHER FILES LIKE */

/****** DO NOT TOUCH vvv *****/

function addFood(step, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector(id).innerHTML += `<li>${step}</li>`;//appends the argument to the html
      resolve(step);//Don't add rejections because we are not accounting for errors
      callback ? callback() : ''; // For iteration one check if there is a callback (if is true? calls it) if false doesn't return anything(empty string)
    }, Math.floor(Math.random() * 1000));// gets a random time when the function is executed
  });
}
/***** ^^^ DO NOT TOUCH *****/
