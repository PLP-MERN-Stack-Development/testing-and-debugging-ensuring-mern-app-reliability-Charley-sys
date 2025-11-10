// Simple debugging utility for tests
const testDebugger = {
  log: (message, data = {}) => {
    if (process.env.NODE_ENV === 'test') {
      console.log(`🧪 TEST DEBUG: ${message}`, data);
    }
  },
  
  error: (message, error) => {
    if (process.env.NODE_ENV === 'test') {
      console.error(`❌ TEST ERROR: ${message}`, error);
    }
  }
};

module.exports = testDebugger;