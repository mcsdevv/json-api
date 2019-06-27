function deleteData(db, params) {
  let key = params.pop();
  let data = db;
  for (let i = 0; i < params.length; i++) {
    if (!isNaN(params[i]) && parseInt(params[i]) !== 0) {
      const key = parseInt(params[i]) - 1;
      data = data[key];
    } else {
      data = data[params[i]];
    }
  }
  if (!isNaN(key) && parseInt(key) !== 0) {
    data.splice(key - 1, 1);
  } else {
    delete data[key];
  }
  return db;
}

module.exports = deleteData;
