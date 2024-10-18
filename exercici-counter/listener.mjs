export function handleEvents(emitter, msgSegon) {
  emitter.on("segon", (counter) => {
    console.log(`${msgSegon} ${counter}`);
  });

  emitter.on("final", (msgFinal) => {
    console.log(msgFinal);
  });
}
