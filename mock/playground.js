let playgrounds = [
  {
    id: 1,
    grid: [
      [ "OPEN", "OPEN", "BLOCKED", "OPENEDSWITCH", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "OPEN" ],
      [ "BLOCKED", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN" ],
      [ "GEM", "OPEN", "BLOCKED", "BLOCKED", "GEM", "BLOCKED", "OPEN", "BLOCKED", "GEM"],
      [ "BLOCKED", "OPENEDSWITCH", "GEM", "BLOCKED", "BLOCKED", "GEM", "CLOSEDSWITCH", "BLOCKED", "BLOCKED"],
      [ "BLOCKED", "GEM", "BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "BLOCKED", "BLOCKED"],
    ],
    player: {
      x: 0,
      y: 0,
      dir: 'RIGHT'
    },
  },
  {
    id: 2,
    grid: [
      [ "OPEN", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN", "CLOSEDSWITCH", "OPEN" ],
      [ "BLOCKED", "GEM", "BLOCKED", "GEM", "BLOCKED", "GEM", "BLOCKED", "GEM", "BLOCKED" ],
    ],
    player: {
      x: 0,
      y: 0,
      dir: 'RIGHT'
    },
  },
  {
    id: 3,
    grid: [
      ["OPEN", "OPEN", "OPEN"],
      ["CLOSED", "OPEN", "CLOSED"],
    ],
    player: {
      x: 0,
      y: 0,
      dir: "RIGHT",
    },
  },
]

let random_playground = 0

export default {
  'get /dev/playground/fetch': function (req, res) {
    const responseObj = playgrounds[random_playground % playgrounds.length]
    // const responseObj = playgrounds[0]
    random_playground += 1
    setTimeout(() => {
      res.json(responseObj)
    }, 500)
  },
  'post /dev/playground/add': (req, res) => {
    playgrounds = [...playgrounds, {
      ...req.body,
      id: playgrounds.length + 1
    }]
    res.json({
      success: true,
    })
  },
  'delete /dev/playground/:id': (req, res) => {
    let id = parseInt(req.params.id)
    if (id < 3) {
      setTimeout(() => {
        res.json({
          success: false,
        })
      }, 500)
    } else {
      playgrounds = playgrounds.filter(p => p.id !== id)
      setTimeout(() => {
        res.json({
          success: true,
        })
      }, 500)
    }
  }
}
