import { getKey } from "./key.mjs";
import crypto from "crypto";

function decryptData(encryptedData, iv) {
  const key = getKey();

  const ivBuffer = Buffer.from(iv, "hex");

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, ivBuffer);

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  try {
    return JSON.parse(decrypted);
  } catch (error) {
    return decrypted;
  }
}

export { decryptData };
