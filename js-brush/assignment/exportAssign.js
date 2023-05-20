const defMod = () => {
    console.log('testing...');
}

export const pi = () => {
    return 3.14159;
}

export const capitalizeString = (msg) => {
    return msg.toUpperCase();   
}


export const utilityFn = () => {
    const sum = (a, b) => {
        return a + b;
    }
}


export const car = () => {
    return {
        name: "Honda",
        model: "3KGH",
        year: 2014
    };
}


export const countryList = () => {
    console.log("Countries for selection: ");
    return ["Nigeria" , "Canada", "Switzerland", "Korea"];
}



export default defMod;