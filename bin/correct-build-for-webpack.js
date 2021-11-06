const fs = require("fs");
const path = require("path");

function removeRegistryProp(path) {
    var data = fs.readFileSync(path, 'utf-8');
    var ip = "registry;";
    var newValue = data.replace(ip, '');
    fs.writeFileSync(path, newValue, 'utf-8');
}
const cjsPath = path.join(__dirname, '../dist/cjs/index.js');
const esmPath = path.join(__dirname, '../dist/esm/index.js');

removeRegistryProp(cjsPath);
removeRegistryProp(esmPath);