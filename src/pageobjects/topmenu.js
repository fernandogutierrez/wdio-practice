class TopMenu {

    get contact(){
        browser.element('=Contact');
    }

    get blog(){
        browser.element('=Blog');
    }

    go_to_contact(){
        this.contact.click();
    }

    go_to_blog(){
        this.blog.click();
    }
}

module.exports  = new TopMenu();

