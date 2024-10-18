import { decryptData } from "./decrypt.mjs";
import fs from "fs/promises";

async function readAndDecryptFile(filePath) {
  try {
    await fs.access(filePath);

    const fileContent = await fs.readFile(filePath, "utf8");

    const encryptedData = JSON.parse(fileContent);

    const decryptedData = decryptData(
      encryptedData.encryptedData,
      encryptedData.iv
    );

    console.log("Dades desxifrades:", decryptedData);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`El fitxer ${filePath} no existeix.`);
    } else {
      console.error("Error en llegir o desxifrar el fitxer:", error);
    }
  }
}

readAndDecryptFile("data.json");
