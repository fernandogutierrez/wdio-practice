class ContactPage {

    get name_input(){
        return $$("input[name='your-name']")[0];
    }

    get email_input(){
        return $$("input[name='your-email']")[0];
    }

    get submit_btn(){
        return $("[type=submit]");
    }

    set_name(n_name){
        this.name_input.setValue(n_name);
    }

    set_email(n_email){
        this.email_input.setValue(n_email);
    }

    submit_form(){
        this.submit_btn.click();
    }

    is_text_visible(text_alert, input_title){
        return $(`p*=${input_title}`).element(`span=${text_alert}`).waitForVisible(10000)
    }
}

export default new ContactPage();
