const { readCsv, writeCsv } = require("./datakit/datakit.js");

function transform(record) {
    // Your function to transform a data record.
}

async function main() {
    const data = await readCsv("./some/file.csv");
    const transformed = data.map(transform);
    await writeCsv("./an/output/file.csv", transformed);
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error("Something went wrong.");
        console.error(err && err.stack || err);
    });