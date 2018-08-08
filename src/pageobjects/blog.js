class Post{

    go_to_post(post_title){
        return browser.element("//article[contains(@id,'post')]/" +
            "descendant::a[@href and text()='" + post_title + "']").click()
    }

    read_post(post_title){
        return browser.element("//a[text()='"+ post_title + "']/ancestor::header/" +
            "following-sibling::footer/descendant::a[contains(text(),'Read more') " +
            "and not(contains(@class,'btn-block'))]").click()
    }
}