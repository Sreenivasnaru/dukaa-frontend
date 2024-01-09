import "./index.css"

export default function Transaction() {
    return(
        <div className="transaction-cont">
            <h4>Transactions | This Month</h4>
            <button className="payout">Payouts (22)</button>
            <button className="refund">Refund (6)</button>
        </div>
    )
}