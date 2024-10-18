import dotenv from "dotenv";

dotenv.config();

const getKey = () => {
  const key = process.env.PROTECTED_KEY;
  if (!key) {
    throw new Error("No s'ha definit la variable d'entorn");
  } else {
    return Buffer.from(key, "hex");
  }
};

export { getKey };
