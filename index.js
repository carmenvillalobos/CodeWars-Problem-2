// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

/**
 * @param {number} millis
 */

 async function sleep(millis) {
    function callback(resolve, reject){
        setTimeout(resolve, millis)
    }
    return new Promise(callback)
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */