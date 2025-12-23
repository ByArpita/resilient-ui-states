# Resilient UI States – Users Page (Next.js App Router)

This project demonstrates how to build a resilient, state-driven UI in Next.js (App Router) using a real API, clear UI states, and skeleton loading. The goal is to model the UI as a finite set of states instead of relying on scattered boolean flags, making the UI predictable, debuggable, and production-ready.

## ✨ Features

- ✅ Explicit UI states: `loading`, `success`, `empty`, `partial`, `error`
- ✅ Skeleton loading (no spinners)
- ✅ Real API-driven state simulation (`/api/users?state=...`)
- ✅ Clean separation of logic and presentation
- ✅ Component-scoped styling (CSS Modules)
- ✅ Simple state cycling for demo/testing

## 🧠 Core Idea: UI as a State Machine

At any moment, the Users page is in **exactly one state**: `loading`, `success`, `empty`, `partial`, or `error`.

Instead of managing multiple booleans (`isLoading`, `hasError`, `isEmpty`, etc.), the page uses a single state variable to represent the UI state. This prevents impossible UI combinations and keeps rendering logic simple.

## 🚀 How to Run

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Open the app:**
    Open [http://localhost:3000/users](http://localhost:3000/users) in your browser.

## 📄 License

MIT