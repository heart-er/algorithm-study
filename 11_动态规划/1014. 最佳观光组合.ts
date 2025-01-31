/**
 * @param {number[]} values  2 <= values.length <= 50000
 * @return {number}
 * @summary
 * 对于数组的每一项A[j] - j 我们都去前面找最大的 A[i] + i （这样才能保证结果最大）。
 */
const maxScoreSightseeingPair = function (values: number[]): number {
  let res = 0
  let max = values[0] + 0
  for (let i = 1; i < values.length; i++) {
    res = Math.max(res, max + values[i] - i)
    max = Math.max(max, values[i] + i)
  }
  return res
}

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]))
// 输出：11
// 解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
