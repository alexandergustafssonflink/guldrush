function getWeightTavex(name) {
  if (name.includes("oz")) {
    let result = name.split(" ");
    let oz = result[0];

    if (oz == "1") {
      return 1;
    } else if (oz == "1/2") {
      return 0.5;
    } else if (oz == "1/4") {
      return 0.25;
    } else if (oz == "1/10") {
      return 0.1;
    } else if (oz == "1/20") {
      return 0.05;
    }
  } else if (name.includes("30 g")) {
    return 0.9;
  }
}

module.exports = getWeightTavex;
