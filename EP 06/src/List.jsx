function List () {
    // EXAMPLE 1
    // const fruits = ["watermelon", "apple", "grape", "cherry"];
    // fruits.sort();
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(<ul>{listItems}</ul>)

    // EXAMPLE 2
    const fruits = [{id: "F001", name: "watermelon", calories: 95}, 
                    {id: "F002", name: "apple", calories: 45}, 
                    {id: "F003", name: "grape", calories: 105}, 
                    {id: "F004", name: "cherry", calories: 37},
                    {id: "F005", name: "banana", calories: 67}];

    // sort ()
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC

    // filter
    // const lowCalFruits = fruits.filter (fruit => fruit.calories < 100);

    const listItems = fruits.map(fruit => (
                      <li key={fruit.id}>
                      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
                      </li>
    ));
    return(<ol>{listItems}</ol>);
}

export default List