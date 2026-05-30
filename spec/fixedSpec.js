describe('1. curly – removeTransition', function () {
  it('should return false if propertyName is not transform', function () {
    expect(removeTransition('opacity')).toEqual(false);
  });
  it('should return true if propertyName is transform', function () {
    expect(removeTransition('transform')).toEqual(true);
  });
});

describe('2. no-var – debounce', function () {
  it('should return a function', function () {
    const result = debounce(function() {});
    expect(typeof result).toEqual('function');
  });
});

describe('3. no-console – getTeamCopy', function () {
  it('should return a copy of the players array', function () {
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const result = getTeamCopy(players);
    expect(result).toEqual(players);
  });
  it('should not be the same reference', function () {
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const result = getTeamCopy(players);
    expect(result).not.toBe(players);
  });
});

describe('4. no-unused-vars – getPersonCopy', function () {
  it('should return a copy of the person object', function () {
    const person = { name: 'Wes', age: 80 };
    const result = getPersonCopy(person);
    expect(result.name).toEqual('Wes');
    expect(result.age).toEqual(80);
  });
  it('should not be the same reference', function () {
    const person = { name: 'Wes', age: 80 };
    const result = getPersonCopy(person);
    expect(result).not.toBe(person);
  });
});

describe('5. no-trailing-spaces – calculateTotal', function () {
  it('should return the sum of all prices', function () {
    expect(calculateTotal([10, 20, 30])).toEqual(60);
  });
  it('should return 0 for empty array', function () {
    expect(calculateTotal([])).toEqual(0);
  });
});

describe('7. no-shadow – findMatches', function () {
  it('should find matching cities', function () {
    const places = [
      { city: 'Vienna', state: 'Austria' },
      { city: 'Berlin', state: 'Germany' }
    ];
    const result = findMatches('Vienna', places);
    expect(result.length).toEqual(1);
    expect(result[0].city).toEqual('Vienna');
  });
  it('should return empty array if no match', function () {
    const places = [{ city: 'Vienna', state: 'Austria' }];
    const result = findMatches('Berlin', places);
    expect(result.length).toEqual(0);
  });
});

describe('8. semi – numberWithCommas', function () {
  it('should format number with commas', function () {
    expect(numberWithCommas(1000)).toEqual('1,000');
  });
  it('should handle numbers without commas', function () {
    expect(numberWithCommas(100)).toEqual('100');
  });
});

describe('10. arrow-body-style – getTotalYears', function () {
  it('should return total years lived by all inventors', function () {
    const inventors = [
      { year: 1879, passed: 1955 },
      { year: 1643, passed: 1727 },
    ];
    expect(getTotalYears(inventors)).toEqual(160);
  });
  it('should return 0 for empty array', function () {
    expect(getTotalYears([])).toEqual(0);
  });
});

describe('9. prefer-arrow-callback – countItems', function () {
  it('should count occurrences of each item', function () {
    const result = countItems(['car', 'car', 'bike']);
    expect(result.car).toEqual(2);
    expect(result.bike).toEqual(1);
  });
  it('should return empty object for empty array', function () {
    const result = countItems([]);
    expect(result).toEqual({});
  });
});