const sum = require('./sum');

test('adds 1 + 2 to equal 3', async () => {
  await expect(sum(1, 2)).toBe(3);
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("Test 1");
});

test('adds 2 + 2 to equal 4', async () => {
    await expect(sum(2, 2)).toBe(4);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Test 2");
});

test('adds -2 + 2 to equal 0', async () => {
    await expect(sum(-2, 2)).toBe(0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Test 3");
});