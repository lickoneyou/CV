import React, { useEffect, useMemo } from 'react';
import _                             from 'lodash';
import { useSelector }               from 'react-redux';

import './styles.css';

import type { MainProps } from '../../../types';
import type { StateData } from '../../../types';

import certificates from '../../../data/certificates';

import CertificateImage     from '../CertificateImage';
import ControlledPagination from '../Pagination';

const MainCertificates: React.FC<MainProps> = (props) => {

  const page = useSelector((data: StateData) => {
    return data.pagesReducer.certificatesPage;
  });

  const chunkCertificates = useMemo(() => {
    return _.chunk(certificates, 3);
  }, [_, certificates]);
  const myProjects        = useMemo(() => {
    return chunkCertificates[page - 1];
  }, [chunkCertificates, page]);

  useEffect(() => {
    props.st('otherApp');
  });

  return (
    <main className={'MainCertificates'}>
      <div className={'certificatesContainer'}>
        {myProjects.map((el) => {
          return (
            <div className={'certificateWrapper'} key={el.title}>
              <CertificateImage title={el.title} link={el.link} img={el.img} />
            </div>
          );
        })}
      </div>
      <ControlledPagination
        pages={chunkCertificates.length}
        page="certificatesPage"
        action="CHANGE_CERTIFICATES_PAGE"
      />
    </main>
  );
};

export default MainCertificates;
