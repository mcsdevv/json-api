function getParams(req) {
  const paramsSplit = req.url.split('/');
  const paramsFiltered = paramsSplit.filter(p => p != 'api' && p.length > 0);
  return paramsFiltered;
}

module.exports = getParams;
