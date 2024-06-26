import { Pagination } from '@mantine/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ControlledPagination = ({ pages, page: curPage, action }) => {
  const page = useSelector((state) => state)
  const [activePage, setPage] = useState(page.pagesReducer[curPage])
  const dispatch = useDispatch()

  return (
    <Pagination
      value={activePage}
      boundaries={0}
      onChange={(e) => {
        setPage(e)
        dispatch({
          type: action,
          payload: e,
        })
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
      total={pages}
      color="#FE4500"
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '15px',
        zIndex: '900',
        position: 'relative',
      }}
    />
  )
}

export default ControlledPagination
