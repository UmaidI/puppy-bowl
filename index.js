const getPuppyDetails = async () => {
const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
const pupInfo = await response.json();
const allPlayers = pupInfo.data.players
const playersNamesLIs = allPlayers.map((singlePlayer) => {
  return ` <li>${singlePlayer.name}</li>
  `
})
const OL = document.querySelector(`ol`)
playersNamesLIs 
OL.innerHTML = playersNamesLIs.join(``);
}
const renderAllPuppies = async () => {
await getPuppyDetails();


const AllLIs =document.querySelectorAll('li');
console.log(AllLIs);
}