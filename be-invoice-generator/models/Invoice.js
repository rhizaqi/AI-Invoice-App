const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: String, require: true },
  unitPrice: { type: String, require: true },
  taxPercent: { type: Number, default: 0 },
  total: { type: Number, require: true },
});

const invoiceSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    invoiceNumber: { type: String, require: true },
    invoiceDate: { type: Date, default: Date.now },
    dueDate: { type: Date },
    billForm: {
      businessName: String,
      email: String,
      address: String,
      phone: String,
    },
    billTo: {
      clientName: String,
      email: String,
      address: String,
      phone: String,
    },
    items: [itemSchema],
    notes: {
      type: String,
    },
    paymentTerms: {
      type: String,
      default: "Net 15",
    },
    status: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
    subtotal: Number,
    taxTotal: Number,
    total: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
