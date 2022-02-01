import { Label } from "semantic-ui-react";

import { Grid, Segment } from 'semantic-ui-react';
import './ResultsTable.css';

export function ResultsTable(props) {

    return (
        <div className="resultsTableContainer">
            <Segment>
                <Grid centered columns={12} divided stretched>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Label size="mini">RestaurantID</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">BusDt</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">OrderNumber</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">OrderTime</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">TransactionTotalAmount</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">TransactionNetAmount</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">ItemSoldQty</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">BeverageQty</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">DiscountAmount</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">ItemDeletedAmount</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">DiscountRatio</Label>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Label size="mini">RefundAmount</Label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
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