import './DropdownMenu.css';

export function DropdownMenu(props) {
    

    return(
        <div className='dropdownMenu'>{props.children}</div>
    );
}