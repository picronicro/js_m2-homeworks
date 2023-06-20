function avg(numbers) {
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    console.log(total / numbers.length)
}

avg([12, 3, 2, 8, 9, 4])

var varType = function (value) {
    console.log(typeof value)
}

varType("pizza")
varType(null)
varType([1, 2, 3])
varType({
    nick: "eldegende",
    age: 15,
    likes: ["games", "pizza", "especially minecraft", "java"]
})

var arr = [[[[[[[2]]]]]]]
console.log(arr.filter(val => val.includes(2)))