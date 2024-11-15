exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey: process.env.NEWS_API_KEY }),
  };
};
