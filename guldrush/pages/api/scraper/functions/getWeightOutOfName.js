function getWeightOutOfName(name) {
    if (name.includes("1000 gram")) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "1000")
        let newResult = parseInt(result.join(''));
        return newResult; 
    } else if(name.includes("5 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "5")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
    else if(name.includes("1 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "1")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
    else if(name.includes("2 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "2")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
    else if(name.includes("10 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "10")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
      else if(name.includes("20 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "20")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
    else if(name.includes("31") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "31,1")
        let newResult = Number(result.join(''));
        return newResult; 
    }
       else if(name.includes("50 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "50")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }
      else if(name.includes("100 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "100")
        let newResult = parseInt(result.join(''));
        return newResult; 
    }

     else if(name.includes("500 gram") ) {
        let newName = name.split(' ')
        result = newName.filter(w => w === "500")
        let newResult = parseInt(result.join(''));
        return newResult; 
    } 
    else {
        return null; 
    }
}

module.exports = getWeightOutOfName; 