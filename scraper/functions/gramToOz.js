function gramToOz(weightInGram) {
  let oz = weightInGram * 0.0321507;
  let newOz = Number(oz.toFixed(2));
  return newOz;
}

module.exports = gramToOz;
