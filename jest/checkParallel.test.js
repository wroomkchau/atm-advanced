const sum = require('./sum');

test('P4', async () => {
  await expect(sum(1, 2)).toBe(3);
  await new Promise(resolve => setTimeout(resolve, 2500));
  console.log("Test 4");
});

test('P5', async () => {
    await expect(sum(2, 2)).toBe(4);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Test 5");
});

test('P6', async () => {
    await expect(sum(-2, 2)).toBe(0);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Test 6");
});