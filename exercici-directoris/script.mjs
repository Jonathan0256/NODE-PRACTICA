import fs from "fs/promises";
import path from "path";
const readFiles = async (relativePath) => {
  const rute = await fs.stat(relativePath);
  try {
    if (rute.isDirectory()) {
      const files = await fs.readdir(relativePath);
      const results = [];
      for (const file of files) {
        const absolutePath = path.join(relativePath, file);
        const fsStat = fs.stat(absolutePath);

        const info = {
          name: file,
          absolutePath: absolutePath,
          dirName: path.dirname(absolutePath),
          type: fsStat.isDirectory ? "subdirectory" : "file",
          extension: path.extname(file) || "",
          size: (await fsStat).size,
        };
        0;
        results.push(info);
      }
      console.table(results);
    } else {
      console.log(`${relativePath} no es un directori!`);
    }
  } catch (err) {
    console.error("Error al llegir la ruta: ", err);
  }
};

readFiles("../exercici-crypto");
