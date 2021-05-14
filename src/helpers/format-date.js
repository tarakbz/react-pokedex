
const formatDate = (date) => {
    return new Intl.DateTimeFormat().format(new Date(date));
    // on peut aussi faire
    // const dateObject = new Date(date);
    // return `${dateObject.getDate()}-${dateObject.getMonth() + 1 }-${dateObject.getFullYear()}`
}

export default formatDate;
