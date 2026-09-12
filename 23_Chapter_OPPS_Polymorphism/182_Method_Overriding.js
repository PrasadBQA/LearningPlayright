class BaseTest{
    setup(){
        console.log("Base: Open Browser");
    }
}

class APIPage extends BaseTest{
    setup(){
        console.log("APITest: Open Browser");
    }
}

let btest = new BaseTest();
let test = new APIPage();

btest.setup();
test.setup();