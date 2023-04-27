const fs = require("fs")

const packagejson = JSON.parse(fs.readFileSync("./package.json"))
packagejson.homepage = "https://the-eisenhower-matrix.web.app/"
fs.writeFileSync("./package.json", JSON.stringify(packagejson))