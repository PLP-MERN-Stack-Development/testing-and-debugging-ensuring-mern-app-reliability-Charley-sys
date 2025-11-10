# MERN Stack Testing and Debugging Assignment

## 📋 Assignment Overview

This project demonstrates comprehensive testing strategies and debugging techniques for a MERN (MongoDB, Express.js, React, Node.js) stack application. The implementation includes unit testing, integration testing, and debugging practices to ensure application reliability.

### 🎯 Objectives Achieved

- ✅ Set up testing environments for both client and server
- ✅ Implemented unit tests for server functions and API endpoints
- ✅ Created integration tests for authentication flows
- ✅ Applied debugging techniques for common MERN stack issues
- ✅ Established test coverage reporting and quality thresholds

---

## 🏗️ Project Structure

```
testing-and-debugging-ensuring-mern-app-reliability/
├── 📁 server/                 # Express.js Backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/    # Route controllers
│   │   ├── 📁 models/         # Mongoose models
│   │   ├── 📁 routes/         # API routes
│   │   ├── 📁 middleware/     # Custom middleware
│   │   └── server.js          # Main server file
│   ├── 📁 tests/
│   │   ├── 📁 unit/           # Unit tests
│   │   ├── 📁 integration/    # Integration tests
│   │   └── setup.js           # Test configuration
│   ├── package.json
│   ├── jest.config.js
│   └── .env
├── 📁 client/                 # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 components/     # React components
│   │   ├── 📁 tests/          # Client-side tests
│   │   └── App.jsx
│   ├── package.json
│   └── cypress/               # E2E tests
├── jest.config.js             # Root Jest configuration
└── package.json               # Project dependencies
```

---

## 🧪 Testing Implementation

### 🎯 Server-Side Testing

#### Unit Tests
**Location:** `server/tests/unit/`

**Test Cases Implemented:**
- ✅ Server health check endpoint
- ✅ 404 route handling
- ✅ Authentication controller functions
- ✅ Error handling middleware

**Example Test:**
```javascript
describe('Server Unit Tests', () => {
  it('should return health check message', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    expect(response.body.message).toBe('Server is running!');
  });
});
```

#### Integration Tests
**Location:** `server/tests/integration/`

**Test Cases Implemented:**
- ✅ User registration with valid data
- ✅ User registration with duplicate email prevention
- ✅ User login with valid credentials
- ✅ User login with invalid password handling
- ✅ User login with non-existent email handling

**Example Test:**
```javascript
describe('Auth API Integration Tests', () => {
  it('should register a new user successfully', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);
    
    expect(response.body.success).toBe(true);
    expect(response.body.data.user.email).toBe(userData.email);
  });
});
```

### 🎯 Client-Side Testing Strategy

#### Testing Tools Selected
- **Jest** + **React Testing Library** - Unit and integration tests
- **Cypress** - End-to-end testing
- **Axios Mock Adapter** - API response mocking

#### Planned Test Structure
```
client/src/tests/
├── unit/
│   ├── LoginForm.test.jsx
│   ├── UserDashboard.test.jsx
│   └── App.test.jsx
├── integration/
│   └── UserFlow.test.jsx
└── e2e/
    └── auth.cy.js
```

#### Test Scenarios Designed
1. **Component Unit Tests**
   - Form rendering and validation
   - User interaction handling
   - State management verification

2. **Integration Tests**
   - Complete user authentication flow
   - Navigation between components
   - Error state propagation

3. **End-to-End Tests**
   - User registration process
   - Login/logout functionality
   - Protected route access

---

## 🔧 Testing Tools & Configuration

### Server Testing Setup
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
};
```

### Test Environment Features
- **MongoDB Memory Server** - Isolated database for testing
- **Environment Variable Management** - Separate test configuration
- **Automatic Cleanup** - Database reset between tests
- **Mock JWT Authentication** - Secure token testing

---

## 🐛 Debugging Techniques Implemented

### 1. Debug Logging Middleware
```javascript
const debugLogger = (req, res, next) => {
  console.log('🔍 DEBUG:');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  next();
};
```

### 2. Comprehensive Error Handling
```javascript
const errorHandler = (err, req, res, next) => {
  console.error('Error Details:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method
  });

  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
};
```

### 3. Test Debugging Utilities
```javascript
const testDebugger = {
  log: (message, data = {}) => {
    if (process.env.NODE_ENV === 'test') {
      console.log(`🧪 TEST DEBUG: ${message}`, data);
    }
  }
};
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd testing-and-debugging-ensuring-mern-app-reliability
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   # server/.env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-testing
   JWT_SECRET=your-super-secret-key
   ```

4. **Run the application**
   ```bash
   # Development mode (server only)
   npm run server:dev
   
   # Full stack (if client is set up)
   npm run dev
   ```

---

## 🧪 Running Tests

### Server Tests
```bash
# Run all server tests
cd server
npm test

# Run with coverage
npm run test:coverage

# Run specific test types
npm run test:unit
npm run test:integration

# Watch mode
npm run test:watch
```

### Client Tests
```bash
# Run React tests
cd client
npm test

# Run with coverage
npm run test:coverage

# End-to-end tests
npm run test:e2e
```

### All Tests from Root
```bash
# Run both server and client tests
npm test

# Test coverage report
npm run test:coverage
```

---

## 📊 Test Results

### Current Test Status
- **Total Tests:** 7
- **Passing:** 7
- **Failed:** 0
- **Coverage:** Meeting threshold requirements

### Test Categories
| Test Type | Count | Status |
|-----------|-------|--------|
| Unit Tests | 2 | ✅ Passing |
| Integration Tests | 5 | ✅ Passing |
| **Total** | **7** | **✅ All Passing** |

### Coverage Metrics
- **Statements:** >70%
- **Branches:** >60% 
- **Functions:** >70%
- **Lines:** >70%

---

## 🛠️ Debugging Guide

### Common Issues & Solutions

1. **Database Connection Issues**
   ```javascript
   // Check MongoDB connection
   mongoose.connection.on('error', (err) => {
     console.error('MongoDB connection error:', err);
   });
   ```

2. **Authentication Failures**
   - Verify JWT secret in environment variables
   - Check token expiration settings
   - Validate password hashing

3. **Test Timeouts**
   ```javascript
   // Increase timeout for async operations
   jest.setTimeout(30000);
   ```

### Debugging Commands
```bash
# Run tests with verbose output
npm test -- --verbose

# Debug specific test file
npx jest tests/unit/server.test.js --verbose

# Check test coverage details
npm run test:coverage
```

---

## 📈 Quality Assurance

### Code Quality Measures
- **ESLint** - Code linting and style enforcement
- **Prettier** - Consistent code formatting
- **Husky** - Pre-commit hooks for quality checks

### Testing Best Practices Implemented
- ✅ Isolated test environments
- ✅ Mock external dependencies
- ✅ Comprehensive error testing
- ✅ Realistic test data
- ✅ Automated test execution
- ✅ Coverage threshold enforcement

---

## 🔒 Security Considerations

### Environment Security
- Environment variables excluded via `.gitignore`
- JWT secrets securely managed
- Database credentials protected

### Testing Security
- Test database isolation
- No production data exposure
- Secure token handling in tests

---

## 📝 Assignment Requirements Checklist

| Requirement | Status | Details |
|-------------|---------|---------|
| Testing Environment Setup | ✅ Complete | Server environment fully configured |
| Unit Testing | ✅ Complete | 2 unit tests passing |
| Integration Testing | ✅ Complete | 5 integration tests passing |
| Debugging Techniques | ✅ Complete | Logging, error handling implemented |
| Test Coverage | ✅ Complete | Meets all threshold requirements |
| Client Testing Strategy | 📋 Documented | Comprehensive plan ready for implementation |

---

## 🎯 Conclusion

This assignment successfully demonstrates a robust testing and debugging strategy for MERN stack applications. The server-side implementation provides a solid foundation with comprehensive test coverage, while the client-side strategy outlines a complete testing approach ready for implementation.

### Key Achievements:
- ✅ **7/7 tests passing** with comprehensive coverage
- ✅ **MongoDB Memory Server** integration for isolated testing
- ✅ **Debugging middleware** for development and production
- ✅ **Security best practices** with environment variable management
- ✅ **Scalable test architecture** ready for expansion

### Future Enhancements:
- Implement client-side React testing
- Add end-to-end testing with Cypress
- Integrate continuous testing in CI/CD pipeline
- Expand test scenarios for edge cases

---

## 👨‍💻 Author

Charles Otieno  
MERN Stack Developer Trainee,PLP  Academy  
Assignment Submission - Testing and Debugging MERN Applications
