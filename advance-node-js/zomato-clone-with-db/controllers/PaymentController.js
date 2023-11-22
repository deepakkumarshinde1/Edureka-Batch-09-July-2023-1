const Razorpay = require("razorpay");
const crypto = require("crypto");
var instance = new Razorpay({
  key_id: "rzp_test_RB0WElnRLezVJ5",
  key_secret: "VLMCIrqKxRMNR9EcRcbL2UG8",
});

module.exports.createOrderId = (request, response) => {
  let { amount } = request.body;
  var options = {
    amount: Number(amount) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      response.status(500).send({
        status: false,
      });
    } else {
      response.send({
        status: true,
        order,
      });
    }
  });
};

module.exports.verifyPayment = (request, response) => {
  let { payment_id, order_id, signature } = request.body;
  let generated_signature = crypto
    .createHmac("sha256", "VLMCIrqKxRMNR9EcRcbL2UG8")
    .update(order_id + "|" + payment_id)
    .digest("hex");
  if (generated_signature == signature) {
    response.send({ status: true });
  } else {
    response.send({ status: false });
  }
};
