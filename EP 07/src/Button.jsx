function Button () {

    // EXAMPLE 1: normal click
    const handleClick = () => console.log("OCH");

    // EXAMPLE 2: click with paramter
    const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    // EXAMPLE 3: loop
    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} clicked me ${count} time/s`)
        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    }


    return (
        <button onClick = {() => handleClick3("You")}>Click Me</button>
    );
}

export default Button

// if less then 3 then you click me how many times
// else stop clicking me!