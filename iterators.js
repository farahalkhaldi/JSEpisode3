/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = array => {
  array.forEach(number => console.log(number));
};
/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheityar
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = temperatures => {
  return temperatures.map(temp => (temp - 32) * (5 / 9));
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = (temperatures, threshhold) => {
  return temperatures.filter(temp => temp > threshhold);
  // Your code here
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = (temperatures, threshhold) => {
  logger(toCelsius(hottestDays(temperatures, threshhold)));

  // const filtered = temperatures.filter(temp => temp > threshhold);
  // const C = filtered.map(temp => (temp - 32) * (5 / 9));
  // return C.forEach(temp => console.log(temp));
};

export { logger, toCelsius, hottestDays, logHottestDays };
