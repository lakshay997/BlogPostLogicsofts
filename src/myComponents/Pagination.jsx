import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                {pageNumbers.map(number => { 
                    return(
                    <>
                    <li key={number} className="page-item" style={{marginTop: '30px', marginLeft: '30px'}}>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                    </>
                )
                })}
            </ul>
        </nav>
        </>
    )

}

export default Pagination
