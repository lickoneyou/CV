import { Pagination }               from '@mantine/core';
import { useState }      from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { StateData } from '../../../types';

interface ControlledPaginationProps {
  action: string,
  page: 'projectsPage' | 'certificatesPage',
  pages: number,
}

const ControlledPagination: React.FC<ControlledPaginationProps> = (props) => {
  const {
          pages,
          page: curPage,
          action,
        } = props;

  const dispatch = useDispatch();

  const page = useSelector((state: StateData) => state);

  const [activePage, setPage] = useState(page.pagesReducer[curPage]);

  return (
    <Pagination
      value={activePage}
      boundaries={0}
      onChange={(e) => {
        setPage(e);
        dispatch({
          type:    action,
          payload: e,
        });
        window.scrollTo({
          top:      0,
          behavior: 'smooth',
        });
      }}
      total={pages}
      color="#FE4500"
      style={{
        display:        'flex',
        justifyContent: 'center',
        paddingBottom:  '15px',
        zIndex:         '900',
        position:       'relative',
      }}
    />
  );
};

export default ControlledPagination;
