export default defineBackground(() => {
  console.log("Hellos background!", { id: browser.runtime.id });
});
