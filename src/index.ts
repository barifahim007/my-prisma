import app from "./app";

const port = process.env.PORT || 7000;

const main = async () => {
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};
main();
