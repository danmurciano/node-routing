const express = require('express');
const { validateInput, findMean, findMedian, findMode } = require('./helpers');

const app = express();

app.use(express.json());


app.get("/mean", (req, res, next) => {
  let nums = validateInput(req);
  let result = {
    operation: "mean",
    value: findMean(nums)
  }
  return res.send(result);
});


app.get("/median", (req, res, next) => {
  let nums = validateInput(req);
  let result = {
    operation: "median",
    value: findMedian(nums)
  }
  return res.send(result);
});


app.get("/mode", (req, res, next) => {
  let nums = validateInput(req);
  let result = {
    operation: "mode",
    value: findMode(nums)
  }
  return res.send(result);
});


app.get("/all", (req, res, next) => {
  let nums = validateInput(req);
  const mean = findMean(nums);
  const median = findMedian(nums);
  const mode = findMode(nums);
  const result = {
    operation: "all",
    mean: findMean(nums),
    median: findMedian(nums),
    mode: findMode(nums)
  }
  return res.send(result);
});


app.use((err, req, res, next) => {
  let status = err.status || 500;

  return res.json({
    message: err.msg,
    status: status
  });
});


app.listen(3000, () => {
  console.log("app on port 3000");
});
