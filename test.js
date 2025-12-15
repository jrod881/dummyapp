const assert = require("assert");
const { add } = require("./index");

assert.strictEqual(add(184, 3), 187);
console.log("All test passed");