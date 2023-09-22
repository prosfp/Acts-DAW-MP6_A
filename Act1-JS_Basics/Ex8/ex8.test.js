// Import the functions to test
const { getUserChoice, getComputerChoice, determineWinner } = require('./ex8');

// Test getUserChoice function
test('getUserChoice function returns "rock", "paper", or "scissors" when passed "rock", "paper", or "scissors"', () => {
  expect(getUserChoice('rock')).toMatch(/rock|paper|scissors/);
  expect(getUserChoice('paper')).toMatch(/rock|paper|scissors/);
  expect(getUserChoice('scissors')).toMatch(/rock|paper|scissors/);
});

test('getUserChoice function returns an error message when passed an invalid choice', () => {
  expect(getUserChoice('invalid')).toBe('Invalid choice');
});

// Test getComputerChoice function
test('getComputerChoice function returns "rock", "paper", or "scissors"', () => {
  expect(getComputerChoice()).toMatch(/rock|paper|scissors/);
});

// Test determineWinner function
test('determineWinner function returns "Empat" when userChoice and computerChoice are the same', () => {
  expect(determineWinner('rock', 'rock')).toBe('Empat');
  expect(determineWinner('paper', 'paper')).toBe('Empat');
  expect(determineWinner('scissors', 'scissors')).toBe('Empat');
});

test('determineWinner function returns "Usuari guanya" when userChoice beats computerChoice', () => {
  expect(determineWinner('rock', 'scissors')).toBe('Usuari guanya');
  expect(determineWinner('paper', 'rock')).toBe('Usuari guanya');
  expect(determineWinner('scissors', 'paper')).toBe('Usuari guanya');
});

test('determineWinner function returns "Ordinador guanya" when computerChoice beats userChoice', () => {
  expect(determineWinner('rock', 'paper')).toBe('Ordinador guanya');
  expect(determineWinner('paper', 'scissors')).toBe('Ordinador guanya');
  expect(determineWinner('scissors', 'rock')).toBe('Ordinador guanya');
});
