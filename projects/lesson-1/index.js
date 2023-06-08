const obj = {
    age: 17,
    name: "Elisa",
    salary: 27.5,
    city: "Enugu, Ng",
    days: ["Mon", "Tue", "Fri"],
    intro: function () {console.log("Js Dev")},
    child: {
        parent: "obj",
        nested: true,
        grandChild: {
            deeplyNested: true,
            depth: 3
        }
    }
}


function myIntro(data) {
    const dob = 2023 - data.age;
    console.log(`I am ${dob}`)
    return dob;
}

























// console.log(obj);
// console.dir(obj);
// console.info(obj);
// console.debug(obj);
// console.error(obj);



// console.log(obj.age);
// console.log(obj.name);
// console.log(obj.salary);
// console.log(obj.city);
// console.log(obj.days);
// console.log(obj["age"]);
// obj.intro();