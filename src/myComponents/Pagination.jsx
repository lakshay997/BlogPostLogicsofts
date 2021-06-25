import React, {useState} from 'react'
import './Component.css'

const Pagination = ({postsPerPage, totalPosts}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
      }
    return (
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination" style={{marginTop: '30px', marginLeft: '50px'}}>

                {pageNumbers.map(number => { 
                    return(
                    <>
                    <li key={number} className="page-item" style={{marginTop: '30px', marginLeft: '10px' }}>
                        <a onClick={() => paginate(number)} href={number} className="page-link">
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
