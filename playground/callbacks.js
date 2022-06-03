// setTimeout(() => {
//     console.log('Two seconds are up.')
// },
// 2000)
// //setTimeout is an asynchronous, node-provided api.


// const names = ['slim', 'Jesse', 'Rena']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// // geocode request simulatoin

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 2,
//             longitude: 1
//         }
//         callback(data)
//     }, 3000);
// }

// geocode('Mami', (anythingIWantToCallIt) => { //this callback function get run inside of geocode function
//     console.log(anythingIWantToCallIt)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
        console.log(sum) // Should print: 5 
})

