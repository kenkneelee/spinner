process.stdout.write("hello from spinner2.js... \rheyyy\n");

const chars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${chars[i]}       `);
  }, 100 + 200 * i);
}

setTimeout(() => {
  console.log();
}, 100 + 200 * chars.length);
