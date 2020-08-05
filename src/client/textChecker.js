function textChecker(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (!inputText || inputText.length == 0){
        return false;
    }
    else{
        return true;
    }
    
}

export { textChecker }
