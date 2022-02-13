import { useState } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import { parseReturnData } from '../../Utility';
import { ResultsTable } from '../ResultsTable/ResultsTable';
import './ResultsList.css';

export function ResultsList(props) {
    
    const [dataStatuses, setDataStatuses] = useState([
        {
            key: 1,
            id: 1,
            hasData: false
        },
        {
            key: 2,
            id: 2,
            hasData: false
        },
        {
            key: 3,
            id: 3,
            hasData: false
        },
        {
            key: 4,
            id: 4,
            hasData: false
        },
        {
            key: 5,
            id: 5,
            hasData: false
        },
        {
            key: 6,
            id: 6,
            hasData: false
        },
        {
            key: 7,
            id: 7,
            hasData: false
        },
        {
            key: 8,
            id: 8,
            hasData: false
        },
        {
            key: 9,
            id: 9,
            hasData: false
        },
        {
            key: 10,
            id: 10,
            hasData: false
        },
    ])

    function checkDataStatuses(id, hasData) {
        const newDataStatuses = [];
        for (var i = 0; i < dataStatuses.length; ++i) {
            newDataStatuses.push(dataStatuses[i]);
        }
        
        props.returnedData.map(data => {
            if (data.restaurantId === id) {
                newDataStatuses[id - 1][hasData] = true;
            }
        })
    }
    
    function calcAverage(id, property, restaurantId) {
        var total = 0;
        var size = 0;
        for (var i = 0; i < props.returnedData.length; ++i) {
            if (props.returnedData[i][restaurantId] === id) {
                total += props.returnedData[i][property];
                size += 1;
            }
        }
        const avg = Math.round(total / size);

        return (
            <p>{parseReturnData(avg, property)}</p>
        )
    }

    for (var i = 0; i < 11; ++i) {
        checkDataStatuses(i, "hasData");
    }

    if (props.returnedData.length !== 0) {
    return (
        <Container fluid>
            {dataStatuses.map(dataMember => {
                if (dataMember.hasData) {
                    return (
                        <div>
                            <Segment style={{marginBottom: 24}}>
                                <div className="avgRestaurantContainer">
                                    <h1 className='avgRestaurantTitle'>Restaurant {dataMember.id}</h1>
                                    <Grid centered columns={12} divided stretched verticalAlign="middle" >
                                    <Grid.Row>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Total Amount</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Net Amount</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Item Sold Qty</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Beverage Qty</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Discount Amount</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Item Deleted Amount</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Discount Ratio</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p className='resultsTableP'>Avg Refund Amount</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row color='black'>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "totalAmount", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "netAmount", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "itemSoldQty", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "beverageQty", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "discountAmount", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "itemDeletedAmount", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "discountRatio", "restaurantId")}
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            {calcAverage(dataMember.id, "refundAmount", "restaurantId")}
                                        </Grid.Column>
                                    </Grid.Row>
                                    </Grid>
                                </div>
                                <ResultsTable
                                returnedData={props.returnedData}
                                id={dataMember.id}
                                />
                            </Segment>
                        </div>
                    )
                }
            })}
        </Container>
    )
    } else {
        return (
            <h1 style={{color: "white", marginTop: 124}}>No results</h1>
        )
    }
}