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

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0