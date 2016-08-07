import test from 'tape'

//ATBASH

function decipher(key, secret){

  console.log(key, secret, "-----")

  var constArr = CONSTANT.split("")
  var ciphArr = key.split("")
  console.log(constArr, "constArr")
  console.log(ciphArr, "ciphArr")
  var cryptArr = secret.split('')

  var deciphered = new Array(cryptArr.length)


  for (var i = 0; i <= crypted.length; i++){

    var ind = ciphArr.indexOf(cryptArr[i])
    deciphered[i] = constArr[ind]

  }

  return deciphered
}

var CONSTANT = 'abcdefghijklmnopqrstuvwxyz'
//example 1
var cipher1 = 'zodvqukgwefbyitmrsplhacxnj'
var encrypted1 = 'dzs'
var original1  = 'car'

//example 2
var cipher2 = 'xipmuzfkbrlwotjancqgveshdy'
var encrypted2 = 'skd qj qucbjvq?'
var original2 = 'why so serious?'

test('-TESTS- atbash', function (t) {
  t.ok(decipher(encrypted1))

  t.equal(decipher(cipher1, encrypted1), original1, "correctly deciphers example 1")
  t.equal(decipher(cipher2, encrypted2), original2, "correctly deciphers example 2")
  // t.ok("ok")
  // t.notEqual(actual, expected, 'not equal');
  // t.equal(actual, expected, 'equal');
  t.end()
});









//FIND LONGEST WORD IN A SENTENCE

//if there are multiple words with the same length, that is the longest, return first longest word

function longestWord(x) {
  var longest = ""
  var words = x.split(/\W+/)
  for(var i = words.length-1; i >=0; i--){
    if(words[i].length >= longest.length) {
      longest = words[i]
    }
  }
  return longest
}


var word = "hello Lauren&%$my name is $#reallylongalpharyword"
var equallyLongWords ="hellooooox Lauren&%$my helloooooy name is $#really long alpha ry word"

test('-TESTS- longest word', function (t) {
  t.equal(longestWord(word),"reallylongalpharyword", "spits out right words" )
  t.ok(longestWord(word), "returns a thing")
  t.equal(longestWord(equallyLongWords),"hellooooox", "spits out first instance of longest word" )
  // t.ok("ok")
  // t.notEqual(actual, expected, 'not equal');
  // t.equal(actual, expected, 'equal');
  t.end()
});




