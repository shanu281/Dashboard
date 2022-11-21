import './style.css'
import React from 'react';
import { got } from '../data'
import Card from '../Cards';

class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHouse: ""
        }
    }
    handleClick = (house) => this.setState({ activeHouse: house })
    render() {
        let houses = got.houses.map(house => house.name);
        let allPeople = got.houses.reduce((acc, cv) => { acc = acc.concat(cv.people); return acc; }, []);

console.log(houses)

        return (
            <>
                <div className='tags-display'>
                    {houses.map(house => <button onClick={() => this.handleClick(house)} className={house === this.state.activeHouse ? 'active btn' : 'btn'}>{house}</button>)}
                </div>
                <Card allPeople={allPeople} activeHouse={this.state.activeHouse} />
            </>


        )
    }
}
export default Tags;