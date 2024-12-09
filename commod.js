const localDate = new Date(); // create a local date object
const utcTimestamp = Date.UTC(
  localDate.getFullYear(),
  localDate.getMonth(),
  localDate.getDate(),
  localDate.getHours(),
  localDate.getMinutes(),
  localDate.getSeconds(),
  localDate.getMilliseconds()
); // convert the local date to UTC timestamp

const utcDate = new Date(utcTimestamp); // create a new date object using the UTC timestamp
