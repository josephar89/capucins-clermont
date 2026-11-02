# Local Development & Agent Rules for `capucins-clermont`

## 🛠️ Local Server Management (On-Demand Only)

**Do NOT automatically start the local dev server.** Only launch or stop the server when the user explicitly asks for it (e.g. "start the server", "run dev", "launch localhost", "stop server").

1. **Launch On User Request**:
   - When the user asks to start/run the server:
     - Command: `npm run dev`
     - Daemon flag: `IsDaemon: true`
     - Wait time: `WaitMsBeforeAsync: 5000` (allowing Vite/Astro to bind the port before backgrounding).
   - Provide direct clickable links:
     - 🌐 **[http://localhost:4321/capucins-clermont/](http://localhost:4321/capucins-clermont/)** (Direct application URL)
     - ⚙️ **[http://localhost:4321/capucins-clermont/admin/](http://localhost:4321/capucins-clermont/admin/)** (Content Management Dashboard)

2. **Shutdown On User Request**:
   - When the user asks to "stop", "kill", or "shut down" the server:
     - Terminate the background task via the `manage_task` tool (`Action: 'kill'`).
     - Stop any processes listening on port 4321:
       ```powershell
       Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
       ```
     - Confirm cleanly to the user that the server has stopped.

---

## 🏛️ Project Guidelines & Architecture

- **Engine**: Astro 5 with `@tailwindcss/vite` (Tailwind CSS v4).
- **Base Path**: `/capucins-clermont` (configured in `astro.config.mjs` for GitHub Pages).
- **Content Collections**: `src/content/events/` and `src/content/posts/`.
- **Language Policy**:
  - Assistant responses & developer documentation: **English**.
  - Public website pages, metadata & CMS dashboard UI: **French**.
