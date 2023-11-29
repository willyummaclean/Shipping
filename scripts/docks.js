import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock" data-location="${dock.location}">The dock in ${dock.location} can hold ${dock.volume} million tons of cargo.</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // get hauling ships data to reference
        const haulers = getHaulingShips()
        // see if item clicked was a dock
        if (itemClicked.dataset.type === "dock") {
        // check through all haulers for matches to dock name  
        let haulerArray = []         
            for (let hauler of haulers) {
        // see if dock location matcher hauler dock 
           
                if (hauler.dock === itemClicked.dataset.location) {
                    haulerArray.push(hauler.name)
                } 
             } if (haulerArray.length === 0) {
                window.alert(`${itemClicked.dataset.location} isn't unloading anything`)
             } else {
                window.alert(`${itemClicked.dataset.location} is unloading ${haulerArray.join(`, `)}`)

             } 
             
        }
        
    }
)
//window.alert(`${itemClicked.dataset.location} is not unloading anything`)
// if else if has 1 hauler display other message
//)
// else display message with all hauler names 


// 