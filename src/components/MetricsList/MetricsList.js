import { Button, Icon, Input, } from 'semantic-ui-react';
import './MetricsList.css';

export function MetricsList(props) {

    return (
        <div className='metricsListContainer'>
            {props.metricsList.map(metric => {

                return (
                    <div className="metricsContainer">
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
                        }}
                        >
                            <Button.Content visible>
                                <Icon color='red' name='delete'/>
                            </Button.Content>
                            <Button.Content hidden>
                                Delete
                            </Button.Content>
                        </Button>
                        <Input
                        type='text'
                        value={metric.metricCode}
                        style={{width: 136}}
                        />
                        <Input
                        type='text'
                        value={metric.compareType}
                        style={{width: 160}}
                        />
                        <Input
                        type='text'
                        value={metric.value}
                        style={{width: 80}}
                        />
                    </div>
                )
            })} 
        </div>
    )
}