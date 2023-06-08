### TESTS
#### Describe: vowelCounter();
Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

<!-- function vowelCounter (word) {
    if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u"){
        return 1;
    }
    return 0;
} -->

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1
<!-- function vowelCounter (word) {
    let wordCase = word.toLowerCase();
    if (wordCase === "a" || wordCase === "e" || wordCase === "i" || wordCase === "o" || wordCase === "u"){
        return 1;
    }
    return 0;
} -->

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

<!-- function vowelCounter (vowel, word) {
    const wordArray = word.toLowerCase().split("");
    console.log(wordArray)
    for (let i = 0; i < wordArray.length; i ++);
    console.log(i);
    if (vowel === wordArray[i]){
        return i;
    } console.log(vowel)
    console.log(wordArray[i])
    return -1; -->