import { addons } from "storybook/manager-api";

addons.register("expand-sidebar-folders", () => {
  let expanded = false;
  const channel = addons.getChannel();

  channel.on("expandAll", () => {
    if (expanded) return;
    expanded = true;

    setTimeout(() => {
      document
        .querySelectorAll('button[aria-expanded="false"]')
        .forEach((button) => {
          const text = button.textContent?.trim();
          if (text === "Design" || text === "Develop") {
            button.click();
          }
        });
    }, 500);
  });
});
