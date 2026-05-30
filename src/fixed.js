function removeTransition(propertyName) {
  if (propertyName !== 'transform') {
    return false;
  }
  return true;
}

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function getTeamCopy(players) {
  const team = players.slice();
  return team;
}

function getPersonCopy(person) {
  const cap2 = Object.assign({}, person);
  return cap2;
}

function calculateTotal(prices) {
  return prices.reduce((total, price) => total + price, 0);
}

const cities = [];

function findMatches(wordToMatch, allCities) {
  return allCities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}