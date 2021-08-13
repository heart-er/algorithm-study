class StockSpanner {
  constructor(private prices: [number, number][] = [[Infinity, 0]]) {}

  next(price: number) {
    let res = 1
    while (this.prices.length && this.prices[this.prices.length - 1][0] < price) {
      res += this.prices[this.prices.length - 1][1]
      this.prices.pop()
    }
    this.prices.push([price, res])
    return res
  }
}

const ss = new StockSpanner()
console.log(ss.next(100))
console.log(ss.next(80))
console.log(ss.next(60))
console.log(ss.next(70))
console.log(ss.next(60))
console.log(ss.next(75))
console.log(ss.next(85))
