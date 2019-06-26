const db = require('../db.json');
const getParams = require('../lib/getParams');

module.exports = (req, res) => {
  let params = getParams(req);
  if (params.length === 0) res.json({ error: 'Empty request.' });
  else {
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
    res.send(db);
  }
};
