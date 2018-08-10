class RightMenu {

    get registration(){
        return browser.element("//a[text()='Registration']")
    }

    get draggable(){
        return browser.element("//a[text()='Draggable']")
    }

    get frameswindows(){
        return browser.element("//a[text()='Frames and windows']")
    }

    go_to_registration(){
        return this.registration.click()
    }
}