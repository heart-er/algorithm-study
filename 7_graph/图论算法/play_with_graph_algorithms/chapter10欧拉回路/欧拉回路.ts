import * as path from 'path'
import { AdjMap } from '../chapter02图的基本表示/图的基本表示/2_邻接表'
import { DFS } from '../chapter04深度优先遍历应用/c03dfs/图的深度优先遍历/dfs'

class EulerLoop {
  public readonly adjMap: AdjMap
  public readonly cc: DFS

  private constructor(adjMap: AdjMap, cc: DFS) {
    this.adjMap = adjMap
    this.cc = cc
  }

  static async asyncBuild(fileName: string) {
    const adjMap = await AdjMap.asyncBuild(fileName)
    const cc = await DFS.asyncBuild('AdjMap', fileName)
    return new EulerLoop(adjMap, cc)
  }

  // 先要判断连通图
  get hasEulerLoop() {
    if (this.cc.CCCount > 1) return false
    for (let v = 0; v < this.adjMap.V; v++) {
      if (this.adjMap.degree(v) % 2 === 1) return false
    }
    return true
  }

  get eulerLoop(): number[] {
    if (!this.hasEulerLoop) return []
    const res: number[] = []
    const clonedAdjMap = this.adjMap.cloneAdj()
    let cur = 0
    const stack: number[] = [cur]

    while (stack.length) {
      if (clonedAdjMap.degree(cur) !== 0) {
        stack.push(cur)
        const next = clonedAdjMap.adj(cur).shift()!
        clonedAdjMap.removeEdge(cur, next)
        cur = next
      } else {
        // 回退
        res.push(cur)
        cur = stack.pop()!
      }
    }

    // 有向图需要反转
    return res.reverse()
  }
}

const main = async () => {
  const fileName = path.join(__dirname, 'g.txt')
  const el = await EulerLoop.asyncBuild(fileName)
  // console.log(el.adjMap)
  // console.log(el.dfs(0))
  // console.log(el.hasEulerLoop)
  console.log(el.eulerLoop)
}
main()

export { EulerLoop }
