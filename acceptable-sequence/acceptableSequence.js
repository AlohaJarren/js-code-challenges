module.exports = function acceptableSequence(str) {
    //Attempt #1: return str.length === 1 && str.match(/a-z/i);
    //#1 (cont.): console.log(str);

    //Answer
    console.log ('str', str)
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < str.length; i++) {
        //console.log('str[i]', str[i])
       if (alphabet.indexOf(str[i]) !== -1) {
           if (str [i -1] !== "+" || str [i+1] !== "+") {
               return false;
           }
       }

    }
    return true;
}