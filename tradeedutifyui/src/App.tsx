import React, {useState} from 'react';
import TextBox from './component/TextInput';


const App: React.FC = () => {
    const [textValue,setTextValue] = useState('');
    const handleTextChange = (newValue : string) => {
      setTextValue(newValue);
    };

    return ( <div>
      <h1>React Typescript</h1>
      <TextBox label='Enter Text' value='{textValue}' onChange={handleTextChange} />
      <p>Entered Text: {textValue} </p>
    </div>);
};

export default App;
