/**
 * @param {number[][]} rooms
 * @return {boolean}
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 * 如果能进入每个房间返回 true，否则返回 false。
 * @summary  求解无向图连通分量
 */
const canVisitAllRooms = function (rooms: number[][]): boolean {
  const visited = new Set<number>([0])
  const dfs = (start: number, visited: Set<number>) => {
    for (const next of rooms[start]) {
      if (visited.has(next)) continue
      visited.add(next)
      dfs(next, visited)
    }
  }
  dfs(0, visited)
  return visited.size === rooms.length
}

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))

export default 1
