module.export = {
    roots: ['<rootDir>/frontend'],
    transform: {
      '\\.(js|jsx|tsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/frontend/**/>(*.)test.{js, jsx, tsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'tsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react/cleanup-after-each'
    ] 
};