const model = require("../models/futbollistat.model");

function postFutbollistat(req, res) {
  if (!req.body.name || !req.body.number) {
    return res.status(400).json({
      error: "Emri ose numri i fanelles se futbollistit eshte dhene gabim!",
    });
  }

  const newFutbollist = {
    id: model.length,
    name: req.body.name,
    number: req.body.number,
  };
  model.push(newFutbollist);

  res.json(newFutbollist);
}

function getFutbollistat(req, res) {
  res.json(model);
}

function getFutbollistin(req, res) {
  const futbollistatId = Number(req.params.futbollistatId); 
  const futbollisti = model[futbollistatId];
  if (futbollisti) {
    res.status(200).json(futbollisti);
  } else {
    res.status(404).json({
      error: "Futbollisti nuk ekziston",
    });
  }
}

module.exports = {
  postFutbollistat,
  getFutbollistat,
  getFutbollistin,
};
