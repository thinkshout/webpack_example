module.exports.makeBlue = ($element) => {
  $element.removeClass('red');
  $element.addClass('blue');
};

module.exports.makeRed = ($element) => {
  $element.removeClass('blue');
  $element.addClass('red');
};
