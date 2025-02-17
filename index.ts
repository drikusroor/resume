const server = Bun.serve({
  fetch(req) {
   const url = new URL(req.url);
    if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
        return new Response(Bun.file(import.meta.dir + "/index.html"));
    }
    
    // otherwise, return the file from the public folder
    return new Response(Bun.file(import.meta.dir + "/public" + url.pathname));
  }
});

console.log(`Listening on http://localhost:${server.port}`);

export default server;