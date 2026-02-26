import PDFDocument from 'pdfkit';

const buildInvoicePDF = (order, dataCallback, endCallback) => {
    const doc = new PDFDocument({ margin: 50 });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    // Header
    // eslint-disable-next-line
    doc
        .fontSize(20)
        .text('Smart E-Commerce Invoice', 50, 50)
        .fontSize(10)
        .text(`Order ID: ${order._id}`, 50, 80)
        .text(`Date: ${order.createdAt.toString().substring(0, 10)}`, 50, 95)
        .moveDown();

    // Address
    doc
        .fontSize(12)
        .text('Billed To:', 50, 130)
        .fontSize(10)
        .text(order.user.name, 50, 150)
        .text(order.user.email, 50, 165)
        .text(order.shippingAddress.address, 50, 180)
        .text(
            `${order.shippingAddress.city}, ${order.shippingAddress.postalCode}`,
            50,
            195
        )
        .text(order.shippingAddress.country, 50, 210)
        .moveDown();

    // Table Header
    doc
        .fontSize(12)
        .text('Item', 50, 260)
        .text('Qty', 300, 260)
        .text('Price', 400, 260)
        .text('Total', 500, 260)
        .moveDown();

    doc.moveTo(50, 280).lineTo(550, 280).stroke();

    // Table Rows
    let y = 300;
    order.orderItems.forEach((item) => {
        doc
            .fontSize(10)
            .text(item.name, 50, y)
            .text(item.qty.toString(), 300, y)
            .text(`$${item.price.toFixed(2)}`, 400, y)
            .text(`$${(item.qty * item.price).toFixed(2)}`, 500, y);
        y += 20;
    });

    doc.moveTo(50, y + 10).lineTo(550, y + 10).stroke();

    // Summary
    y += 30;
    doc.text('Items Price:', 400, y).text(`$${order.itemsPrice.toFixed(2)}`, 500, y);
    y += 20;
    doc.text('Tax:', 400, y).text(`$${order.taxPrice.toFixed(2)}`, 500, y);
    y += 20;
    doc.text('Shipping:', 400, y).text(`$${order.shippingPrice.toFixed(2)}`, 500, y);
    y += 20;
    doc.fontSize(12).text('Total:', 400, y).text(`$${order.totalPrice.toFixed(2)}`, 500, y);

    doc.end();
};

export default buildInvoicePDF;
