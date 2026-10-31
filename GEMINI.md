# Local Development & Agent Rules for `capucins-clermont`

## 🚀 Automatic Local Server Management

Always ensure the local development server is active with hot-reloading/auto-reloading enabled:

1. **Port Verification**:
   - At the beginning of interactive sessions or when relevant to the user's request, check if the project's port (**4321**) is listening:
     ```powershell
     Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue
     ```

2. **Automatic Background Startup**:
   - If inactive, automatically launch the dev server in the background as a silent daemon with hot-reload enabled:
     - Command: `npm run dev`
     - Daemon flag: `IsDaemon: true`
     - Wait time: `WaitMsBeforeAsync: 5000` (allowing Vite/Astro to bind the port before backgrounding).

3. **Direct Clickable URL**:
   - Always present the direct clickable link to the user so they never need to remember or type the port:
     - 🌐 **[http://localhost:4321/capucins-clermont/](http://localhost:4321/capucins-clermont/)** (Direct application URL)
     - ⚙️ **[http://localhost:4321/capucins-clermont/admin/](http://localhost:4321/capucins-clermont/admin/)** (Content Management Dashboard)

4. **Clean Server Shutdown**:
   - When the user asks to "stop", "kill", or "shut down" the server:
     - Terminate the background task via the `manage_task` tool (`Action: 'kill'`).
     - Or stop processes listening on port 4321:
       ```powershell
       Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
       ```
     - Confirm cleanly to the user that the server has stopped.

---

## 🛠️ Project Guidelines & Architecture

- **Engine**: Astro 5 with `@tailwindcss/vite` (Tailwind CSS v4).
- **Base Path**: `/capucins-clermont` (configured in `astro.config.mjs` for GitHub Pages).
- **Content Collections**: `src/content/events/` and `src/content/posts/`.
- **Language Policy**:
  - Assistant responses & developer documentation: **English**.
  - Public website pages, metadata & CMS dashboard UI: **French**.
