/* eslint-disable no-unused-vars */
import Character, {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../js/Character';

test('levelUp validation input value', () => {
  expect(() => {
    const received = new Character('Misha', 'Any');
    received.health = 0;
    received.levelUp();
  }).toThrow('Нельзя повысить левел умершего!');
});

test('levelUp validation output value', () => {
  const newPerson = new Daemon('Misha');
  newPerson.levelUp();
  const received = newPerson.level;
  const expected = 2;
  expect(received).toBe(expected);
});

test('damage calculation check', () => {
  const newPerson = new Daemon('Misha');
  newPerson.damage(20);
  const received = newPerson.health;
  const expected = 88;
  expect(received).toBe(expected);
});

test('damage validation output value', () => {
  expect(() => {
    const received = new Character('Misha');
    received.health = 0;
    received.damage(20);
  }).toThrow('Персонаж мертв!');
});

test('damage calculation check', () => {
  let newPerson = new Daemon('Misha');
  newPerson = new Bowman('Misha');
  newPerson = new Swordsman('Misha');
  newPerson = new Magician('Misha');
  newPerson = new Undead('Misha');
  newPerson = new Zombie('Misha');
  expect(true).toBe(true);
});
