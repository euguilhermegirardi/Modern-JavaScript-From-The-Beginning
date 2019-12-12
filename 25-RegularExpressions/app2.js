let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacters Symbols
re = /^h/i; // Must start with
re = /World$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any ONE character

// String to match
const str = 'H*llo';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
