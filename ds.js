const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = async () => {
    const ans = await rl.question('line', input => input) 
    rl.close()
    return ans
}
ask()


const summ = async (a, b) => a + b
    


summ()
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let rlA = await rl.question()
// let rlB= await rl.question()

// rl.close()

// console.log(rlA, rlB)