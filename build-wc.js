const fs = require("fs-extra");
const concat = require("concat");
const path = require("path");

const build = async () => {
  const files = [
    "./dist/quml-player-wc/runtime.js",
    "./dist/quml-player-wc/polyfills.js",
    "./dist/quml-player-wc/scripts.js",
    "./dist/quml-player-wc/vendor.js",
    "./dist/quml-player-wc/main.js",
  ];

  await fs.ensureDir("dist/quml-player-wc");
  await fs.ensureDir("web-component");
  await fs.ensureDir("web-component-examples");
  await concat(files, "web-component/sunbird-quml-player.js");
  await concat(files, "web-component-examples/vanilla-js/sunbird-quml-player.js");
  
  await fs.copy("./dist/quml-player-wc/assets", "web-component/assets");
  await fs.copy("./dist/quml-player-wc/assets", "web-component-examples/vanilla-js/assets");

  await fs.copy("./dist/quml-player-wc/styles.css", "web-component/styles.css");
  await fs.copy("./dist/quml-player-wc/styles.css", "web-component-examples/vanilla-js/styles.css");

  await fs.copy("README.md", "web-component/README.md")

  const filesNames = fs.readdirSync("dist/quml-player-wc");
  const allowedFiles = [".ttf", ".woff", ".woff2"];

  filesNames.forEach((file) => {
    if (allowedFiles.includes(path.extname(file))) {
      fs.copySync(`dist/quml-player-wc/${file}`, `web-component/${file}`);
    }
  });
  console.log("Files concatenated successfully!!!");
};
build();
