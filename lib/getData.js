function getData(db, params) {
  console.log('GET');
  let data = db;
  for (let i = 0; i < params.length; i++) {
    if (!isNaN(params[i]) && parseInt(params[i]) !== 0) {
      const key = parseInt(params[i]) - 1;
      data = data[key];
    } else {
      data = data[params[i]];
    }
  }
  return data;
}

module.exports = getData;