import Button from './component/Button';
import FunctionalComponent  from './component/FunctionalComponent';
import ClassComponent  from './component/ClassComponent';



function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("Button clicked!")} text="Button 1" />
      <Button onClick={() => alert("Button clicked!")} text="Button 2" />
      <FunctionalComponent name={"Jaycee"} />
      <ClassComponent onClick={() => alert("Class component clicked!")} />
        
    </div>
  );
}

export default App;
