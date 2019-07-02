// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 700);

const sentence = ('\r|  ', '\r/  ', '\r-  ', '\r|   ');

for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, 100 + char * 100);
};
