import React, { useEffect, useState } from 'react';
import Loader                         from 'react-js-loader';

import './styles.css';

interface CertificateImageProps {
  img: string,
  link: string,
  title: string,
}

const CertificateImage: React.FC<CertificateImageProps> = (props) => {
  const {
          title,
          link,
          img,
        } = props;

  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      await fetch('src');
      setImageReady(true);
    };

    fetchData();
  }, []);

  return (
    <>
      {imageReady ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className={'img'} src={img} alt={title} />
          <span className={'img__mask'}>
                <b className={'title'}>{title}</b>
          </span>
        </a>
      ) : (
        <div className={'loaderWrapper'}>
          <Loader bgColor="#000000" />
        </div>
      )}
    </>
  );
};

export default CertificateImage;
