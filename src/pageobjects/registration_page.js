class RegistationPage{
    get first_name_txt(){
        return $$('#name_3_firstname')[0];
    }

    get last_name_txt(){
       return $$('#name_3_lastname')[0];
    }

    get country_ddl(){
        return $$('#dropdown_7')[0];
    }

    get month_ddl(){
        return $$('#mm_date_8')[0];
    }

    get day_ddl(){
        return $$('#dd_date_8')[0];
    }

    get year_ddl(){
        return $$('#yy_date_8')[0];
    }

    get phonenumber_txt(){
        return $$("#phone_9")[0];
    }

    get username_txt(){
        return $$("#username")[0];
    }

    get email_txt(){
        return $$("#email_1")[0];
    }

    get password_txt(){
        return $$("#password_2")[0];
    }

    get passwordconfirm_txt(){
        return $$("#confirm_password_password_2")[0];
    }

    get submit_btn(){
        return $("[name=pie_submit]");
    }

    get marital_status_rdo(){
        return browser.element("//label[text()='Marital Status']/following-sibling::*");
    }

    set marital_status(value){
        this.marital_status_rdo.element(`[value=${single}]`)
    }


}
// var SIZE = {
//     SMALL : {value: 0, name: "Small", code: "S"},
//     MEDIUM: {value: 1, name: "Medium", code: "M"},
//     LARGE : {value: 2, name: "Large", code: "L"}
// };
//
// var currentSize = SIZE.MEDIUM;
// if (currentSize == SIZE.MEDIUM) {
//     // this alerts: "1: Medium"
//     alert(currentSize.value + ": " + currentSize.name);
// }

export default new RegistationPage();
// $$('#name_3_firstname')[0].setValue('heeleleo')

// $$('#name_3_lastname')[0].setValue('heeleleo')




// $("//label[text()='Hobby']/following::input[@value='dance']").isSelected()
// $("//label[text()='Hobby']/following::input[@value='dance']").click()

// $("//label[text()='Hobby']/following::input[@value='dance']").click()
