import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { s3 } from "./s3-client.js";

async function uploadFile({ key, body, contentType }) {
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key, // ejemplo: "users/123/avatar.png"
    Body: body,
    ContentType: contentType,
  });

  await s3.send(command);

  return `Archivo subido: ${key}`;
}

async function downloadFile(key) {
  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key,
  });

  const response = await s3.send(command);

  //    Convertir stream a buffer
  const chunks = [];
  for await (const chunk of response.Body) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

async function deleteFile(key) {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: key,
    }),
  );
}

export { uploadFile, downloadFile, deleteFile };

//Cargar archivos a un bucket

// await uploadFile({
//   key: "docs/contrato.pdf",
//   body: fileBuffer,
//   contentType: "application/pdf",
// });
