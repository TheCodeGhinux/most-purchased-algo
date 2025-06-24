# 📊 Most Purchased Items – Top 3 Analyzer

This TypeScript application benchmarks two different approaches (**Efficient** and **Optimized**) for identifying the **top 3 most frequently purchased items** from a large number of transactions.

---

## 🚀 Features

- Efficient item frequency counting using `Map`
- Optimized real-time top-3 tracking logic
- Random transaction generator (up to **1 million** items)
- Performance benchmarking between the two approaches

---

## 📁 Project Structure

most-purchased/
├── src/
│   ├── interfaces/
│   │   └── interfaces.ts     # TypeScript interfaces (Transaction, ItemCount)
│   └── app.ts                # Main application file with logic and benchmarking
├── package.json
├── tsconfig.json
└── README.md



---

## 📦 Requirements

Ensure you have the following installed:

- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)
- **TypeScript**

---

## 📥 Installation

#### Clone the repository

```bash
git clone https://github.com/your-username/most-purchased.git
cd most-purchased
```

Install dependencies
```bash
npm install
```
#### 🔧 Running the App (Dev Mode)
**Run the app in development mode with hot-reloading:**

```bash
npm run dev
```
**This will watch for changes inside the src/ directory and re-run the script using ts-node.**

```less
Generating 1 million transactions...
Running Approach 1 (Efficient)...
Running Approach 2 (Optimized)...

Results:
Approach 1 time: 180.32ms
Approach 2 time: 145.67ms

Top 3 items (Approach 1): [ ... ]
Top 3 items (Approach 2): [ ... ]
```

#### 📄 Interfaces
  **Transaction**
  Represents a purchase transaction:
```ts
interface Transaction {
  itemId: string;
  quantity?: number;
}
```

#### 🛠️ Build (Optional)
**To compile TypeScript files manually:**
```bash
npx tsc
```
