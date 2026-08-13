function startBrowser(){
    let name = "Chrome";

    function installBrowser(){
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();
//console.log(runTc());  // undefined startBrowser() not returning anything -> Undefined final return
// console.log(runTc()); gives 2 o/ps: chrome, undefined
// chrome -> from inner from the inner  console.log(name)
// undefined ->  from the outer console.log(runTc())

installBrowser();// ReferenceError: installBrowser() not defined