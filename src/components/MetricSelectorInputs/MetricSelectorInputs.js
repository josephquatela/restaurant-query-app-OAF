import { useEffect, useState } from 'react';
import { Button, Dropdown, Icon, Input, Label } from 'semantic-ui-react';
import { compareTypeOptions } from '../../Utility';
import './MetricSelectorInputs.css';

export function MetricSelectorInputs(props) {
    const [metricCount, setMetricCount] = useState(1);

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

    function handleMetricsListChange(newValue, index, property) {
        const newMetricsList = [];
        for (var i = 0; i < props.metricsList.length; ++i) {
            newMetricsList.push(props.metricsList[i]);
        }

        newMetricsList[index][property] = newValue;
        props.setMetricsList(newMetricsList);
    }

    return (
        <div>
            {props.metricsList.map((metric, index) => {
                return (
                    <div className="metricsStyleContainer">
                        <Label ribbon>Metric {index + 1}</Label>
                        {metricCount > 1 ? 
                        <Button
                            type='button'
                            animated
                            onClick={(event, data) => {
                                const newMetricsList = [];
                                for (var i = 0; i < props.metricsList.length; i++) {
                                    newMetricsList.push(props.metricsList[i]);
                                }
                                const index = props.metricsList.indexOf(metric);
                                newMetricsList.splice(index, 1);
                                props.setMetricsList(newMetricsList);
                                const newMetricCount = metricCount - 1;
                                setMetricCount(newMetricCount);
                            }}
                        >
                            <Button.Content visible>
                                <Icon color='red' name='delete'/>
                            </Button.Content>
                            <Button.Content hidden>
                                Delete
                            </Button.Content>
                        </Button> : null
                        }
                        
                        <div className="metricsContainer">
                            <Dropdown options={ mappedDefinitions }
                            placeholder='Items Sold #'
                            selection
                            value={ metric.metricCode }
                            onChange={ (event, data) => handleMetricsListChange(data.value, index, "metricCode") } />
                            <Dropdown options={ compareTypeOptions }
                            placeholder='<'
                            selection
                            fluid
                            style={{width: 64}}
                            value={ metric.compareType }
                            onChange={ (event, data) => handleMetricsListChange(data.value, index, "compareType") } />
                            <Input placeholder='Value'
                            value={ metric.metricValue }
                            style={{width: 80}}
                            onChange={ (event, data) => handleMetricsListChange(data.value, index, "metricValue") } />
                        </div>
                    </div>
                )
            })}
            
            <div className="addMetricButtonContainer">
                { metricCount < 5 ?
                    <Button type='button' onClick={(event, data) => {
                        const newMetricsList = [];
                        for (var i = 0; i < props.metricsList.length; i++) {
                            newMetricsList.push(props.metricsList[i]);
                        }
                        newMetricsList.push(
                            {
                                metricCode: "",
                                compareType: "",
                                value: "",
                            },
                        );
                        props.setMetricsList(newMetricsList);
                        const newMetricCount = metricCount + 1;
                        setMetricCount(newMetricCount);
                        console.log(metricCount);
                        }}
                        style={{width: 200}}
                    >
                        Add metric
                    </Button> : null
                }
            </div>
        </div>

    )
}