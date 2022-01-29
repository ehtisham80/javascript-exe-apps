const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);
console.log(getColonTimeFromDate(new Date()));
