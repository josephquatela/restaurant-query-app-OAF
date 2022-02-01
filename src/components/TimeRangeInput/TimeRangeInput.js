import { Dropdown, Input, Label } from 'semantic-ui-react';
import { amPmOptions } from '../../Utility';
import './TimeRangeInput.css';

export function TimeRangePicker(props) {

    return(
        <div className="hoursContainer">
            <Label ribbon>Times</Label>
            <Input placeholder='6'
            value={props.fromHour}
            style={{width: 50}}
            onChange={props.setFromHour}
            />
            <Dropdown
            options={amPmOptions}
            selection
            fluid
            value={props.fromHourAmPm}
            onChange={props.setFromHourAmPm}
            />
            <p>to</p>
            <Input placeholder='5'
            value={props.toHour}
            style={{width: 50}}
            onChange={props.setToHour} />
            <Dropdown
            options={amPmOptions}
            selection
            fluid
            value={props.toHourAmPm}
            onChange={props.setToHourAmPm}
            />
        </div>
    )
}