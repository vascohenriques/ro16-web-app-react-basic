module.exports = async function (context, req) {
  context.res = {
    body: {
      apiTime: new Date().getTime(),
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
};
