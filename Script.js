const fs = require("fs");
const { generateRandomObject } = require("./createData");

const total = 30000;

const chunkSize = 100;

const fileName = "dummyData.json";

const writeStream = fs.createWriteStream(fileName);

writeStream.write("[");

for (let i = 0; i < total; i++) {
  let obj = generateRandomObject(i + 1);

  let json = JSON.stringify(obj);

  if (i === total - 1) {
    writeStream.write(json);
  } else {
    writeStream.write(json + ",");
  }

  if ((i + 1) % chunkSize === 0) {
    writeStream.cork();

    setTimeout(() => {
      writeStream.uncork();
    }, 1000);
  }
}

writeStream.write("]");

writeStream.end();

writeStream.on("finish", () => {
  console.log(`Successfully generated ${total} data items and wrote them to ${fileName}`);
});
