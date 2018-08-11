class RegistrationPage{

    get firstName(){
        return $$('#name_3_firstname')[0];
    }

    get lastName(){
       return $$('#name_3_lastname')[0];
    }

    get country(){
        return $$('#dropdown_7')[0];
    }

    get month(){
        return $$('#mm_date_8')[0];
    }

    get day(){
        return $$('#dd_date_8')[0];
    }

    get year(){
        return $$('#yy_date_8')[0];
    }

    get phoneNumber(){
        return $$("#phone_9")[0];
    }

    get userName(){
        return $$("#username")[0];
    }

    get email(){
        return $$("#email_1")[0];
    }

    get password(){
        return $$("#password_2")[0];
    }

    get confirmPassword(){
        return $$("#confirm_password_password_2")[0];
    }

    get submit(){
        return $("[name=pie_submit]");
    }

    get maritalStatus(){
        return browser.element("//label[text()='Marital Status']/following-sibling::*");
    }

    get hobby(){
        return $$("//label[text()='Hobby']/following-sibling::div[@class='radio_wrap']/descendant::input")
    }

    setFirstName(fName) {
        this.firstName.setValue(fName);
    }

    setLastName(lName){
        this.lastName.setValue(lName);
    }

    setMaritalStatus(status) {
        this.maritalStatus.element(`[value=${status}]`).click();
    }

    setHobby(nHobby){
        this.hobby.forEach((chkHobby) => { if (chkHobby.getValue().trim() === nHobby){ chkHobby.click()} } )
    }

    selectCountry(country){
        this.country.selectByValue(country);
    }

    setDateOfBirth(month, day, year){
        this.month.selectByValue(month);
        this.day.selectByValue(day);
        this.year.selectByValue(year);
    }

    setPhoneNumber(pNumber){
        this.phoneNumber.setValue("591" + pNumber);
    }

    setUsername(username){
        this.userName.setValue(username);
    }

    setEmail(email){
        this.email.setValue(email);
    }

    setPassword(password){
        this.password.setValue(password);
    }

    setConfirmPassword(password){
        this.confirmPassword.setValue(password);
    }

    submitForm(){
        this.submit.click();
    }
}

export default new RegistrationPage();
