//
// Objective 1
// slowMath.add(6,2).then(result => {
//     console.log(result);
//     return slowMath.multiply(result, 2)
//     // Objective 2
// }).then (result => {
//     console.log(result);
//     return slowMath.divide(result, 4)
//     // Objective 3
// }).then (result => {
//     console.log(result);
//     return slowMath.subtract(result, 3)
//     // Objective 4
// }).then (result => {
//     console.log(result);
//     return slowMath.add(result, 98)
//     // Objective 5
// }).then (result => {
//     console.log(result);
//     return slowMath.remainder(result, 2)
//     // Objective 6
// }).then (result => {
//     console.log(result);
//     return slowMath.multiply(result, 50)
//     // Objective 7
// }).then (result => {
//     console.log(result);
//     return slowMath.remainder(result, 40)
//     // Objective 8
// }).then (result => {
//     console.log(result);
//     return slowMath.add(result, 32)
//     // Objective 9
// }).then (result => {
//     console.log(`The final result is ${result}`);
//     // Objective 10
// }).catch((err) =>{
// console.log(err)
// });


// }).catch((err) =>{
// console.log(err)
// });


// Using Async/Await
async function doMath() {
    try{
    let wait = await slowMath.add(6,2);
    console.log(wait);
    wait= await slowMath.multiply(wait, 2);
    console.log(wait);
    wait = await slowMath.divide(wait, 4);
    console.log(wait);
    wait = await slowMath.subtract(wait, 3);
    console.log(wait);
    wait = await slowMath.add(wait, 98);
    console.log(wait);
    wait = await slowMath.remainder(wait, 2);
    console.log(wait);
    wait = await slowMath.multiply(wait, 50);
    console.log(wait);
    wait = await slowMath.remainder(wait, 40)
    console.log(wait);
    wait = await slowMath.add(wait, 32)
    console.log(`The final result is ${wait}`);
} catch (error){
    console.log('Uhh-oh!')
    }
}
doMath();
