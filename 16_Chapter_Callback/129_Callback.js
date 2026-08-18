function test(test, callMeWhenDone)
{
    console.log("Hi start the TestCase");
    callMeWhenDone();
}

// OR

test("Verify Login page is working", async(page) => {

});



////////

function garimaStory(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy");
    //......
    console.log("strore is empty");
    callMeWhenStoreIsEmpty();
}

// function garimaBuy(){
//     console.log("lets start shopping.....");
// }

garimaStory("Start shopping", () => {
    console.log("Lets start shopping.....")
});