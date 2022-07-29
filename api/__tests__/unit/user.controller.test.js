const authController = require('../../controllers/auth')
const User = require('../../models/user')
const jwt = require("jsonwebtoken");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('auth controller', () => {
    beforeEach(() =>  jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe('register', () => {
        test('it creates a new user and returns a JWT token with a status of 201', async () => {
            let testUser = {
                name: "New User",
                email: "name@email.com",
                password: "Secret23!",
              }
              let token = "token"
            testUser.createJWT = jest.fn(() => token)
            jest.spyOn(User, 'create')
                 .mockResolvedValue(testUser);
                  const mockReq = { body: testUser }
                  await authController.register(mockReq, mockRes);
                  expect(mockStatus).toHaveBeenCalledWith(201);
                  expect(mockJson).toHaveBeenCalledWith({token});
        })
    })
});
