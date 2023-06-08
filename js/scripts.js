function vowelCounter (vowel, vowel, word) {
    const wordArray = word.toLowerCase().split("");
    console.log(wordArray)
    for (let i = 0; i < wordArray.length; i ++) {
        console.log(i);
        if (vowel === wordArray[i]){
            return i;
        }
    } console.log(vowel)
    console.log(wordArray[i])
    return -1;
}
// function vowelCounter (word) {
//     let wordCase = word.toLowerCase();
//     if (wordCase === "a" || wordCase === "e" || wordCase === "i" || wordCase === "o" || wordCase === "u"){
//         return 1;
//     }
//     return 0;

// function vowelCounter (word) {
//     const wordArray = word.toLowerCase().split("");
//     console.log(wordArray)
//     for (let i = 0; i < wordArray.length; i ++);
//     if (word === wordArray[i] && wordArray === "a" || wordArray === "e" || wordArray === "i" || wordArray === "o" || wordArray === "u"){
//         return i;
//     }
//     return 0;
// }