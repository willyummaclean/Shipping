import { DockList } from "./docks.js";
import { haulerList} from "./haulers.js";
import { cargosList } from "./cargos.js";

const dockSection = document.querySelector(".dockslist")
dockSection.innerHTML = DockList()

const haulerSection = document.querySelector(".haulerslist")
haulerSection.innerHTML = haulerList()

const cargoSection = document.querySelector(".cargoslist")
cargoSection.innerHTML = cargosList()
