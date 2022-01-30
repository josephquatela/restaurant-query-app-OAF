import { Dropdown, Label } from 'semantic-ui-react';
import { restaurantIdOptions } from '../../Utility';
import './RestaurantIdsInput.css';

export function RestaurantIdsInput(props) {

    return (
        <div class="restaurantIdsContainer">
            <Label ribbon>Restaurant IDs</Label>
            <Dropdown options={ restaurantIdOptions }
            placeholder='Select Restaurant ID'
            selection 
            multiple
            style={{width: '74%'}}
            value={props.IDs} 
            onChange={props.onChange}>
            </Dropdown>
        </div>
    )
}