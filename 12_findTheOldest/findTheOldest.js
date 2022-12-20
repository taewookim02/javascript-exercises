const findTheOldest = function (people) {
  const oldest = people.reduce((oldest, person) => {
    if (!oldest.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
    }
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  }, people[0]);
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
