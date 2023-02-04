import Bowman from '../bowman';

test('level up dead', () => {
    const bowman = new Bowman('Jack');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow();
});

test('level up (health = 100)', () => {
    const bowman = new Bowman('Jack');
    bowman.levelUp();
    expect(bowman.health).toBe(100);
});

test('level up (level += 1)', () => {
    const bowman = new Bowman('Jack');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
});

test('level up (attack + 20%)', () => {
    const bowman = new Bowman('Jack');
    bowman.levelUp();
    expect(bowman.attack).toBe(30);
});

test('level up (defence + 20%)', () => {
    const bowman = new Bowman('Jack');
    bowman.levelUp();
    expect(bowman.defence).toBe(30);
});

test('damage with positive health', () => {
    const bowman = new Bowman('Jack');
    bowman.damage(40);
    expect(bowman.health).toBe(70);
});

test('damage with negative health', () => {
    const bowman = new Bowman('Jack');
    bowman.damage(40);
    bowman.health = -40;
    expect(bowman.health).toBe(0);
});