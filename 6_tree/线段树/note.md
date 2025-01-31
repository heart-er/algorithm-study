**区间染色问题**
一面长为 n 的墙 对一段墙涂色
m 次操作后 [i,j]可以看到多少种颜色

|                    | 使用数组实现 | 线段树  |
| ------------------ | ------------ | ------- |
| 染色操作(更新区间) | O(n)         | O(logn) |
| 查询操作(查询区间) | O(n)         | O(logn) |

**有更新的区间查询问题**
2017 年到现在消费最少的用户?
某个太空区间中天体总量?

规定:左孩子少一些
平衡二叉但不是完全二叉，但是可以**当成满二叉树处理**
堆和线段树都是**平衡二叉树**

n 个元素的区间，数组表示需要多少节点？
需要约 **4n** 的静态空间

线段树主要用于**会更新的区域**

创建线段树=>查询线段树=>更新线段树

因为根节点的值依赖于子节点，所以**后序遍历递归**
