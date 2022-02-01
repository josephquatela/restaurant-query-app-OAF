import { ResultsTable } from '../ResultsTable/ResultsTable';
import './ResultsList.css';

export function ResultsList() {
    const hasResults = true;

    if (hasResults) {
        return (
            <ResultsTable />
        )
    } else {
        return (
            <h1 style={{color: "white", marginTop: 124}}>No results</h1>
        )
    }
}