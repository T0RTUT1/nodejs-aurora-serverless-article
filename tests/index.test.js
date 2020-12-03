import { connectToDatabase, example } from '../src'

test('sanity check', () => {
  const result = example();
  expect(result).toBe("hi");
});

test('test database', async () => {
  const [result] = await connectToDatabase();
  expect({ ...result }).toStrictEqual({ "1" : 1 });
});