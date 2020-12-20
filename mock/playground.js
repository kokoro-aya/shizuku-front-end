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
      ["BLOCKED", "BLOCKED", "BLOCKED", "OPEN", "OPEN", "CLOSEDSWITCH", "OPEN", "OPEN", "CLOSEDSWITCH", "OPEN", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED"],
      ["BLOCKED", "OPEN", "OPEN", "OPEN", "GEM", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "OPEN", "CLOSEDSWITCH", "OPEN", "OPEN", "OPENEDSWITCH", "BLOCKED"],
      ["BLOCKED", "CLOSEDSWITCH", "GEM", "OPEN", "BLOCKED", "BLOCKED", "GEM", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "OPEN", "CLOSEDSWITCH", "OPEN", "GEM"],
      ["BLOCKED", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "CLOSEDSWITCH", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "BLOCKED", "OPEN", "OPEN"],
      ["OPENEDSWITCH", "GEM", "CLOSEDSWITCH", "OPEN", "BLOCKED", "BLOCKED", "GEM", "OPEN", "CLOSEDSWITCH", "OPEN", "OPEN", "BLOCKED", "BLOCKED", "OPEN", "OPEN"],
      ["BLOCKED", "BLOCKED", "BLOCKED", "OPEN", "GEM", "BLOCKED", "BLOCKED", "OPEN", "OPEN", "BLOCKED", "GEM", "BLOCKED", "BLOCKED", "OPEN", "BLOCKED"],
      ["BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED", "OPEN", "OPEN", "OPEN", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED", "GEM", "BLOCKED"],
    ],
    player: {
      x: 7,
      y: 6,
      dir: "UP",
    },
  },
  {
    id: 4,
    grid: [
      ['BLOCKED', 'OPEN', 'GEM', 'OPEN', 'BLOCKED', 'OPEN', 'OPEN', 'GEM', 'OPEN'],
      ['BLOCKED', 'GEM', 'BLOCKED', 'OPEN', 'BLOCKED', 'GEM', 'BLOCKED', 'OPEN', 'OPEN'],
      ['BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'OPEN'],
      ['BLOCKED', 'OPEN', 'BLOCKED', 'GEM', 'BLOCKED', 'OPEN', 'BLOCKED', 'GEM', 'OPEN'],
      ['BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'BLOCKED', 'GEM', 'BLOCKED', 'OPEN', 'OPENEDSWITCH'],
      ['BLOCKED', 'GEM', 'BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'BLOCKED', 'OPEN', 'OPEN'],
      ['CLOSEDSWITCH', 'OPEN', 'BLOCKED', 'GEM', 'OPEN', 'OPEN', 'BLOCKED', 'OPEN', 'OPEN'],
    ],
    player: {
      x: 7,
      y: 6,
      dir: 'UP',
    },
  },
  {
    id: 5,
    grid: [
      ['GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', ],
      ['GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', ],
      ['GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', ],
      ['GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', ],
      ['GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', ],
      ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', ],
      ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', ],
      ['GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', ],
      ['GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', ],
      ['GEM', 'OPEN', 'GEM', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', ],
      ['OPEN', 'GEM', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', ],
      ['OPEN', 'GEM', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'GEM', 'OPEN', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', 'GEM', 'GEM', 'GEM', 'OPEN', 'OPEN', ],
    ],
    player: {
      x: 0,
      y: 0,
      dir: 'RIGHT',
    }
  }
]

let random_playground = 0

export default {
  'get /dev/playground/fetch': function (req, res) {
    // const responseObj = playgrounds[random_playground % playgrounds.length]
    const responseObj = playgrounds[4]
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
