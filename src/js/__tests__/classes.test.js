import Bowman from '../bowman';

test('invalid class name type', () => {
    expect(() => new Bowman(123546)).toThrow();
});

test('invalid class type', () => {
    expect(() => new Character('Jack', Number)).toThrow();
});

test('short class name', () => {
    expect(() => new Bowman('A')).toThrow();
});

test('long class name', () => {
    expect(() => new Bowman('Looooooooooooong')).toThrow();
});

test('health parametr is correct', () => {
    const bowman = new Bowman('Jack');
    expect(bowman.health = 100).toBe(100);
});

test('level parametr is correct', () => {
    const bowman = new Bowman('Jack');
    expect(bowman.level = 1).toBe(1);
});

test('attack parametr is correct', () => {
    const bowman = new Bowman('Jack');
    expect(bowman.attack = 25).toBe(25);
});

test('defence parametr is correct', () => {
    const bowman = new Bowman('Jack');
    expect(bowman.defence = 25).toBe(25);
});
