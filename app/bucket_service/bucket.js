import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { s3 } from "./s3-client.js";
import dotenv from 'dotenv';

dotenv.config();

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

async function getFileStream(key) {
  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key,
  });
  const response = await s3.send(command);
  return response.Body;
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

function getPublicUrl(key) {
 
  const baseUrl = process.env.APP_URL || "http://localhost:3730"; 
  return `${baseUrl}/stock/imagenes/${key}`;
}

export { uploadFile, downloadFile, deleteFile, getPublicUrl, getFileStream };
