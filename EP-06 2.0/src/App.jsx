import List from './List.jsx'

function App () {
  const fruits = [{id: "F001", name: "watermelon", calories: 95}, 
                    {id: "F002", name: "apple", calories: 45}, 
                    {id: "F003", name: "grape", calories: 105}, 
                    {id: "F004", name: "cherry", calories: 37},
                    {id: "F005", name: "banana", calories: 67}];
 
  const vegetables = [{id: "V001", name: "potatoes", calories: 110}, 
                    {id: "V002", name: "celery", calories: 15}, 
                    {id: "V003", name: "carrots", calories: 25}, 
                    {id: "V004", name: "corn", calories: 63},
                    {id: "V005", name: "broccoli", calories: 50}];

  return (
    <>
      {fruits.length > 0 ? <List items = {fruits} category = "Fruits"></List> : null}
      {fruits.length > 0 ? <List items = {vegetables} category = "Vegetables"></List> : null}
    </>
  );
}

export default App