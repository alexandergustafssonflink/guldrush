function ozToGram(weightInOz) {
  let gram = weightInOz * 31.1035;
  let newGram = Number(gram.toFixed(2));
  return newGram;
}

module.exports = ozToGram;
