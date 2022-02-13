import { useEffect, useState } from "react";
import { Button, Icon, Pagination } from "semantic-ui-react";
import { Grid } from 'semantic-ui-react';
import { parseReturnData } from "../../Utility";
import './ResultsTable.css';

export function ResultsTable(props) {
    const itemsPerPage = 10;
    const [activePageNumber, setActivePageNumber] = useState(1);
    const [activePageContent, setActivePageContent] = useState([]);
    const [filteredDataList, setFilteredDataList] = useState([]);
    const [isShowingData, setIsShowingData] = useState(false);

    function filterData(id, restaurantId) {
        const filteredData = [];
        for (var i = 0; i < props.returnedData.length; i++) {
            if (props.returnedData[i][restaurantId] === id) {
                filteredData.push(props.returnedData[i]);
            }
        }
        setFilteredDataList(filteredData);
        setActivePageContent(filteredData.slice(0, 11));
    }

    function changeResultsPage(data) {
        setActivePageNumber(data.activePage);
        const lowerLimit = 10 * activePageNumber - 10;
        const upperLimit = 10 * activePageNumber;
        setActivePageContent(filteredDataList.slice(lowerLimit, upperLimit));
    }

    useEffect(() => {
        filterData(props.id, "restaurantId");
    }, [props.returnedData]);

    return (
        <div className="resultsTableContainer">
            {isShowingData ? 
            <div>
                <div style={{textAlign: "center"}}>
                    <Pagination
                    activePage={activePageNumber}
                    onPageChange={(event, data) => changeResultsPage(data)}
                    ellipsisItem={{
                        content: <Icon name='ellipsis horizontal' />,
                        icon: true,
                    }}
                    totalPages={Math.ceil(filteredDataList.length / itemsPerPage)}
                    style={{marginTop: 24, marginBottom: 16}}
                    />
                </div>
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
                    {activePageContent.map(row => {
                        return (
                            <Grid.Row color="black" key={row.orderNumber}>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.restaurantId)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.busDt, "busDt")}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.orderNumber, "orderNumber")}
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
                                    {parseReturnData(row.itemSoldQty, "itemSoldQty")}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {parseReturnData(row.beverageQty, "beverageQty")}
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
            </div>
            : null
            }
            <div style={{textAlign: "center"}}>
                {isShowingData ? 
                <Button className="dropdownButton" icon circular color="yellow"
                onClick={(event, data) => {setIsShowingData(false)}}>
                <Icon name="arrow alternate circle up" color="black" />
                </Button> :
                <Button className="dropdownButton" icon circular color="yellow"
                onClick={(event, data) => {setIsShowingData(true)}}>
                    <Icon name="arrow alternate circle down" color="black" />
                </Button>
                }
            </div>
        </div>
    )
}