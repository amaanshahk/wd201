const http = require("http");
const fs = require("fs");

const args = require("minimist")(process.argv.slice(2), {
  default: {
    port: "3000",
  },
});

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

http
  .createServer((request, response) => {
    let url = request.url;
    if (url.endsWith(".js")) {
      fs.readFile(`public${url}`, (err, content) => {
        if (err) {
          throw err;
        }
        response.writeHeader(200, { "Content-Type": "text/javascript" });
        response.write(content);
        response.end();
      });
    } else {
      response.writeHeader(200, { "Content-Type": "text/html" });
      switch (url) {
        case "/project":
          response.write(projectContent);
          response.end();
          break;
        case "/registration":
          response.write(registrationContent);
          response.end();
          break;
        default:
          response.write(homeContent);
          response.end();
          break;
      }
    }
  })
  .listen(args.port);
