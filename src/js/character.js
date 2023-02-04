class Character {
    constructor(name, type) {
        if ((typeof (name) === 'string' && typeof (type) === 'string')
            && (name.length >= 2 && name.length <= 10)
            && (type === 'Bowman' || type === 'Swordsman'
            || type === 'Magician' || type === 'Daemon'
            || type === 'Undead' || type === 'Zombie')) {
            this.name = name;
            this.type = type;
            this.health = 100;
            this.level = 1;
        } else {
            throw new Error(
                `
                name - строка, min - 2 символа, max - 10\n
                type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
                `,
            );
        }
    }
}

levelUp()
{
    if (this.health > 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    } else {
        throw new Error('Health = 0 - client is dead!');
    }
}

damage(points)
{
    if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
    }

    if (this.health < 0) {
        this.health = 0;
    }
}

export {Character as default, levelUp, damage}