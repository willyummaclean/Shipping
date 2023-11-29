const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "BigBopper", dock: "Shanghai, China" },
        { id: 2, name: "Elvis", dock: "Busan, South Korea"},
        { id: 3, name: "BlindLemon", dock: "Rotterdam, The Netherlands"},
        { id: 4, name: "SoulMan", dock: "Shanghai, China"}
    ],
    shippingShips: [
        { id: 1, name: "Esmarelda", hauler: 1 },
        { id: 2, name: "Quasimodo", hauler: 2 },
        { id: 3, name: "Frollo", hauler: 3, },
        { id: 4, name: "Djalli", hauler: 4  },
    ] 
}

const docksSorted = database.docks.sort((a, b) => {
    const nameA = a.location.toUpperCase(); // ignore upper and lowercase
    const nameB = b.location.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  const haulersSorted = database.haulers.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  const shippingShipsSorted = database.shippingShips.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

export const getDocks = () => {
    return docksSorted.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return haulersSorted.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return shippingShipsSorted.map(shippingship =>({...shippingship}))
}

