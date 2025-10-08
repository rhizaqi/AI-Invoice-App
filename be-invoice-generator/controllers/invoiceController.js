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
  } catch (error) {
    res.status(500).json({
      message: "Error creating invoice",
      error: error.message,
    });
  }
};

//@desc     Get single invoice by Id
//@route    GET /api/invoices/:id
//@access   Private
exports.getInvoiceById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error creating invoice",
      error: error.message,
    });
  }
};

//@desc     Update invoices
//@route    GET /api/invoices/:id
//@access   Private
exports.updateInvoice = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error creating invoice",
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
      message: "Error creating invoice",
      error: error.message,
    });
  }
};
