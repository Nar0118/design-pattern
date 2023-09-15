class Server {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  url() {
    return `${this.host}:${this.port}`;
  }
}

function aws(server) {
  server.port = 443;
  server.isChanged = true;
  return server.url();
}

const server = new Server("192.168.55.22", "8080");
console.log("aws", aws(server));
console.log("server", server);
