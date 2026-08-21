// React hook = Specific function that allows functional components 
//              to use React features without writing class components
//              [useState, useEffect, useContext, useReducer, useCallback, and more]

// useState = when data changes, the component will change also (render)
//            cuz actually, the thing change le but no render, the browser wont show also eh 
//            so useState 

import MyComponent from './MyComponent';
import Counter from './Counter';

function App() {
    return (
        <Counter />
        // <MyComponent />
    )
}

export default App
