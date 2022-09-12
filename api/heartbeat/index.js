const { getUserId } = require("../core")

module.exports = async function (context, req) {
  context.res = {
    body: {
      principalId: getUserId(req),
      apiTime: new Date().getTime(),
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
};
