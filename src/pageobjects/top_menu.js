class TopMenu {

    get contact(){
        return browser.element('=Contact');
    }

    get blog(){
        return browser.element('=Blog');
    }

    go_to_contact(){
        this.contact.click();
    }

    go_to_blog(){
        this.blog.click();
    }
}

export default new TopMenu();