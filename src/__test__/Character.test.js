/* eslint-disable no-unused-vars */
import Character, { Daemon } from '../js/Character';

test('levelUp validation input value', () => {
  expect(() => {
    const received = new Character('Misha', 'Any');
    received.health = 0;
    received.levelUp();
  }).toThrow('Нельзя повысить левел умершего!');
});

test('damage calculation check', () => {
  const newPerson = new Daemon('Misha');
  newPerson.damage(20);
  const received = newPerson.health;
  const expected = 88;
  expect(received).toBe(expected);
});
