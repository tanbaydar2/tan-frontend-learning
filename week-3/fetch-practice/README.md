# Fetch Practice

A tiny, self-contained page that proves three Week 3 / Lesson 2 skills: an async
`fetch` that writes JSON to the DOM, a `POST` with a JSON body and headers, and
`try/catch` + `res.ok` error handling. It mocks the EVB-01 REST shape (`status`,
`settings`) so the habits transfer to the device later — but it talks only to a
local mock file and the on-page log. No real server.

## How to run it

`fetch` needs a real `http://` origin — opening the file directly as
`file://...` will fail with a security error. So serve the folder over HTTP:

```sh
cd week-3/fetch-practice
python3 -m http.server
```

Then open <http://localhost:8000/> in your browser.

## What each file does

- **index.html** — the markup; it loads `script.js` with a deferred `<script src>`.
- **script.js** — wires the two buttons and runs the two async functions.
- **status.json** — the mock `GET status` payload: `{ "battery": 87, "temperature": 24.5 }`.
- **README.md** — this file.

## Try it

- Click **Load status** → the page shows `87%` and `24.5°C` and logs a success line.
- Click **Save settings** → it logs the exact JSON body, then logs an *expected*
  failure (there's no server to receive the POST). The page does not reload or freeze.

## The three "before you move on" checks → where each lives

- **Check 1 — async fetch JSON into the DOM:** `loadStatus()` in `script.js` —
  `const data = await res.json()` followed by the two `.textContent = ...` lines.
- **Check 2 — POST a JSON body with correct headers:** `saveSettings()` — the
  `fetch("./settings", { method: "POST", headers: { "Content-Type": "application/json" }, body })` call.
- **Check 3 — try/catch + res.ok:** both functions wrap their logic in `try { ... } catch (err) { ... }`,
  and each throws on `if (!res.ok)` before using the response.
