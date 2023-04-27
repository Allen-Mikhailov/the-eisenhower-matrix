const fs = require("fs")

const packagejson = JSON.parse(fs.readFileSync("./package.json"))
packagejson.homepage = undefined
fs.writeFileSync("./package.json", JSON.stringify(packagejson))