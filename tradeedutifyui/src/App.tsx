import React, {useState} from 'react';
import TextBox from './component/TextInput';


const App: React.FC = () => {
    const [textValue,setTextValue] = useState('');
    const handleTextChange = (newValue : string) => {
      setTextValue(newValue);
    };

    return ( <div>
      <h1>Hello</h1>
    </div>);
};

export default App;
