import { useState } from 'react';
import './DropdownButton.css';

export function DropdownButton(props) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return(
        <div className='dropdownButton'>
            <button onClick={() => setIsOpen(!isOpen)}>v</button>
            { isOpen && props.children }
        </div>
    );
}