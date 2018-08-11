class RightMenu {

    get registration(){
        return browser.element("//a[text()='Registration']")
    }

    get draggable(){
        return browser.element("//a[text()='Draggable']")
    }

    get framesWindows(){
        return browser.element("//a[text()='Frames and windows']")
    }

    goToRegistration(){
        this.registration.click()
    }
}

export default new RightMenu();