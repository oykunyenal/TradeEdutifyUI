import React, {ChangeEvent} from "react";

interface TextBoxProps{
    label: string;
    value: string;
    onChange: (newValue : string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({label,value,onChange}) => {
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (<div>
            <label>{label}</label>
            <input type="text" value={''} onChange={handleChange}></input>
    </div>);
};

export default TextBox;
