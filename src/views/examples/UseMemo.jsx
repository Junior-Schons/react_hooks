import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b) {
    const future = Date.now() + 2000
    while (Date.now() < future) { }
    return a + b
}

const UseMemo = (props) => {
    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)


    const result = useMemo(() => sum(n1, n2), [n1, n2])



    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input" onChange={e => setn1(parseInt(e.target.value))} />
                <input type="number" className="input" onChange={e => setn2(parseInt(e.target.value))} />

                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
