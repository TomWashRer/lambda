var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');

exports.handler = async (event) => {
    var content = fs
        .readFileSync(path.resolve(__dirname, 'input_template.docx'), 'binary');

    var zip = new PizZip(content);
    var doc = new Docxtemplater(zip);

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
