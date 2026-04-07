let friends = [];

function showFriends() {
  if (friends.length <= 0) {
    console.log("No man is a island!");
  } else {
    console.log(`You Friend/s are: ${friends}`);
  }
}

function addFriend(name) {
  let checkFriend = friends.includes(name.toUpperCase());

  if (checkFriend == true) {
    console.log(`${name} is already your friend!`);
  } else {
    friends.push(name.toUpperCase());
    console.log(`You added ${name.toUpperCase()}.`);
  }
}

function removeFriend(name) {
  let indexOfFriend = friends.indexOf(name.toUpperCase());
  if (friends == -1) {
    friends.splice(indexOfFriend, 1);
  }
}
