const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = {
    generateDocument: function(args, dest) {

        var doc = new PDFDocument;

        doc.pipe(fs.createWriteStream(dest))
    
        // TODO: Generate pdf here


        doc.end();


    }
};