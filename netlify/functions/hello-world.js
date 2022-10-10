exports.handler = async () => {
  const mySecret = process.env.MY_SECRET;
  return {
    statusCode: 200,
    body: `Hello world! Here's my plan for the future: ${mySecret}`,
  };
};
