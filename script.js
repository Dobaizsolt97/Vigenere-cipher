let message = document.querySelector(".message");
let key = document.querySelector(".password");
let result = document.querySelector(".result");
let button = document.querySelector(".btn");
let button1 = document.querySelector(".btn1");
let copy = document.querySelector(".copy");
let word = document.querySelector(".word");
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "?",
  "!",
  "'",
  "_",
  "-",
  "&",
  "@",
  "#",
  "$",
  "%",
  "*",
  "(",
  ")",
  " "
];

button.addEventListener("click", encript);
button1.addEventListener("click", decript);

function decript() {
  let message_array = message.value.split("");
  let key_array = key.value.split("");
  let diff = message_array.length - key_array.length;
  let multyplier = Math.ceil(diff / key_array.length + 1);
  let new_key = key.value.repeat(multyplier);
  let new_key_array = new_key.split("");
  while (new_key_array.length > message_array.length) {
    new_key_array.pop();
  }
  let message_nr = message_array.map(function(letter) {
    return alphabet.indexOf(letter.toUpperCase());
  });

  let key_nr = new_key_array.map(function(letter) {
    return alphabet.indexOf(letter.toUpperCase());
  });

  let encoded_nr = [];
  for (i = 0; i < key_nr.length; i++) {
    let adding = message_nr[i] - key_nr[i];

    if (adding < 0) {
      adding = adding + 51;
    }
    if (key_nr[i] - message_nr[i] == 1) {
      adding = 51;
    }

    encoded_nr.push(adding);
  }
  let encoded_message = encoded_nr.map(function(num) {
    return alphabet[num];
  });
  let encoded = encoded_message.join("");
  result.textContent = encoded;
  word.textContent = "decrypted";
}

function encript() {
  let message_array = message.value.split("");
  let key_array = key.value.split("");
  let diff = message_array.length - key_array.length;
  let multyplier = Math.ceil(diff / key_array.length + 1);
  let new_key = key.value.repeat(multyplier);
  let new_key_array = new_key.split("");
  while (new_key_array.length > message_array.length) {
    new_key_array.pop();
  }
  let message_nr = message_array.map(function(letter) {
    return alphabet.indexOf(letter.toUpperCase());
  });
  let key_nr = new_key_array.map(function(letter) {
    return alphabet.indexOf(letter.toUpperCase());
  });
  let encoded_nr = [];
  for (i = 0; i < key_nr.length; i++) {
    let adding = key_nr[i] + message_nr[i];
    if (adding > 51) {
      adding = adding - 51;
    }
    if (message_nr[i] == 51 && key_nr[i] != 0) {
      adding = adding - 1;
    }
    encoded_nr.push(adding);
  }
  let encoded_message = encoded_nr.map(function(num) {
    return alphabet[num];
  });
  let encoded = encoded_message.join("");

  result.textContent = encoded;
}
copy.addEventListener("click", function() {
  let textarea = document.querySelector(".result");
  textarea.select();
  document.execCommand("copy");
  result.textContent = "COPPIED!";
});

