function removeTransition(propertyName) {
  if (propertyName !== 'transform') {
    return false;
  }
  return true;
}