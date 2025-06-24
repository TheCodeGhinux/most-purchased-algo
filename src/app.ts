import { ItemCount, Transaction } from "./interfaces/interfaces";

/**
 * Approach 1: Memory-efficient using Map
 */
function getTop3ItemsEfficient(transactions: Transaction[]): ItemCount[] {
  // Count occurrences using Map for O(1) lookups
  const itemCounts = new Map<string, number>();

  for (const transaction of transactions) {
    const quantity = transaction.quantity || 1;
    const currentCount = itemCounts.get(transaction.itemId) || 0;
    itemCounts.set(transaction.itemId, currentCount + quantity);
  }

  // Convert to array and sort to get top 3
  const sortedItems = Array.from(itemCounts.entries())
    .map(([itemId, totalQuantity]) => ({ itemId, totalQuantity }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity)
    .slice(0, 3);

  return sortedItems;
}


function getTop3ItemsOptimized(transactions: Transaction[]): ItemCount[] {
  const itemCounts = new Map<string, number>();
  let topItems: ItemCount[] = [];

  for (const transaction of transactions) {
    const quantity = transaction.quantity || 1;
    const currentCount = itemCounts.get(transaction.itemId) || 0;
    const newCount = currentCount + quantity;
    itemCounts.set(transaction.itemId, newCount);

    // Update top 3 if this item qualifies
    updateTop3(topItems, { itemId: transaction.itemId, totalQuantity: newCount });
  }

  return topItems.sort((a, b) => b.totalQuantity - a.totalQuantity);
}

function updateTop3(topItems: ItemCount[], newItem: ItemCount): void {
  const existingIndex = topItems.findIndex(item => item.itemId === newItem.itemId);

  if (existingIndex !== -1) {
    topItems[existingIndex] = newItem;
  } else if (topItems.length < 3) {
    topItems.push(newItem);
  } else {
    const minIndex = topItems.reduce((minIdx, item, idx) =>
      item.totalQuantity < topItems[minIdx].totalQuantity ? idx : minIdx, 0);

    if (newItem.totalQuantity > topItems[minIndex].totalQuantity) {
      topItems[minIndex] = newItem;
    }
  }
}

// Example usage and benchmarking
function generateMockTransactions(count: number): Transaction[] {
  return Array.from({ length: count }, (_, i) => ({
    itemId: `item_${Math.floor(Math.random() * 10000)}`, 
    quantity: Math.floor(Math.random() * 5) + 1,
  }));
}

function benchmark() {
  console.log('Generating 1 million transactions...');
  const transactions = generateMockTransactions(1000000);

  console.log('Running Approach 1 (Efficient)...');
  const start1 = performance.now();
  const result1 = getTop3ItemsEfficient(transactions);
  const end1 = performance.now();

  console.log('Running Approach 2 (Optimized)...');
  const start2 = performance.now();
  const result2 = getTop3ItemsOptimized(transactions);
  const end2 = performance.now();

  console.log(`\nResults:`);
  console.log(`Approach 1 time: ${(end1 - start1).toFixed(2)}ms`);
  console.log(`Approach 2 time: ${(end2 - start2).toFixed(2)}ms`);
  console.log(`\nTop 3 items (Approach 1):`, result1);
  console.log(`Top 3 items (Approach 2):`, result2);
}

// Run benchmark
benchmark();