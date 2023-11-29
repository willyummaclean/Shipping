import { getHaulingShips, getShippingShips } from "./database.js"


export const haulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `<li data-haulerid="${hauler.id}" data-type="hauler">${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const haulerId = itemClicked.dataset.haulerid
        const cargos = getShippingShips()
        
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            let counter = 0
            for (let cargo of cargos) {
                
                if (parseInt(haulerId) === cargo.hauler) {
                    counter ++

                }

            }
            window.alert(`This hauler services ${counter} cargo ships`)
        }
        
            // Get the id of the hauler clicked

            // Start a counter variable at 0

            // Iterate all of the shipping ships

                // Does the haulerId foreign key match the id?

                    // Increase the counter by 1

    }
)