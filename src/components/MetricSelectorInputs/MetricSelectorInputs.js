import { useEffect } from 'react';
import { Dropdown, Input, Label } from 'semantic-ui-react';
import { compareTypeOptions } from '../../Utility';
import './MetricSelectorInputs.css';

export function MetricSelectorInputs(props) {

    async function getData(url = "") {
        const response = await fetch(url, {
            method: "GET",
            cache: "no-cache"
        });
        return response.json();
    }

    useEffect(() => {
        getData("https://customsearchquerytoolapi.azurewebsites.net/Search/MetricDefinitions")
        .then(data => {
            props.setMetricDefinitions(data);
        })
        .catch(err => {
            console.log("Error!")
        });
    }, []);

    console.log(props.metricDefinitions)

    const mappedDefinitions = (props.metricDefinitions.map((m, index) => {
        return {
            key: index,
            text: m.alias,
            value: m.metricCode
        }
    }))

    return (
        <div class="metricsStyleContainer">
            <Label ribbon>Metrics</Label>
            <div class="metricsContainer">
                <Dropdown options={ mappedDefinitions }
                placeholder='Items Sold #'
                selection
                value={ props.metricCode }
                onChange={ props.onCodeChange } />
                <Dropdown options={ compareTypeOptions }
                placeholder='<'
                selection
                fluid
                style={{width: 50}}
                value={ props.compareType }
                onChange={ props.onCompareChange } />
                <Input placeholder='Value'
                value={ props.metricValue }
                style={{width: 100}}
                onChange={ props.onValueChange } />
            </div>
        </div>
    )
}