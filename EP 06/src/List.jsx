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

    const listItems = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}</li>);
    return(<ol>{listItems}</ol>);
}

export default List