/* 
    Controller Class For Territory Event Listeners
*/
export class Territory {

    element = undefined
    name = ""
    defaultColor = 'floralwhite'
    hoverColor = ""

    constructor(name, hoverColor='green') {
        this.name = name
        this.hoverColor = hoverColor
    }

    Run() {
        this.element = document.getElementById(this.name)
        // Set Colors For Territories Here
        this.element.style.fill = this.defaultColor
        this.element.style.cursor = 'pointer'
        this.AddEventListeners()
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
            this.element.style.fill = this.defaultColor;
            this.element.style.filter = 'url(#filter12951)';
            this.element.style.strokeWidth = '1.2px';
            this.element.style.strokeOpacity = '.58527';
        })
    }

    OnMouseClick() {
        this.element.addEventListener('click', () => {
            this.element.title = this.name
            // Show Some Kind of Popup
        })
    }

    SetPlayerColor(color) {
        this.defaultColor = color;
        this.element.fill = this.defaultColor
    }

    SetHoverColor(color) {

    }

}

export default Territory