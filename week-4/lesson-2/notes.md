## Build sizes (for gzip comparison next lesson)
 
| file | raw | gzipped |
|---|---|---|
| dist/index.html | 0.46 kB | 0.29 kB |
| dist/assets/index-nqMpL4T3.css | 1.78 kB | 0.81 kB |
| dist/assets/index-Bd61Fi46.js | 191.79 kB | 60.46 kB |


## Lesson 3 — gzip results (manual, gzip -9 -k)
- index-Bd61Fi46.js: 187KB → 58KB (~69% saved)
- index-nqMpL4T3.css: 1.7KB → 829B (~51% saved)


### The two HTTP headers

- Request: `Accept-Encoding: gzip`: the browser announcing "I can
  decompress gzip." Sent automatically on every request.
- Response: `Content-Encoding: gzip`: the server labeling the body as
  gzipped so the browser decompresses it before parsing. If the server
  omits this, the browser tries to parse raw compressed bytes as JS and
  the page breaks. 

### The ESP32 gotcha

On the ESP32 Arduino core, `serveStatic` ignores `Accept-Encoding` and
serves the uncompressed file when both versions exist. We ship only
the `.gz` files in `data/` and register explicit `server.on` handlers
that open the `.gz` from SPIFFS, set `Content-Encoding: gzip` manually,
and stream it. 