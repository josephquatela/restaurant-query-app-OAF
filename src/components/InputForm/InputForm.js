import './InputForm.css';
import { Button, Form, Segment, } from 'semantic-ui-react';
import { useState } from 'react';
import { RestaurantIdsInput } from '../RestaurantIdsInput/RestaurantIdsInput';
import { DatePickerInput } from '../DatePickerInput/DatePickerInput';
import { TimeRangePicker } from '../TimeRangeInput/TimeRangeInput';
import { MetricsList } from '../MetricsList/MetricsList';
import { MetricSelectorInputs } from '../MetricSelectorInputs/MetricSelectorInputs';
import { postData } from '../../Utility';

export function InputForm() {

    //Restaurant ID state var
    const [restaurantIds, setRestaurantIds] = useState([]);

    //Metric state vars
    const [metricDefinitions, setMetricDefinitions] = useState([]);
    const [metricCode, setMetricCode] = useState('');
    const [compareType, setCompareType] = useState('');
    const [metricValue, setMetricValue] = useState('');
    const [metricsList, setMetricsList] = useState([
        /* {
            metricCode: metricCode,
            compareType: compareType,
            metricValue: metricValue,
        }, */
    ]);
    console.log(metricsList);
    console.log(metricCode);
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
            fromDate: dateRange.startDate.format('YYYY-MM-DDThh:mm:ss.msZ'), 
            toDate: dateRange.endDate.format('YYYY-MM-DDThh:mm:ss.SSSZ'),
            fromHour: parseHours(fromHour, fromHourAmPm),
            toHour: parseHours(toHour, toHourAmPm),
            metricCritera: metricsList
        }
        console.log(requestData);
        postData('https://customsearchquerytoolapi.azurewebsites.net/Search/Query', requestData);
    }

    return(
        <div>
            <h2>Advanced Search</h2>
            <Form onSubmit={(event, data) => onSubmit()}>
                <div className="inputFields">
                    <div className='inputLeft'>
                        <Segment className='fieldSegment'>
                            <Form.Field> {/* Restaurant ID Field */}
                                <RestaurantIdsInput IDs={restaurantIds} 
                                onChange={(event, data) => setRestaurantIds(data.value)} />
                            </Form.Field>
                        </Segment>
                        <Segment className='fieldSegment'> {/* Metric Selector Fields*/}
                            <Form.Field>
                                <MetricsList />

                                <MetricSelectorInputs
                                metricCode={metricCode}
                                onCodeChange={(event, data) => setMetricCode(data.value)}
                                compareType={compareType}
                                onCompareChange={(event, data) => setCompareType(data.value)}
                                metricValue={metricValue}
                                onValueChange={(event, data) => setMetricValue(data.value)}
                                metricDefinitions={metricDefinitions}
                                setMetricDefinitions={setMetricDefinitions}
                                metricsList={metricsList}
                                setMetricsList={setMetricsList}
                                />
                            </Form.Field>
                        </Segment>
                    </div>
                    <div className="inputRight">
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

                <div className="submitContainer">
                    <Form.Field> {/* Submit Field */}
                        <Button type='submit'>Search</Button>
                    </Form.Field>
                </div>
            </Form>
        </div>
    );
}