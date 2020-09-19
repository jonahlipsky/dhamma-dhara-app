const mockStore = {
  users: {
    findOne: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn
  },
};

module.exports.mockStore = mockStore;
