const leapYears = function (leapYears) {
  return (
    leapYears % 4 === 0 && (leapYears % 100 !== 0 || leapYears % 400 === 0)
  );
};

// Do not edit below this line
module.exports = leapYears;
