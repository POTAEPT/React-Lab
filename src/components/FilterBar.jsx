// ว่างไว้ตั้งใจ — เขียนเองใน Lab A (13:00–13:55)


function FilterBar({ query, userFollowers, handleQueryChange, handleUserFollowersChange }) {

    const textFilter = "(login หรือ name)"


    return (
        <div>
            <div className="filter-bar">
                <p>ค้นหา {textFilter}</p>
                <input
                    className="border rounded"
                    type='text'
                    value={query}
                    onChange={(e) => {
                        handleQueryChange(e.target.value)
                    }} placeholder='Search' />
            </div>
            <div>
                <p>ผู้ติดตามขั้นต่ำ</p>
                <input
                    className="border rounded"
                    type='number'
                    value={userFollowers}
                    onChange={(e) => {
                        handleUserFollowersChange(Number(e.target.value))
                    }} placeholder="userFollowers" />
            </div>
        </div>
    )

}



export default FilterBar;