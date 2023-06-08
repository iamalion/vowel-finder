function vowelCounter (word) {
    let wordCase = word.toLowerCase();
    if (wordCase === "a" || wordCase === "e" || wordCase === "i" || wordCase === "o" || wordCase === "u"){
        return 1;
    }
    return 0;
}
