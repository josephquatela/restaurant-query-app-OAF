import { } from "semantic-ui-react";

import { Grid, Segment } from 'semantic-ui-react';
import './ResultsTable.css';

export function ResultsTable(props) {

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
                    <Grid.Row color="grey">
                        <Grid.Column textAlign="center">
                            Test
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            Test
                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}