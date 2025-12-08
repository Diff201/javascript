const originalPhrase = 'the quick brown fox jumps over the lazy dog';
const codPhrase = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';

const decodePhrase = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';

const newDecodePhrase = {};

for (let i = 0; i < codPhrase.length; i++) {
  const c = codPhrase[i];
  const o = originalPhrase[i];
  if (c !== ' ' && o !== ' ') {
    newDecodePhrase[c] = o;
  }
}

const decodeText = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (newDecodePhrase[char]) {
      result += newDecodePhrase[char];
    } else {
      result += char;
    }
  }
  return result;
};

console.log(decodeText(decodePhrase));
