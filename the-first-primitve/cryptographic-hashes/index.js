const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    return COLORS.find(c => toHex(sha256(utf8ToBytes(c))) === toHex(hash));
}

// Code Explanation - Line 9:
// ------
// The find function goes through each element within the COLORS array. 
// It returns the first element converted from a string representing a color 
// to a hash and then reconverted to a string(hexadecimal value) that matches 
// the supplied findColor hash's string.

module.exports = findColor;