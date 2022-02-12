import { } from "semantic-ui-react";

import { Grid, Segment } from 'semantic-ui-react';
import './ResultsTable.css';

export function ResultsTable(props) {

    function parseReturnData(data, dataType = undefined) {
        const type = typeof(data);
        if (dataType == "discountRatio") {
            const roundedPercent = (Math.round(data * 10000) / 10000) * 100
            return roundedPercent.toString() + "%";
        } else if (type === 'number') {
            return data.toString();
        } else if (type === 'string') {
            return data.slice(0, 10) + " " + data.slice(11);
        }
        console.log("data " + data);
    }

    return (
        <div className="resultsTableContainer">
            <Segment>
                <Grid centered columns={12} divided stretched verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Restaurant ID</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>BusDt</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Order Number</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Order Time</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Transaction Total Amount</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Transaction Net Amount</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Item Sold Qty</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Beverage Qty</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Discount Amount</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Item Deleted Amount</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Discount Ratio</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p className='resultsTableP'>Refund Amount</p>
                        </Grid.Column>
                    </Grid.Row>
                    {props.activePageContent.map(row => {
                        return (
                            <Grid.Row color="black" key={row.orderNumber}>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.restaurantId)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.busDt)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.orderNumber)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.orderTime)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.totalAmount)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.netAmount)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.itemSoldQty)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.beverageQty)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.discountAmount)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.itemDeletedAmount)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.discountRatio, "discountRatio")}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.refundAmount)}
                                </Grid.Column>
                            </Grid.Row>
                        )
                    })}
                </Grid>
            </Segment>
        </div>
    )
}