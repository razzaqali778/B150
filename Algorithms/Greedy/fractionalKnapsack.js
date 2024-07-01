class Item {
  constructor(value, weight) {
    this.value = value
    this.weight = weight
  }
}

function fractionalKnapsack(items, capacity) {
  items.forEach((item) => {
    item.ratio = item.value / item.weight
  })

  items.sort((a, b) => b.ratio - a.ratio)

  let totalValue = 0
  let currentWeight = 0

  for (let item of items) {
    if (currentWeight + item.weight <= capacity) {
      currentWeight += item.weight
      totalValue += item.value
    } else {
      let remain = capacity - currentWeight
      totalValue += item.value * (remain / item.weight)

      break
    }
  }

  return totalValue
}

fractionalKnapsack([new Item(60, 10), new Item(100, 20), new Item(120, 30)], 50)

const fractionalKnapsackInputArray = (profitWeightPairs, capacity) => {
  // Calculate value-to-weight ratio for each item
  profitWeightPairs.forEach((item) => {
    item.push(item[0] / item[1]) // [profit, weight, ratio]
  })

  // Sort items by ratio in descending order
  profitWeightPairs.sort((a, b) => b[2] - a[2])

  let totalValue = 0
  let currentWeight = 0

  for (let item of profitWeightPairs) {
    if (currentWeight + item[1] <= capacity) {
      // Take the whole item
      currentWeight += item[1]
      totalValue += item[0]
    } else {
      // Take the fractional part of the item
      let remain = capacity - currentWeight
      totalValue += item[0] * (remain / item[1])
      break
    }
  }

  return totalValue
}

fractionalKnapsackInputArray(
  [
    [60, 10],
    [100, 20],
    [120, 30],
  ],
  50
)

function fractionalKnapsackDynamic(profitWeightPairs, capacity) {
  profitWeightPairs.sort((a, b) => b[0] / b[1] - a[0] / a[1])

  let totalValue = 0
  let remainingCapacity = capacity

  for (let i = 0; i < profitWeightPairs.length; i++) {
    if (remainingCapacity === 0) break

    let [profit, weight] = profitWeightPairs[i]

    if (weight <= remainingCapacity) {
      totalValue += profit
      remainingCapacity -= weight
    } else {
      totalValue += profit * (remainingCapacity / weight)
      remainingCapacity = 0
    }
  }

  return totalValue
}

let profitWeightPairs = [
  [60, 10],
  [100, 20],
  [120, 30],
]

let capacity = 50

console.log(
  'Maximum value in knapsack =',
  fractionalKnapsack(profitWeightPairs, capacity)
)
