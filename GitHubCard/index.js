/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
    
*/

axios
.get('https://api.github.com/users/emmacodes19')
.then(response => {
  console.log(response);
  const card = document.querySelector('.cards');
  let newCards = gitCard(response.data);
  card.appendChild(newCards);
  

  
})

.catch((error) => {
  console.log('some text', error);
});
  


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/




function gitCard(oneObject) {
  const 
  mainCard = document.createElement('div'),
  imgUrl = document.createElement('img'),
  infoCard = document.createElement('div'),
  names = document.createElement('h3'),
  userNames = document.createElement('p'),
  userLocation = document.createElement('p'),
  userProfile = document.createElement('p'),
  userProfileUrl = document.createElement('a'),
  userFollowers = document.createElement('p'),
  userFollowing = document.createElement('p'),
  userBio = document.createElement('p')

  mainCard.appendChild(imgUrl)
  mainCard.appendChild(infoCard)
  infoCard.appendChild(names)
  infoCard.appendChild(userNames)
  infoCard.appendChild(userLocation)
  infoCard.appendChild(userProfile)
  infoCard.appendChild(userProfileUrl)
  infoCard.appendChild(userFollowers)
  infoCard.appendChild(userFollowing)
  infoCard.appendChild(userBio)
  userProfile.appendChild(userProfileUrl)

  mainCard.classList.add('card')
  infoCard.classList.add('card-info')
  names.classList.add('name')
  userNames.classList.add('username')
  


  imgUrl.src = oneObject.avatar_url;
  names.textContent =`Name${oneObject.name}`;
  userNames.textContent = `Login ${oneObject.login}`;
  userLocation.textContent= `Location ${oneObject.location}`;
  userProfile.textContent = `Profile ${oneObject.name}`;
  userFollowers.textContent = `Followers ${oneObject.followers}`;
  userFollowing.textContent = `Following ${oneObject.following}`;
  userBio.textContent =oneObject.bio;

  

  return mainCard;


}






/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
