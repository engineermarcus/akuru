# ⚡ Akuru

> *"Because why text your friends manually when a server running Node.js can do it with 100% less emotional baggage?"*

**Akuru** is a lightweight, cloud-synced WhatsApp automation client and bot built on top of [`@whiskeysockets/baileys`](https://github.com/WhiskeySockets/Baileys) v7. It features painless pairing via 8-digit codes, automated cloud-backed session management (so you never have to scan a QR code with a cracked camera again), and seamless reconnection logic.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🏗️ How It Works (The 30-Second Architecture)](#️-how-it-works-the-30-second-architecture)
- [🚀 Quick Start](#-quick-start)
  - [Step 1: Get Your Pairing Code](#step-1-get-your-pairing-code)
  - [Step 2: Clone & Install](#step-2-clone--install)
  - [Step 3: Configure Environment](#step-3-configure-environment)
  - [Step 4: Launch](#step-4-launch)
- [⚙️ Configuration (`settings.js` / `.env`)](#️-configuration-settingsjs--env)
- [🛠️ Repository Structure](#️-repository-structure)
- [🧩 Troubleshooting (When Reality Disagrees With Your Expectations)](#-troubleshooting-when-reality-disagrees-with-your-expectations)
- [📜 License](#-license)

---

## ✨ Features

- **No QR Code Gymnastics**: Pair using a clean 8-digit numeric code directly from your browser.
- **Cloud-Backed Session Sync**: Sessions are pushed securely to GitHub storage upon pairing and automatically fetched with Git sparse checkout on boot.
- **Auto-Reconnection**: Handles WhatsApp Web protocol disconnects, stream restarts (Error 515), and network hiccups without having a breakdown.
- **Clean Slate Guarantee**: Purges stale local credentials on startup to prevent corrupted session state nightmares.
- **Private Chat Filter**: Pre-configured to ignore group spam, status broadcast noise, and echo chambers so you only process legitimate 1-on-1 messages.

---

## 🏗️ How It Works (The 30-Second Architecture)

```
 ┌────────────────────────────────────────┐
 │   1. Visit Akuru Pairing Portal        │
 │   https://akuru-pair-site.onrender.com │
 └──────────────────┬─────────────────────┘
                    │ Enter phone number
                    ▼
 ┌────────────────────────────────────────┐
 │   2. Receive 8-digit Pairing Code      │
 │   (Link in WhatsApp -> Linked Devices) │
 └──────────────────┬─────────────────────┘
                    │ Pairing completes
                    ▼
 ┌────────────────────────────────────────┐
 │   3. Session ID Sent to Your WhatsApp  │
 │   (Credentials auto-saved to cloud)    │
 └──────────────────┬─────────────────────┘
                    │ Set SESSION=session_XXXX
                    ▼
 ┌────────────────────────────────────────┐
 │   4. Run `npm start` (Akuru Core)      │
 │   - Pulls credentials via git sparse   │
 │   - Connects socket & listens          │
 └────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Step 1: Get Your Pairing Code

Forget pointing your webcam at a blurry monitor. 

1. Head over to the official pairing portal:
   👉 **[https://akuru-pair-site.onrender.com](https://akuru-pair-site.onrender.com)**
2. Enter your full WhatsApp phone number (with country code, no `+` or spaces, e.g., `254712345678`).
3. Grab the generated **8-digit pairing code**.
4. Open **WhatsApp** on your phone:
   - Go to **Settings** > **Linked Devices** > **Link a Device**
   - Tap **"Link with phone number instead"**
   - Type the code.
5. Check your own WhatsApp chat — the bot will immediately message you your unique **Session ID** (e.g., `session_A1B2C3D4`).

---

### Step 2: Clone & Install

Ensure you have **Node.js 18+** and **Git** installed on your machine or VPS.

```bash
# Clone this repository
git clone https://github.com/engineermarcus/akuru.git
cd akuru

# Install dependencies (yes, npm will download half the internet, be patient)
npm install
```

---

### Step 3: Configure Environment

Create a `.env` file in the root directory (or edit `settings.js` directly if you enjoy living on the edge):

```env
# The Session ID you received in your WhatsApp message
SESSION=session_A1B2C3D4

# Your target or owner phone number (international format, no +)
PHONE=254712345678
```

---

### Step 4: Launch

Fire it up and watch the magic happen:

```bash
npm start
# or
node index.js
```

**Expected terminal output:**
```text
🗑️  Cleared local sessions
📥 Pulling session session_A1B2C3D4 from GitHub...
✅ Saved creds.json
📦 Session pulled successfully
🥃 Baileys v7 — WA Web v2.3000.x — Session: session_A1B2C3D4
🔄 Connecting...
✅ Connected! Bot is online 🚀
📞 254712345678:0@s.whatsapp.net
✅ Message sent!
👂 Listening for incoming messages...
```

---

## ⚙️ Configuration (`settings.js` / `.env`)

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `SESSION` | `string` | `""` | The unique session identifier returned during pairing. Used to retrieve your auth keys. |
| `PHONE` | `string` | `"254725693306"` | The fallback / primary phone number associated with notifications and messages. |

---

## 🛠️ Repository Structure

```text
.
├── index.js          # Main entrypoint: lifecycle bootstrapper & test runner
├── connect.js        # Core Baileys socket initializer & event handlers
├── pull.js           # Sparse-checkout session fetcher from remote storage
├── settings.js       # Global configuration loader (reads .env)
├── package.json      # Dependencies and execution scripts
└── pair/             # (Optional) Standalone pairing server & UI
    ├── server.js     # Express server exposing the /pair API endpoint
    ├── pair.js       # Headless pairing worker
    └── public/       # Front-end pairing web interface
```

---

## 🧩 Troubleshooting (When Reality Disagrees With Your Expectations)

<details>
<summary><b>🔴 Error: "No session ID in settings.js"</b></summary>

You forgot to set your `SESSION` in `.env` or `settings.js`. The bot cannot read your mind (yet). Go get one at [https://akuru-pair-site.onrender.com](https://akuru-pair-site.onrender.com).
</details>

<details>
<summary><b>🔴 Error: "Session not found in repo" (Code 404)</b></summary>

The session identifier you provided doesn't exist in the remote storage. Either you mistyped it, or the pairing process didn't finish pushing credentials. Pair again and double-check the ID.
</details>

<details>
<summary><b>🔴 Disconnect Code: 401 / Logged Out</b></summary>

You unlinked the session from your WhatsApp app on your phone. Delete the session folder if present, visit the [Pairing Portal](https://akuru-pair-site.onrender.com), generate a fresh session, and update `.env`.
</details>

<details>
<summary><b>🟡 Stream Restart (Code: 515)</b></summary>

WhatsApp Web occasionally resets socket streams right after pairing. Akuru handles this automatically by re-binding credentials on the fly. No panic required.
</details>

---

## 📜 License

ISC License © [engineermarcus](https://github.com/engineermarcus)

---

<p align="center">
  <sub>Built with ☕, questionable sleep schedules, and <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.</sub>
</p>
