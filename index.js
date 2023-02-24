document.querySelector('#theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle("dark");
})

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 

function getRandomCharacter(){
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePassword(){
  let randomPassword = "";
  
  for(let i = 0; i < 12 ; i++){
   randomPassword += getRandomCharacter();
  }
  return randomPassword;
  
}
let generatedPasswordOne = "";
let generatedPasswordTwo = "";
function passwordGenerator(){
   generatedPasswordOne = generatePassword();
  document.getElementById("pass-el-1").textContent = generatedPasswordOne;
   generatedPasswordTwo = generatePassword();
  document.getElementById("pass-el-2").textContent = generatedPasswordTwo;
}

let oldTextOne = document.getElementById("pass-el-1").textContent;
let oldTextTwo = document.getElementById("pass-el-1").textContent;

function copyText(id){
  let textToCopy = document.getElementById(id).textContent;
  navigator.clipboard.writeText(textToCopy);

  document.getElementById(id).textContent = "Copied to Clipboard!" 
  setTimeout(() => {
    document.getElementById(id).textContent = textToCopy;
  }, 2000)


}






