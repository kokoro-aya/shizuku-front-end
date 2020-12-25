export const count = (grid, word) => {
  let cnt = 0
  for (const x of grid)
    for (const y of x)
      if (y === word)
        cnt += 1
  return cnt
}

export const pack = (code, grids, portals, locks, players) => {
  const grid = grids.grid
  const layout = grids.layout
  let layout2s = []
  grids.layout2s.forEach((row, y) => row.forEach((item, x) => {
    if (item.color !== 'WHITE' || item.level !== 0) {
      layout2s = layout2s.concat([{
        x: x, y: y, color: item.color, level: item.level
      }])
    }
  }))
  return {
    code: code,
    grid: grid,
    layout: layout,
    layout2s: layout2s,
    portals: portals,
    locks: locks,
    players: players
  }
}
