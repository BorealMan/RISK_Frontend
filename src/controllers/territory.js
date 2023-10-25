/* 
    Controller Class For Territory Event Listeners
*/
export class Territory {

    element = undefined
    name = ""
    color = 'floralwhite'
    hoverColor = ""

    constructor(name, offset_x=0, offset_y=0) {
        this.name = name
        this.hoverColor = "red"

        this.offset_x = offset_x
        this.offset_y = offset_y
    }

    Run() {
        this.element = document.getElementById(this.name)
        // Set Colors For Territories Here
        this.element.style.fill = this.color
        this.element.style.cursor = 'pointer'
        this.AddEventListeners()
        this.DrawTroopIcon(1    )
    }

    Update() {
        this.DrawTroopIcon()
    }

    AddEventListeners() {
        this.OnMouseOver()
        this.OnMouseOut()
        this.OnMouseClick()
    }

    OnMouseOver() {
        this.element.addEventListener('mouseover', () => {
            this.element.style.fill = this.hoverColor;
            this.element.style.transition = '600ms ease all'
            this.element.style.filter = 'none'
            this.element.style.strokeWidth = '2.5px';
            this.element.style.strokeOpacity = '2';
        })
    }

    OnMouseOut() {
        this.element.addEventListener('mouseout', () => {
            this.element.style.fill = this.color;
            this.element.style.filter = 'url(#filter12951)';
            this.element.style.strokeWidth = '1.2px';
            this.element.style.strokeOpacity = '.58527';
        })
    }

    OnMouseClick() {
        this.element.addEventListener('click', () => {
            // this.element.title = this.name
            // Show Some Kind of Popup
            console.log(this.name)
        })
    }

    SetPlayerColor(color) {
        this.color = color;
        this.element.fill = this.color
        this.Update()
    }

    GetCenter() {
        const cords = this.element.getBoundingClientRect()
        this.center = {x: cords.x + cords.width/2, y: cords.y + cords.height/2}
        this.center.x = this.center.x * (100 - this.offset_x) / 100
        this.center.y = this.center.y * (100 - this.offset_y) / 100
    }

    DrawTroopIcon(troopCount=0) {
        // if (troopCount <= 0) return;
        this.GetCenter()
        this.RemoveTroopIcon()
        const troopIcon = document.createElement("div")
        troopIcon.innerText = troopCount.toString()
        troopIcon.id = `${this.name}-troopicon`
        // troopIcon.style.background = this.color
        troopIcon.style.background = "black"
        troopIcon.style.borderRadius = "50%"
        troopIcon.style.color = "white"
        troopIcon.style.padding = ".1rem .3rem"
        // troopIcon.style.padding = ".25rem"
        troopIcon.style.position = "absolute"
        troopIcon.style.left = `${this.center.x}px`
        troopIcon.style.top = `${this.center.y}px`
        const troopIcons = document.getElementById("game-board")
        troopIcons.appendChild(troopIcon)
    }

    RemoveTroopIcon() {
        try {
            document.getElementById(`${this.name}-troopicon`).remove()
        } catch(err) {

        }
    }

}

export default Territory