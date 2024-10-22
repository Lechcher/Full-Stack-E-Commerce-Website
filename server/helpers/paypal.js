const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AddkDwvCmkfkVtPy04h--yxQ8dQnVw_5JkaY1VxOd8Ma_NWFaeIXI_q4kjRxVsqEu-DhUnpjJMKHAe2f",
  client_secret:
    "EDicaQwoo7gGeg32PYXtYxE0Az2CTzf-jySN1b3-H32jluHiA-JZF8pwKmVWpGsg2KFzHf-jCwBfrkRi"
});

module.exports = paypal;
