export const count = (grid, word) => {
  let cnt = 0
  for (const x of grid)
    for (const y of x)
      if (y === word)
        cnt += 1
  return cnt
}
