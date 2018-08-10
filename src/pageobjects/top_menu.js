class TopMenu {

    get contact(){
        return browser.element('=Contact');
    }

    get blog(){
        return browser.element('=Blog');
    }

    goToContact(){
        this.contact.click();
    }

    goToBlog(){
        this.blog.click();
    }
}

export default new TopMenu();