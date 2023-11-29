import { getShippingShips, getHaulingShips } from "./database.js";

export const cargosList = () => {

    const cargos = getShippingShips()

    let cargosHTML = "<ul>"

    for (let cargo of cargos) {
        
        cargosHTML += `<li data-hauler="${cargo.hauler}" data-type="cargo" data-name="${cargo.name}">${cargo.name}</li>`
             
    }

    cargosHTML += "</ul>"
    return cargosHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const haulers = getHaulingShips()

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargo") {
            // Get the haulerId value of the shipping ship clicked
            let cargoHauler = itemClicked.dataset.hauler
             // Define a default object for the found hauler
            let haulingShip = {}
        
            // Iterate the array of hauler objects
            for (let hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(cargoHauler) === hauler.id ) {
                     // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                      // Show an alert to the user with this format...
                    window.alert(`${itemClicked.dataset.name} is being hauled by ${hauler.name}`)
                }
            } 
          
            // Palais Royal is being hauled by Seawise Giant
    }
}
)