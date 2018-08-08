class Contact {

    get name_input(){
        return $$("input[name='your-name']")[0];
    }

    get email_input(){
        return $$("input[name='your-email']")[0];
    }

    set_name(n_name){
        this.name_input.setValue(n_name);
    }

    set_email(n_email){
        this.email_input.setValue(n_email);
    }

    submit_form(){
        browser.submitForm("[class*=wpcf7-form]")
    }

    is_text_visible(input_title, text_alert){
        return browser.element(`p*=${input_title}`).element(`span=${text_alert}`).waitForVisible(5000)
    }
}

module.exports = new Contact();
