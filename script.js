// search input
const searchUser = document.getElementById('searchUser');
// event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== '') {
    console.log(userText)
  }
});