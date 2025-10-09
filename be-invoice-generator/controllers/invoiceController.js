const Invoice = require("../models/Invoice");

//@desc     Create new invoice
//@route    POST /api/invoices
//@access   Private
exports.createInvoice = async (req, res) => {
  try {
    const user = req.user;

    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
    } = req.body;

    //subtotal calculation
    let subtotal = 0;
    let taxTotal = 0;

    items.forEach((el) => {
      console.log(el, 99999999);
      subtotal += el.unitPrice * el.quantity;
      taxTotal += (el.unitPrice * el.quantity * (el.taxPercent || 0)) / 100;
    });

    const total = subtotal + taxTotal;

    console.log(subtotal, taxTotal);

    const invoice = new Invoice({
      user,
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
      subtotal,
      taxTotal,
      total,
    });

    await invoice.save();
    // why is this using invoice.save() and line 31 using new Invoice() because i had to manipulate data. It supposed to give more flexibi;ity

    res.status(201).json(invoice);
  } catch (error) {
    console.log(error, `error at creating invoice`);

    res.status(500).json({
      message: "Error creating invoice",
      error: error.message,
    });
  }
};

//@desc     Get all invoices of logged-in user
//@route    GET /api/invoices
//@access   Private
exports.getInvoices = async (req, res) => {
  try {
    const invoice = await Invoice.find().populate("user", "name email");
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error get invoices",
      error: error.message,
    });
  }
};

//@desc     Get single invoice by Id
//@route    GET /api/invoices/:id
//@access   Private
exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!invoice) {
      res.status(404).json({ message: "Invoice not found!" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error get invoice data",
      error: error.message,
    });
  }
};

//@desc     Update invoices
//@route    GET /api/invoices/:id
//@access   Private
exports.updateInvoice = async (req, res) => {
  try {
    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
      status,
    } = req.body;

    let subtotal = 0;
    let taxTotal = 0;

    if (items && items.length > 0) {
      items.forEach((el) => {
        subtotal += el.unitPrice * quantity;
        taxTotal += (el.unitPrice * quantity * (items.taxPercent || 0)) / 100;
      });
    }

    const total = subtotal + taxTotal;

    const updateInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      {
        invoiceNumber,
        invoiceDate,
        dueDate,
        billFrom,
        billTo,
        items,
        notes,
        paymentTerms,
        subtotal,
        taxTotal,
        total,
      },
      { new: true }
    );

    if (!updateInvoice)
      return res.status(404).json({ message: "Invoice not found!" });
    res.status(201).json(updateInvoice);
  } catch (error) {
    res.status(500).json({
      message: "Error update invoice",
      error: error.message,
    });
  }
};

//@desc     Delete invoice
//@route    DELETE /api/invoices/:id
//@access   Private
exports.deleteInvoice = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error delete invoice",
      error: error.message,
    });
  }
};
