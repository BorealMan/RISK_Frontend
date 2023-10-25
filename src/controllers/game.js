import Territories from './territories'
import Continents from './continents'

export class GameController {
    TerritoryControllers = []
    ContinentControllers = []

    constructor() {
        Object.assign(this.TerritoryControllers, Territories)
        Object.assign(this.ContinentControllers, Continents)
        this.AddEventListeners()
    }

    Run() {
        this.InitTerritoryControllers()
        this.InitContinentControllers()
    }

    InitTerritoryControllers() {
        this.TerritoryControllers.forEach( t => {
            t.Run()
        })
    }

    InitContinentControllers() {
        this.ContinentControllers.forEach( c => {
            c.Run()
        })
    }

    AddEventListeners() {
        window.addEventListener('resize', () => {
            this.TerritoryControllers.forEach( t => {
                t.Update()
            })
        })
    }

}

export default GameController