import { EventEmitter } from "events";

export function startCounter(maxim, msgSegon, msgFinal) {
  const emitter = new EventEmitter();
  let counter = 0;

  const intervalId = setInterval(() => {
    counter++;
    emitter.emit("segon", counter);

    if (counter >= maxim) {
      emitter.emit("final", msgFinal);
      clearInterval(intervalId);
    }
  }, 1000);

  return emitter;
}
