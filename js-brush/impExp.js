export const bio = (age) => {
    if (age > 18) {
        console.log('Can vote');
    }else {
        console.log('Can not vote');
    }
    return {
        name: "George",
        isTall: false,
        height: 120
    }
}

export const department = () => {
    console.log('IT');
}

const interns = () => {
    console.log('All interns');
}
export default interns;