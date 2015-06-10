function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(subUser) {
        return goodUsers.some(function(srcUser) {
            return srcUser.id === subUser.id;
        });
    });
  };
}

module.exports = checkUsersValid;
