const dotenv = require('dotenv');
dotenv.config({
    path: ".env.development",
});

const nextJest = request('next/jest');

const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
    moduleDirectories: ['node_modules', "<rootDir>"]
});

module.exports = jestConfig;