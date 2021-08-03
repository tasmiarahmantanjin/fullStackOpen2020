import React, { useState } from 'react'


const Filter = ({ country }) => {
	const [filterArr, setFilterArr] = useState('')

	return (
		<div>find countries
			<input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} />
		</div>
	)
}

export default Filter
