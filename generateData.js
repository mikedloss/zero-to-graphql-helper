const faker = require('faker');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// working on a better solution than this CRAP

module.exports = () => {
  const data = {
    people: []
  }

  let jsonSize = getRandomInt(1, 100)

  for (var i = 1; i < jsonSize; i++) {
    let friends = []
    let friendsSize = getRandomInt(1, 10)
    
    for (let j = 1; j < friendsSize; j++) {
      let friend = getRandomInt(1, jsonSize)
      if (friend !== i) friends.push(`/people/${friend}`)
    }

    data.people.push(
      {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        friends: friends
      }
    )
  }
  return data
}