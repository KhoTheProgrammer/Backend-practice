const http = require("http");
const server = http.createServer((req, res) => {
  // Default path
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  // Home page
  else if (req.url === "/about") {
    res.end("This is about page");
  }
  // 404 page
  else {
    res.end(
      `<h1>OOPS!!</h1>
        <p>we cant seem to find the page </p>
        <a href= "/">back to home</a>`
    );
  }
});

server.listen(5000);
