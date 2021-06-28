const functions = {
  add: (num1, num2) => {
    return num1 + num2;
  },

  isNull: () => null,

  checkValue: x => x,

  createUser: () => {
    const user = {
      firstName: 'Tyler',
    };

    user['lastName'] = 'Austin';

    return user;
  },
};

module.exports = functions;
