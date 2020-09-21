const mockStore = {
  prisma: {
    users: {
      findOne: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn()
    },
  }
};

module.exports.mockStore = mockStore;
