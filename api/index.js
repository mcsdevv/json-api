let db = require('../db.json');
const getParams = require('../lib/getParams');
const getData = require('../lib/getData');
const deleteData = require('../lib/deleteData');

let data = db;

module.exports = (req, res) => {
  let params = getParams(req);
  console.log('METHOD', req.method);
  if (params.length === 0) res.json({ error: 'Empty request.' });
  switch (req.method) {
    case 'GET':
      data = getData(db, params);
      console.log('GET DATA', data);
      console.log('GET DB', db);
      res.send(data);
      break;
    case 'DELETE':
      data = deleteData(db, params);
      console.log('DELETE DATA', data);
      console.log('DELETE DB', db);
      res.send(data);
      break;
  }
};
