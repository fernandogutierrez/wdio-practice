class ContactPage {

    get name(){
        return $$("input[name='your-name']")[0];
    }

    get email(){
        return $$("input[name='your-email']")[0];
    }

    get submit(){
        return $("[type=submit]");
    }

    setName(nName){
        this.name.setValue(nName);
    }

    setEmail(nEmail){
        this.email.setValue(nEmail);
    }

    submitForm(){
        this.submit.click();
    }

    isTextVisible(text_alert, input_title){
        return $(`p*=${input_title}`).element(`span=${text_alert}`).waitForVisible(10000)
    }
}

export default new ContactPage();
