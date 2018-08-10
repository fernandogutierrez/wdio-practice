class BlogPage {

    goToPost(post_title){
        return browser.element("//article[contains(@id,'post')]/" +
            "descendant::a[@href and text()='" + post_title + "']").click()
    }

    readPost(post_title){
        return browser.element("//a[text()='"+ post_title + "']/ancestor::header/" +
            "following-sibling::footer/descendant::a[contains(text(),'Read more') " +
            "and not(contains(@class,'btn-block'))]").click()
    }
}