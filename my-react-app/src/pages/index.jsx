import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination/Pagination'
import Table from '../components/Table/Table'
const API_URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`
const PageLayout = () => {
    const [projectData, setProjectData] = useState(null)
    const [paginationData, setPaginationData] = useState(null)
    const [page, setPage] = useState(1)
    const [productCount, setProductCount] = useState(0)
    const maxItemRender = 5
    
    useEffect(() => {
        async function fetchProjectData() {
            try{
                const response = await fetch(API_URL)
                const getProjects = await response.json()
                setProductCount(getProjects.length)
                setProjectData(getProjects)
                setPaginationData(getProjects.slice(0, maxItemRender))
            } catch(e) {
                console.log('Error occured Exception ====>', e)
                setProjectData(null)
            }
        }

        fetchProjectData()

    }, [])

    const updatePagination = (item) => {
        setPage(item)
        const start = (item - 1) * maxItemRender;
        const end = start + maxItemRender; 
        setPaginationData(projectData.slice(start, end))
    }

  return (
    <div>
       <Table data={paginationData} />
       <Pagination count={productCount} currentPage={page} updatePage={updatePagination} />
    </div>
  )
}

export default PageLayout