import Transaction from "./Transaction"
import Cards from "./Cards"
import List from "./List"
import "./index.css"

export default function Layout() {
    return (
        <div className="body">
            <Overview />
            <Cards />
            <Transaction />
            <List />
        </div>
    )
}


function Overview() {
    return (
        <div className="overview">
            <h4>Overview</h4>
            <select name="month" id="month" >
                <option>This Month</option>
            </select>
        </div>
    )
}