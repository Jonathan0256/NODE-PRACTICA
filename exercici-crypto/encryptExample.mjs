import { encryptData } from "./encrypt.mjs";
import { getKey } from "./key.mjs";
import fs from "fs/promises";

async function encryptAndSaveData() {
  try {
    const key = await getKey();

    const dataToEncrypt = {
      message: "Això es javascript",
      name: "Jona",
    };

    const encryptedResult = encryptData(dataToEncrypt, key);

    const jsonData = JSON.stringify(encryptedResult);

    await fs.writeFile("data.json", jsonData, "utf8");
    console.log(
      "Les dades s'han xifrat correctament i s'han guardat a data.json"
    );
  } catch (error) {
    console.error("Error en xifrar o guardar les dades:", error);
  }
}

encryptAndSaveData();
