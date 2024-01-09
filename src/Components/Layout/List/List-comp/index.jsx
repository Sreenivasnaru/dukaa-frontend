import "./index.css"

export default function ListComp() {

    const green = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
    <circle cx="5.33594" cy="5" r="5" fill="#17B31B"/>
  </svg>

  const grey = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
  <circle cx="5.33594" cy="5" r="5" fill="#999999"/>
</svg>
    return(
        <>
        <div className="list-cont">
            <div className="box">Order ID</div>
            <div className="box">Status</div>
            <div className="box">Transaction ID</div>
            <div className="box">Refund date</div>
            <div className="box box-last">Order amount</div>
        </div>
        <ListItems orderId="#281209" symbol={green} status="Successful" refundDate="Today, 08:45 PM"/>
        <ListItems orderId="#281208" symbol={grey} status="Processing" refundDate="Yesterday, 03:45 PM"/>
        <ListItems orderId="#281207" symbol={green} status="Successful" refundDate="12 Jul 2023, 03:00 PM"/>
        <ListItems orderId="#281206" symbol={green} status="Successful" refundDate="12 Jul 2023, 03:00 PM"/>
        <ListItems orderId="#281205" symbol={green} status="Successful" refundDate="12 Jul 2023, 03:00 PM"/>
        <ListItems orderId="#281204" symbol={green} status="Successful" refundDate="12 Jul 2023, 03:00 PM"/>
        </>
    )
}

function ListItems({orderId, status, refundDate, symbol, style}) {
    return(
        <div className="item-cont">
            <div className="box orderId">{orderId}</div>
            <div className="box status">{symbol} {status}</div>
            <div className="box transactionid">131634495747</div>
            <div className="box refunddate">{refundDate}</div>
            <div className="box box-last orderamt">₹1,125.00</div>
        </div>
    )
}