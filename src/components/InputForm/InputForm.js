import './InputForm.css';
import { Button, Form, Icon, Segment, } from 'semantic-ui-react';
import { useState } from 'react';
import { RestaurantIdsInput } from '../RestaurantIdsInput/RestaurantIdsInput';
import { DatePickerInput } from '../DatePickerInput/DatePickerInput';
import { TimeRangePicker } from '../TimeRangeInput/TimeRangeInput';
import { MetricSelectorInputs } from '../MetricSelectorInputs/MetricSelectorInputs';
import { postData } from '../../Utility';

export function InputForm(props) {

    //Restaurant ID state var
    const [restaurantIds, setRestaurantIds] = useState([]);

    //Metric state vars
    const [metricDefinitions, setMetricDefinitions] = useState([]);
    const [metricsList, setMetricsList] = useState([{
        metricCode: "",
        compareType: "",
        metricValue: "",
    }]);

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
        if (6 <= intHour && intHour < 12 && hourAmPm === 'am') {
            return intHour;
        }
        else if (intHour === 12 && hourAmPm === 'pm') {
            return intHour;
        }
        else if (1 <= intHour && intHour < 12 && hourAmPm === 'pm') {
            adjustedHour = intHour + 12;
            return adjustedHour;
        }
        else if (intHour === 12 && hourAmPm === 'am'){
            adjustedHour = intHour + 12;
            return adjustedHour;
        }
        else if (1 <= intHour && intHour < 6 && hourAmPm === 'am'){
            adjustedHour = intHour + 24;
            return adjustedHour;
        }
    }

    function parseMetricValues() {
        const newMetricsList = [];
        for (var i = 0; i < metricsList.length; i++) {
            newMetricsList.push(metricsList[i]);
        }
        newMetricsList.forEach(metric => {
            metric.metricValue = parseFloat(metric.metricValue);
        });
        setMetricsList(newMetricsList);
    }

    function onSubmit() {
        parseMetricValues();

        const requestData = {
            restaurantIds: restaurantIds,
            fromDate: dateRange.startDate.format("YYYY-MM-DD"), 
            toDate: dateRange.endDate.format("YYYY-MM-DD"),
            fromHour: parseHours(fromHour, fromHourAmPm),
            toHour: parseHours(toHour, toHourAmPm),
            metricCriteria: metricsList
        }

        console.log(requestData);
        
        postData('https://customsearchquerytoolapi.azurewebsites.net/Search/Query', requestData)
        .then(resultsData => {
            const data1 = [];
            const data2 = [];
            const data3 = [];
            const data4 = [];
            const data5 = [];
            const data6 = [];
            const data7 = [];
            const data8 = [];
            const data9 = [];
            const data10 = [];
            // props.setReturnedData(resultsData);
            resultsData.forEach(data => {
                if (data.restaurantId == 1) {
                    data1.push(data);
                } else if (data.restaurantId == 2) {
                    data2.push(data)
                } else if (data.restaurantId == 3) {
                    data3.push(data)
                } else if (data.restaurantId == 4) {
                    data4.push(data)
                } else if (data.restaurantId == 5) {
                    data5.push(data)
                } else if (data.restaurantId == 6) {
                    data6.push(data)
                } else if (data.restaurantId == 7) {
                    data7.push(data)
                } else if (data.restaurantId == 8) {
                    data8.push(data)
                } else if (data.restaurantId == 9) {
                    data9.push(data)
                } else if (data.restaurantId == 10) {
                    data10.push(data)
                }
            })
            props.setData1(data1);
            props.setData1(data2);
            props.setData1(data3);
            props.setData1(data4);
            props.setData1(data5);
            props.setData1(data6);
            props.setData1(data7);
            props.setData1(data8);
            props.setData1(data9);
            props.setData1(data10);
            props.setReturnedData(resultsData);
        });
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
                                {/* <MetricsList 
                                metricsList={metricsList}
                                setMetricsList={setMetricsList}
                                />
                                <Divider></Divider> */}
                                <MetricSelectorInputs
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
                        <Button 
                        animated
                        type='submit'>
                            <Button.Content visible>Search</Button.Content>
                            <Button.Content hidden>
                                <Icon name='angle double right' />
                            </Button.Content>
                        </Button>
                    </Form.Field>
                </div>
            </Form>
        </div>
    );
}