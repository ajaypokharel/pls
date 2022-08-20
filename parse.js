
const nearley = require("nearley");
const grammar = require("./mypl.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try {
    parser.feed("a = 1")
    console.log(JSON.stringify(parser.results)); // [[[[["foo"],"\n"]]]]
} catch (e) {
    console.log(`Parse Failed: ${e.message}`)
}

