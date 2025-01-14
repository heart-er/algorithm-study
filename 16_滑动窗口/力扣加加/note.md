滑动窗口协议（Sliding Window Protocol），属于 TCP 协议的一种应用，用于网络数据传输时的流量控制，以避免拥塞的发生。
滑动窗口主要用来处理连续问题。比如题目求解“连续子串 xxxx”，“连续子数组 xxxx”，就应该可以想到滑动窗口。
从类型上说主要有：

1. 固定窗口大小
2. 窗口大小不固定，求解最大的满足条件的窗口
3. 窗口大小不固定，求解最小的满足条件的窗口（上面的 209 题就属于这种）

对于固定窗口，我们只需要固定初始化左右指针 l 和 r，分别表示的窗口的左右顶点，并且保证：

1. l 初始化为 0
2. 初始化 r，使得 r - l + 1 等于窗口大小
3. 同时移动 l 和 r
4. 判断窗口内的连续元素是否满足题目限定的条件
   4.1 如果满足，再判断是否需要更新最优解，如果需要则更新最优解
   4.2 如果不满足，则继续。

对于可变窗口:
模板 1：

```python
初始化慢指针 = 0
初始化 res

for 快指针 in 可迭代集合
   更新窗口内信息
   while 窗口内不符合题意
      扩展或者收缩窗口
      慢指针移动
   符合条件，更新答案
返回 res
```

模板 2：

```jsx
const res: number[] = []
// lackMap与lackNum记录
const lackMap = new Map<string, number>()
let lackNum = p.length
let l = 0
let r = p.length - 1

// 初始化...
 // 开始移动滑动窗口
while (r < s.length - 1) {
  // 不符合条件，扩张右边
  while (lackNum > 0) {
  }
  // 符合条件，更新答案，开始收缩左边
  while (lackNum === 0) {

  }
}
```

此外，连续区间的问题还可用前缀和解决
**连续子数组:前缀和**:**画图可以解决问题**
、930. 和相同的二元子数组前缀和.ts
模板：

```TS
  // 此时的奇数个数,出现了几个
  const map = new Map<number, number>([[0, 1]])
  let sum = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 1 && sum++
    const pre = sum - k
    if (map.has(pre)) res += map.get(pre)!
    map.set(sum, map.get(sum)! + 1 || 1)
  }

  return res
```

atmostK 滑动窗口
母题：:求只包含两种元素的最长连续子序列(水果成蓝)
