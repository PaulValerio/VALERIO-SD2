let friends = [];

function showFriends() {
  if (friends.length <= 0) {
    console.log("No man is an island!");
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
    console.log(`You added ${name}.`);
  }
}

function removeFriend(name) {
  let indexofFriend = friends.indexOf(name.toUpperCase());
  let checkFriend = friends.includes(name.toUpperCase());

  if (checkFriend == true) {
    console.log(`You remove ${friends.splice(indexofFriend, 1)}`);
  } else {
    console.log("The name is not found in the friend list.");
  }
}
