import { startCounter } from "../counter.mjs";
import { handleEvents } from "./listener.mjs";

let configuracio = {};

try {
  if (process.argv.length > 2) {
    const args = process.argv.slice(2);
    const [maxim, msgSegon, msgFinal] = args;

    const parsedMaxim = parseInt(maxim, 10);

    if (isNaN(parsedMaxim)) {
      console.error("L'argument ha de ser un numero");
      process.exit();
    }

    configuracio = {
      maxim: parsedMaxim,
      msgSegon: msgSegon || "Comptador actual:",
      msgFinal: msgFinal || `El cronòmetre ha arribat a ${parsedMaxim}`,
    };
  } else {
    eventEmitter.on("start", () => {
      console.log("started");
    });

    console.error("Has d'establir un maxim");
    process.exit();
  }

  const emitter = startCounter(
    configuracio.maxim,
    configuracio.msgSegon,
    configuracio.msgFinal
  );
  handleEvents(emitter, configuracio.msgSegon);
} catch (error) {
  console.error("Hi ha hagut aquest error: ", error);
}
