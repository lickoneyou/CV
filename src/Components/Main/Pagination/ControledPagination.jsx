import { Pagination } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ControlledPagination = ({ pages }) => {
  const [activePage, setPage] = useState(1)
  const dispatch = useDispatch()

  return (
    <Pagination
      value={activePage}
      boundaries={0}
      onChange={(e) => {
        setPage(e)
        dispatch({
          type: 'CHANGE_PAGE',
          payload: e,
        })
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
      total={pages}
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  )
}

export default ControlledPagination
