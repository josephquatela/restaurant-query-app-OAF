import { useEffect } from 'react';
import { Button, Dropdown, Input, Label } from 'semantic-ui-react';
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

    const mappedDefinitions = (props.metricDefinitions.map((m, index) => {
        return {
            key: index,
            text: m.alias,
            value: m.metricCode
        }
    }))

    return (
        <div>
            <div className="metricsStyleContainer">
                <Label ribbon>Metrics</Label>
                <div className="metricsContainer">
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
            <div className="addMetricButtonContainer">
                <Button type='button' onClick={(event, data) => {
                    const newMetricsList = [];
                    for (var i = 0; i < props.metricsList.length; i++) {
                        newMetricsList.push(props.metricsList[i]);
                    }
                    newMetricsList.push(
                        {
                            metricCode: props.metricCode,
                            compareType: props.compareType,
                            value: props.metricValue,
                        },
                    );
                    props.setMetricsList(newMetricsList);
                    }}
                    style={{width: 200}}
                >
                    Add metric
                </Button>
            </div>
        </div>

    )
}