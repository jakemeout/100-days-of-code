

const createSet = (arr) => {

    let newSet = new Set();

    arr.map((num) => newSet.add(num));
    console.log(newSet)
    console.log(newSet.has(12));
    console.log()
}

let a  = [1,2,3,4,5,6,7,8,9,0,9,8,6,5,4,3,2]


createSet(a)
