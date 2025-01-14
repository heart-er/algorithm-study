/**
 * @description 计算可以凑成总金额所需的最少的硬币个数
 * @summary 不考虑排列顺序的完全背包问题
 * 计算并返回可以凑成总金额所需的 最少的硬币个数
 * 本题求钱币最小个数，那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数。。
   所以本题并不强调集合是组合还是排列。
 */
const canPartition = function (nums: number[], amount: number) {
  // dp[i]表示面值为i时需要硬币的最少数量
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (const coin of nums) {
    for (let i = 0; i <= amount; i++) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.dir(canPartition([1, 2, 5], 11), { depth: null })

export {}
