// part 1
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'] // li 3, div 3, p 3, h1 4, ol 1, br 1
var counts = {}

for (var i = 0; i < tags.length; i++) {
    if (tags[i] in counts) {
        counts[tags[i]]++;
    } else {
        counts[tags[i]] = 1
    }
}

console.log(counts)

// part 2
var nums = [10, 20, 30, 50, 235, 3000, 5000439857]

for (var d = 0; d < nums.length; d++) {
    String(nums[d])[0] === "1" || String(nums[d])[0] === "2" || String(nums[d])[0] === "5" ? console.log(nums[d]) : NaN;
}