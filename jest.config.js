

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  collectCoverage: true,

 
  coverageDirectory: "coverage",

 
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};

module.exports = config;
