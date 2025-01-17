import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import './pagination.css'

const paginationLimit = 10
const Pagination = ({ count, currentPage, updatePage }) => {
  const [paginationItem, setPaginationItem] = useState(null)

  const getPages = () => {
    const maxItems = 5
    const pages = Math.ceil(count / maxItems)
    const numberArray = [];
    for (let i = 1; i <= pages; i++) {
      numberArray.push(i);
    }
    setPaginationItem(numberArray)
  }

  const renderPagination = useMemo(() => {
    if(paginationItem?.length > paginationLimit) {
      if(currentPage < paginationLimit) {
        return paginationItem.slice(0, paginationLimit)
      } else if(currentPage >= paginationLimit) {
        let start = paginationItem.length >= (currentPage + 5) ? currentPage - 5 : currentPage
        let end = paginationItem.length >= (currentPage + 5) ? currentPage + 5 : paginationItem.length
        if(end == paginationItem.length) {
          return paginationItem.slice(paginationItem.length - 10 , paginationItem.length)
        } else {
          return paginationItem.slice(start, end)
        }
      } else {
        return paginationItem.slice(0, paginationLimit)
      }
    } else {
      return paginationItem
    }
  }, [paginationItem, currentPage])

  const handlePagination = (item) => {
    updatePage(item)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentPage < paginationItem.length) {
      updatePage(currentPage + 1); 
    } else if (e.key === 'ArrowLeft' && currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  useEffect(() => {
    getPages()
  }, [count])

  return (
    <nav className='pagination-container' onKeyDown={handleKeyDown}  tabIndex={0}>
        <div tabIndex={1} className={`prev-pagination ${currentPage == 1 ? 'pointer-none' : '' }`} onClick={() => handlePagination(currentPage != 1 ? currentPage - 1: 1)}>
          {'< Previous'}
        </div>
        {paginationItem?.length !== 0 && renderPagination?.map((item) => <div tabIndex={1} className={`${currentPage == item ? 'current-page' : ''} number-pagination`} key={item} onClick={() => handlePagination(item)}>{item}</div>)}
        <div tabIndex={1} className={`next-pagination ${paginationItem?.length == currentPage ? 'pointer-none' : '' }`}  onClick={() => handlePagination(paginationItem.length !== currentPage ? currentPage + 1: paginationItem.length)}>
          {'Next >'}
        </div>
    </nav>
  )
}

export default Pagination