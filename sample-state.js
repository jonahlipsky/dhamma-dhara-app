sample_state = {
  "users": {
    1: { 
      id: 1,
      login: "lysha",
      admin: 1,
      superadmin: 1
      }, 
    2: { 
      id: 2,
      login: "server",
      admin: 0,
      superadmin: 0
    },
    3: {
      id: 3,
      login: "VMC Staff",
      admin: 1, 
      superadmin: 0
    },
    4: {
      id: 4,
      login: "Server",
      admin: 0,
      superadmin: 0
    }
  },
  "locations": {
    1: {
      id: 1,
      name: "L5",
      svg_id: "MRA_L5",
      parent: 2,
    }, 
    2: {
      id: 2,
      name: "Men's residence A",
      svg_id: "MRA",
      parent: null
    },
    3: {
      id: 3,
      name: "Womens residence A",
      svg_id: "WRA",
      parent: null
    },
    4: {
      id: 4,
      name: "Basement room 3",
      svg_id: "WRA_BR3",
      parent: 3
    }

  },
  "items": {
    1: {
      id: 1,
      name: "Water boilers",
      locations: [2, 4]
    }
  },
  "selected_items": [1],
  "current_user": [1]
};
