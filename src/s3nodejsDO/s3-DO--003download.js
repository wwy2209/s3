// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js"; // Helper function that creates an Amazon S3 service client module.
// import {path} from "path";
// import {fs} from "fs";
// import fs from "fs";
import fs from "fs/promises";

// const file = "../../../xx.txt";
const file = "xx.txt";
// const fileStream = fs.createReadStream(file);

// Set the parameters
export const uploadParams = {
  Bucket: "sg1--try--001-js-upload",
  // Add the required 'Key' parameter using the 'path' module.
  Key: 'folder-path/test.txt',
  // Add the required 'Body' parameter
  // Body: fileStream,
};


// Upload file to specified bucket.
export const run = async () => {
  try {
    const timeStart = Date.now()
    // const data = await s3Client.getObject(uploadParams);
    // console.log(await data.Body.toString('utf-8'));
    // const { Body } = await s3Client.getObject(uploadParams).promise()
    const { Body } = await s3Client.getObject(uploadParams)
    const location = 'out.txt'
    await fs.writeFile(location, Body)
    // console.log("Success", data);
    const timeEnd = Date.now()
    const timeUsed = timeEnd - timeStart
    console.log('timeUsed: ', timeUsed);
    console.log("Success--;.");

    // return data; // For unit tests.
    return; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();

// =========
// =========
// =========
// =========
// =========
// =========
// // Import required AWS SDK clients and commands for Node.js.
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from "./s3Client.js"; // Helper function that creates an Amazon S3 service client module.
// import {path} from "path";
// import {fs} from "fs";

// const file = "OBJECT_PATH_AND_NAME"; // Path to and name of object. For example '../myFiles/index.js'.
// const fileStream = fs.createReadStream(file);

// // Set the parameters
// export const uploadParams = {
//   Bucket: "BUCKET_NAME",
//   // Add the required 'Key' parameter using the 'path' module.
//   Key: path.basename(file),
//   // Add the required 'Body' parameter
//   Body: fileStream,
// };


// // Upload file to specified bucket.
// export const run = async () => {
//   try {
//     const data = await s3Client.send(new PutObjectCommand(uploadParams));
//     console.log("Success", data);
//     return data; // For unit tests.
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();

