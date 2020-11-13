function getWeightInGramsFromLibertySilver(string) {
  const arr = string.split(" ");

  if (arr.includes("gram")) {
    const indexOfGram = arr.indexOf("gram");

    const weightString = arr[indexOfGram - 1];
    const weight = Number(weightString.replace("(", "").replace(",", "."));
    return weight;
  } else if (arr.includes("gram)")) {
    const indexOfGram = arr.indexOf("gram)");
    const weightString = arr[indexOfGram - 1];
    const weight = Number(weightString.replace("(", "").replace(",", "."));
    return weight;
  }
}

module.exports = getWeightInGramsFromLibertySilver;
