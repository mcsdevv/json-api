let db = require('../db.json');
const getParams = require('../lib/getParams');
const getData = require('../lib/getData');
const deleteData = require('../lib/deleteData');
const postData = require('../lib/postData');

let data = db;

module.exports = (req, res) => {
  let params = getParams(req);
  console.log('METHOD', req.method);
  if (params.length === 0) res.json({ error: 'Empty request.' });
  switch (req.method) {
    case 'GET':
      data = getData(db, params);
      res.send(data);
      break;
    case 'DELETE':
      data = deleteData(db, params);
      res.send(data);
      break;
    case 'POST':
      data = postData(db, params, req.body);
      res.send(data);
      break;
  }
};
