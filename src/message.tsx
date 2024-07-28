// PascalCasing. Capitalize first letter of every word
function Message(){
    // This is JSX: short for java script XML
    const name = 'Adi is kewl';
    if (name)
        return <h1> Hello {name} </h1>;
    else
        return <h1> Hello world </h1>;
}           

export default Message;