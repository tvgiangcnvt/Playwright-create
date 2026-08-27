const fs = require('fs');
const file = 'tests/example.spec.ts';
let f = fs.readFileSync(file, 'utf8');
f = f.replace(
  /^\s*await expect\(page\)\.toHaveTitle\("Tài liệu học automation test", \{ exact: false \}\);/m,
  '  await expect(page).toHaveTitle("Tài liệu học automation test", { exact: false });'
);
fs.writeFileSync(file, f);
console.log('Fixed indentation');
