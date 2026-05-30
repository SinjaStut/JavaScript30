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