

export default function PopularCard({ Popcard }) {
    return (
        <div className="list-card">

            <div className='popularobjectcard'>
                <img
                    src={Popcard.eventpicone_url}
                    alt='' />
                <img className="card-image-bg"
                    src="/image/Rectangle45.png"
                    alt='' />
                <div className="card-down-object">
                    <div className="card-down-object-title">
                        {Popcard.category}
                    </div>
                    <div className="card-down-object-place">
                        {Popcard.eventname}
                    </div>
                    <img className="more-btn"
                        src="/image/Frame1.png"
                        alt='' />
                </div>
            </div>







        </div>

    )
}