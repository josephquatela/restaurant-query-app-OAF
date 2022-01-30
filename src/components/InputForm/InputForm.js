import './InputForm.css';
import { Button, Form, Segment, } from 'semantic-ui-react';
import { useState } from 'react';
import { RestaurantIdsInput } from '../RestaurantIdsInput/RestaurantIdsInput';
import { MetricSelectorInputs } from '../MetricSelectorInputs/MetricSelectorInputs';
import { DatePickerInput } from '../DatePickerInput/DatePickerInput';
import { TimeRangePicker } from '../TimeRangeInput/TimeRangeInput';

export function InputForm() {

    //Restaurant ID state var
    const [restaurantIds, setRestaurantIds] = useState([]);

    //Metric state vars
    const [metricDefinitions, setMetricDefinitions] = useState([]);
    const [metricsList, setMetricsList] = useState([])
    const [metricCode, setMetricCode] = useState('');
    const [compareType, setCompareType] = useState('');
    const [metricValue, setMetricValue] = useState('');

    //Date state vars
    const [dateRange, setdateRange] = useState({
        startDate: null,
        endDate: null
      });

    //Hour state vars
    const [fromHour, setFromHour] = useState('');
    const [fromHourAmPm, setFromHourAmPm] = useState('');
    const [toHour, setToHour] = useState('');
    const [toHourAmPm, setToHourAmPm] = useState('');

    
    /************** App Functions **************/

    function parseHours(hour, hourAmPm) {
        var intHour = parseInt(hour)
        var adjustedHour;
        var stringHour;
        if (6 <= intHour && intHour < 12 && hourAmPm === 'am') {
            return hour;
        }
        else if (intHour === 12 && hourAmPm === 'pm') {
            return hour;
        }
        else if (1 <= intHour && intHour < 12 && hourAmPm === 'pm') {
            adjustedHour = intHour + 12;
            stringHour = adjustedHour.toString();
            return stringHour
        }
        else if (intHour === 12 && hourAmPm === 'am'){
            adjustedHour = intHour + 12;
            stringHour = adjustedHour.toString();
            return stringHour
        }
        else if (1 <= intHour && intHour < 6 && hourAmPm === 'am'){
            adjustedHour = intHour + 24;
            stringHour = adjustedHour.toString();
            return stringHour
        }
    }



    function onSubmit() {
        const requestData = {
            restaurantIds: restaurantIds,
            fromDate: dateRange.startDate.format('YYYY-MM-DD:hh:mm'), /* figure out format */
            toDate: dateRange.endDate.format('YYYY-MM-DD:hh:mm'),
            fromHour: parseHours(fromHour, fromHourAmPm),
            toHour: parseHours(toHour, toHourAmPm),
            metricCritera: [
                {
                    metricCode: metricCode,
                    compareType: compareType,
                    value: parseInt(metricValue)
                },
            ],
        }
        console.log(requestData);
    }


    return(
        <div>
            <h2>Advanced Search</h2>
            <Form onSubmit={(event, data) => onSubmit()}>
                <div class="inputFields">
                    <div className='inputLeft'>
                        <Segment className='fieldSegment'>
                            <Form.Field> {/* Restaurant ID Field */}
                                <RestaurantIdsInput IDs={restaurantIds} 
                                onChange={(event, data) => setRestaurantIds(data.value)} />
                            </Form.Field>
                        </Segment>
                        <Segment className='fieldSegment'> {/* Metric Selector Fields*/}
                            <Form.Field>
                                <MetricSelectorInputs
                                metricDefinitions={ metricDefinitions }
                                setMetricDefinitions={ setMetricDefinitions }
                                metricCode={ metricCode }
                                onCodeChange={ (event, data) => setMetricCode(data.value) }
                                compareType={ compareType }
                                onCompareChange={ (event, data) => setCompareType(data.value) }
                                metricValue={ metricValue }
                                onValueChange={ (event, data) => setMetricValue(data.value) }
                                />
                            </Form.Field>
                        </Segment>
                    </div>
                    <div class="inputRight">
                        <Segment className='fieldSegment'> {/* Date Selections Field */}
                            <DatePickerInput
                            dateRange={ dateRange } 
                            startDate={ dateRange.startDate }
                            endDate={ dateRange.endDate }
                            onChange={ setdateRange }
                            />
                        </Segment>
                        <Segment className='fieldSegment'> {/* Time Selections Field */}
                            <Form.Field>
                                <TimeRangePicker
                                fromHour={fromHour}
                                setFromHour={(event, data) => setFromHour(data.value)}
                                fromHourAmPm={fromHourAmPm}
                                setFromHourAmPm={(event, data) => setFromHourAmPm(data.value)}
                                toHour={toHour}
                                setToHour={(event, data) => setToHour(data.value)}
                                toHourAmPm={toHourAmPm}
                                setToHourAmPm={(event, data) => setToHourAmPm(data.value)}
                                />
                            </Form.Field>
                        </Segment>
                    </div>
                </div>

                <div class="submitContainer">
                    <Form.Field> {/* Submit Field */}
                        <Button type='submit'>Search</Button>
                    </Form.Field>
                </div>
            </Form>
        </div>
    );
}