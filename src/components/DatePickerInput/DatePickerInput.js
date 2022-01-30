import './DatePickerInput.css';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'
import { Label } from 'semantic-ui-react';
import { useState } from 'react';

export function DatePickerInput(props) {
    const [focusedInput, setFocusedInput] = useState(null);
    
    function onFocusChange(focusedInput) {
        setFocusedInput(focusedInput);
    }

    const { startDate, endDate } = props.dateRange;
    const onDateChange = (startDate, endDate) =>
    props.onChange(startDate, endDate);

    return(
        <div class="dateContainer">
            <Label ribbon>Dates</Label>
            <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={onDateChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            />
        </div>
    )
}