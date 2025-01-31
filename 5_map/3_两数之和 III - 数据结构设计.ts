// add写find读
// 如果add多find少 add需要O(1)
// 如果add少find多 find需要O(1)
class TwoSum1 {
  private numsSet: Set<number>
  private sumSet: Set<number>
  constructor() {
    this.numsSet = new Set()
    this.sumSet = new Set()
  }

  add(number: number): void {
    this.numsSet.forEach(num => this.sumSet.add(num + number))
    this.numsSet.add(number)
  }

  /**
   *
   * @param value 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等
   */
  find(value: number): boolean {
    return this.sumSet.has(value)
  }
}

class TwoSum2 {
  private valueToFreq: Map<number, number>
  constructor() {
    this.valueToFreq = new Map()
  }

  add(number: number): void {
    this.valueToFreq.set(number, (this.valueToFreq.get(number) || 0) + 1)
  }

  /**
   *
   * @param value 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等
   */
  find(value: number): boolean {
    for (const key of this.valueToFreq.keys()) {
      const match = value - key
      if (match === key && this.valueToFreq.get(key)! >= 2) return true
      if (match !== key && this.valueToFreq.has(match)) return true
    }

    return false
  }
}

// leetcode的测试用例读少写多

export {}
