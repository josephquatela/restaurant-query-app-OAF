import { Input, } from 'semantic-ui-react';
import './MetricsList.css';

export function MetricsList(props) {

    return (
        <div className='metricsListContainer'>
            {props.metricsList.map(metric => {
                return (
                    <div className="metricsContainer">
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