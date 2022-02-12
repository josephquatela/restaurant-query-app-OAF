import { useState } from 'react';
import { Icon, Pagination } from 'semantic-ui-react';
import { ResultsTable } from '../ResultsTable/ResultsTable';
import './ResultsList.css';

export function ResultsList(props) {
    const itemsPerPage = 10;
    const [activePageNumber, setActivePageNumber] = useState(1);

    function changeResultsPage(data) {
        setActivePageNumber(data.activePage);
        const lowerLimit = 10 * activePageNumber - 10;
        const upperLimit = 10 * activePageNumber;
        props.setActivePageContent(props.returnedData.slice(lowerLimit, upperLimit));
    }

    if (props.returnedData.length != 0) {
        return (
            <div style={{textAlign: "center"}}>
                <Pagination
                activePage={activePageNumber}
                onPageChange={(event, data) => changeResultsPage(data)}
                ellipsisItem={{
                    content: <Icon name='ellipsis horizontal' />,
                    icon: true,
                }}
                totalPages={Math.ceil(props.returnedData.length / itemsPerPage)}
                />
                <ResultsTable activePageContent={props.activePageContent} />
            </div>
        )
    } else {
        return (
            <h1 style={{color: "white", marginTop: 124}}>No results</h1>
        )
    }
}