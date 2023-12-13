// create a document and pipe to a blob
let pdfDoc = new PDFDocument();
var stream = pdfDoc.pipe(blobStream());

pdfDoc.image(
  "data:image/png;base64,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",
  150,
  20,
  {
    fit: [200, 50],
    align: "center",
  }
);

pdfDoc.fontSize(15);
pdfDoc.font("Helvetica");
pdfDoc.text("Dear Sanjay, ", 50, 100);

pdfDoc
  .text("Your registration for ", 50, 130, {
    continued: true,
  })
  .font("Helvetica-Bold")
  .text("Agan-Adhigaram", { continued: true })
  .font("Helvetica")
  .text(
    " is successful and this is the auto generated document confirming your booking. Please download the copy and keep either as soft-copy/hard-copy."
  );

pdfDoc.text("Your registration details are as follows:", 50, 220);

pdfDoc.rect(50, 250, 250, 30).stroke();
pdfDoc.rect(300, 250, 250, 30).stroke();

pdfDoc
  .font("Helvetica-Bold")
  .text("Booked For", 50, pdfDoc.y + 23, { indent: 5 })
  .font("Helvetica")
  .text("Agan-Adhigaram", 310, pdfDoc.y - 18);
pdfDoc.rect(50, 280, 250, 30).stroke();
pdfDoc.rect(300, 280, 250, 30).stroke();

pdfDoc
  .font("Helvetica-Bold")
  .text("Payment ID", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.paymentid", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 310, 250, 30).stroke();
pdfDoc.rect(300, 310, 250, 30).stroke();
pdfDoc.font("Helvetica-Bold").text("Name", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.name", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 340, 250, 30).stroke();
pdfDoc.rect(300, 340, 250, 30).stroke();
pdfDoc.font("Helvetica-Bold").text("Class", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.classname", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 370, 250, 30).stroke();
pdfDoc.rect(300, 370, 250, 30).stroke();

pdfDoc.font("Helvetica-Bold").text("School", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.school", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 400, 250, 30).stroke();
pdfDoc.rect(300, 400, 250, 30).stroke();

pdfDoc
  .font("Helvetica-Bold")
  .text("Date Of Birth", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.dob", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 430, 250, 30).stroke();
pdfDoc.rect(300, 430, 250, 30).stroke();
pdfDoc
  .font("Helvetica-Bold")
  .text("Aadhar Number", 50, pdfDoc.y + 15, { indent: 5 });

pdfDoc.font("Helvetica").text("bookingData.aadhar", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 460, 250, 30).stroke();
pdfDoc.rect(300, 460, 250, 30).stroke();

pdfDoc
  .font("Helvetica-Bold")
  .text("Father's Name", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.fathersName", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 490, 250, 30).stroke();
pdfDoc.rect(300, 490, 250, 30).stroke();

pdfDoc.font("Helvetica-Bold").text("Address", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.address", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 520, 250, 30).stroke();
pdfDoc.rect(300, 520, 250, 30).stroke();

pdfDoc.font("Helvetica-Bold").text("Mobile", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.contact", 310, pdfDoc.y - 20);
pdfDoc.rect(50, 550, 250, 30).stroke();
pdfDoc.rect(300, 550, 250, 30).stroke();

pdfDoc.font("Helvetica-Bold").text("Email", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.email", 310, pdfDoc.y - 20);

pdfDoc.rect(50, 580, 250, 30).stroke();
pdfDoc.rect(300, 580, 250, 30).stroke();
pdfDoc
  .font("Helvetica-Bold")
  .text("Quantity", 50, pdfDoc.y + 15, { indent: 5 });
pdfDoc.font("Helvetica").text("bookingData.quantity", 310, pdfDoc.y - 20);

pdfDoc.text("Best Regards,", 50, pdfDoc.y + 50);
pdfDoc
  .font("Helvetica-Bold")
  .text("Dr. M. Shunmugakumar,Ph.D.,", 50, pdfDoc.y + 5);
pdfDoc
  .font("Helvetica")
  .text()
  .fillColor("red")
  .text("TNSG Sports", 50, pdfDoc.y + 5, {
    link: "http://tnsgsports.com/",
    underline: false,
  });

pdfDoc
  .fillColor("grey")
  .fontSize(8)
  .text("2023-12-12", 100, pdfDoc.y + 5, {
    align: "right",
  });
// end and display the document in the iframe to the right
pdfDoc.end();
stream.on("finish", function () {
  iframe.src = stream.toBlobURL("application/pdf");
});
