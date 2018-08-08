class RightMenu {

    get registration(){

        //elements with certain text
        //browser.element("a=Registration")
        //elements with partial text
        //browser.element("a*=Reg")
        //Link with certain text
        //browser.element("=Registration").click()

        //Link with partial text
        //browser.element("*=Reg").click()

        // id
        // $$("#name_3_firstname")

        //Combining css with element text
        //$("#piereg_passwordStrength*=Strengt")

        //Tag Name
        //$(<header>)

        //Name attribute
        //browser.element("[name="header1']")


        return browser.element("//a[text()='Registration']")
    }

    get draggable(){
        browser.element("=Registration");
        return browser.element("//a[text()='Draggable']")
    }

    get frameswindows(){
        return browser.element("//a[text()='Frames and windows']")
    }

    go_to_registration(){
        return this.registration.click()
    }
}