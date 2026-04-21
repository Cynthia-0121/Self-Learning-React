import Student from './Student.jsx'

function App () {
  return (
      <>
        <Student name = "cynth1a." age = {20} isStudent = {true}></Student>
        <Student name = "m1ngyu." age = {25} isStudent = {false}></Student>
        <Student name = "meow." age = {5} isStudent = {true}></Student>
        <Student></Student>
      </>
  );
}

export default App