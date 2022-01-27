test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'John', mail: 'john@mail.com' }
  expect(obj).toHaveProperty('name')
  expect(obj).toHaveProperty('name', 'John')
  expect(obj.name).toBe('John')
  const obj2 = { name: 'John', mail: 'john@mail.com' }
  expect(obj).toEqual(obj2) // toEqual para comparar dois objetos diferentes
  expect(obj).toBe(obj) // toBe funciona para comparar o objeto com ele mesmo
});
