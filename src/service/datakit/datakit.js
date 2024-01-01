const mysql = require('mysql2/promise');
let { config, setting } = require('./config.js');
const ExcelJS = require('exceljs');

exports.loadDb = async () => {
    const conn = await mysql.createConnection(config);
    console.log("Connected!");

    let sqlquery = "SELECT * FROM config WHERE id = 1 "

    let x = (await conn.execute(sqlquery));
    conn.close()
    console.log(x[0][0])
    return x[0][0];
}

exports.readFile = (filePath) => {
    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(file);
        });
    });
}

exports.readXml = (filePath) => {
    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.readJson = (filePath) => {

    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.readCsv = (filePath) => {

    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.readTable = (filePath) => {

    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.readAPI = (url) => {

    if (!url || !isString(url)) {
        throw new Error("Error url not correct. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.read = (filePath) => {

    if (!filePath || !isString(filePath)) {
        throw new Error("Error path not found. ");
    }
    return new Promise < string > ((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(file);
        });
    });
}

exports.readXls = (filePath) => {
    const wb = new ExcelJS.Workbook();

    wb.xlsx.readFile(filePath).then(() => {

        const ws = wb.getWorksheet('Sheet1');

        const c1 = ws.getColumn(1);

        c1.eachCell(c => {

            console.log(c.value);
        });

        const c2 = ws.getColumn(2);

        c2.eachCell(c => {

            console.log(c.value);
        });
    }).catch(err => {
        console.log(err.message);
    });
}

