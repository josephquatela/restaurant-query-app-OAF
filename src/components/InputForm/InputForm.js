import './InputForm.css';
import { restaurantIdOptions, compareTypeOptions } from '../../Utility';
import { Button, Dropdown, Form, Segment, Input } from 'semantic-ui-react';
import { useState } from 'react';
import { DatePicker } from './../DatePicker/DatePicker';

export function InputForm() {
    const [restaurantIds, setRestaurantIds] = useState([]);
    const [metricCode, setMetricCode] = useState('');
    const [compareType, setCompareType] = useState('');
    const [metricValue, setMetricValue] = useState('');

    function onSubmit() {
        const requestData = {
            restaurantIds: restaurantIds,
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
        <Form onSubmit={(event, data) => onSubmit()}>
            <Form.Field> {/* Restaurant ID Field */}
                <Dropdown options={ restaurantIdOptions } 
                placeholder='Select Restaurant ID' 
                selection multiple 
                value={restaurantIds} onChange={(event, data) => setRestaurantIds(data.value)}>
                </Dropdown>
            </Form.Field>
            
            <Segment> {/* Metric Selector Fields*/}
                <Form.Field> 
                    <Input placeholder='Metric' 
                    value={metricCode} 
                    onChange={(event, data) => setMetricCode(data.value)} />

                    <Dropdown options={ compareTypeOptions } 
                    placeholder='<, <=, =, >=, >'
                    selection
                    value={compareType} onChange={(event, data) => setCompareType(data.value)} />

                    <Input placeholder='Value'
                    value={metricValue}
                    onChange={(event, data) => setMetricValue(data.value)} />
                </Form.Field>
            </Segment>

            <Segment> {/* Date Selections Field */}
                <DatePicker GetStartDate/>
            </Segment>

            <Form.Field> {/* Submit Field */}
                <Button type='submit'>Search</Button>
            </Form.Field>
        </Form>
    );
}