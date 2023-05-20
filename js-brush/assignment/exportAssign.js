const defMod = () => {
    console.log('testing...');
}

export const pi = 3.14159;

export const capitalizeString = (str) => {
        // return str.toUpperCase(); 
        return str.charAt(0).toUpperCase() + str.slice(1);

}

  
export function sum (a, b) {
    return a + b;
}

export function multiply (a, b) {
    return a * b;
}

export function subtract (a, b) {
    return a - b;
}


export const car =  {
        make: "Honda",
        model: "3KGH",
        year: 2014
};


export const countryList = [ "Nigeria" , "Canada", "Switzerland", "Korea"];


export default defMod;