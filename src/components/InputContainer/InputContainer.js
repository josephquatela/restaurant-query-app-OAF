import './InputContainer.css'

export function InputContainer() {


    return(
        <div className='inputContainer'>
            <h2>Advanced Search Options</h2>
            <div className='params'>
                <div className='paramsLeft'>
                    {/* RestaurantID param component
                    Metrics component */}
                </div>
                <div className='paramsRight'>
                    {/* Dates component with selector
                    Time component (default 6am - 5am) */}
                </div>
            </div>
            <div className='searchButton'>
                <button>Search</button>
            </div>
        </div>
    )
}