# Day Route

Day Route is a simple local task planner. Its Quick revise panel includes running notes and an AI study helper that answers questions using the task topic, notes, and general knowledge.

Day Route opens directly to the task planner without a sign-in screen. Tasks and notes are saved in this browser on this device.

## Start Day Route

1. Install Node.js 18 or newer if it is not already installed.
2. In PowerShell, change to this folder and start the local app:

   ```powershell
   npm start
   ```

3. Open `http://127.0.0.1:3000` in your browser. Use this address instead of opening `index.html` directly.

## Deploy on Render

The included `render.yaml` configures a free Render web service. Push this folder to a GitHub repository, then in Render choose **New > Blueprint** and connect that repository. Render will build and start Day Route from the Blueprint. Tasks and notes are stored in each visitor's browser, so they do not sync between devices. The AI helper stays off unless you add `OPENAI_API_KEY` in the Render service's environment settings; adding a key can incur OpenAI API charges.

AI chat is optional. To enable it, set your OpenAI API key in PowerShell before running `npm start`:

```powershell
$env:OPENAI_API_KEY = "your-api-key"
npm start
```

The key stays in the server environment and is never sent to browser code. If you leave out the key, the task list and saved notes still work, but the AI chat will show setup guidance. The server uses `gpt-6-astra` by default; set `OPENAI_MODEL` before starting to use another model available to your account.

Chat questions, the task title, and the current running notes are sent to the OpenAI Responses API to generate answers. The server sends `store: false` and keeps the key out of the page. OpenAI API usage may incur charges under your API account.
