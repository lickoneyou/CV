import React, { useEffect, useState } from 'react';
import Loader                         from 'react-js-loader';

import './styles.css';

interface ProjectImageProps {
  alt: string,
  github: string,
  link?: string,
  src: string,
}

const ProjectImage: React.FC<ProjectImageProps> = (props) => {
  const {
          src,
          alt,
          github,
          link,
        } = props;

  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const fn = async() => {
      await fetch('src');
      setImageReady(true);
    };
    fn();
  }, []);

  return (
    <>
      {imageReady ? (
        <>
          <img className={'img'} src={src} alt={alt} />{' '}
          <span className={'img__mask'}>
            <b className={'title'}>{alt}</b>
            {github && (
              <a
                href={github}
                className={'linkButton'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{
                    width:       '20px',
                    marginRight: '10px',
                  }}
                  src="./images/icons/githubBtn.png"
                  alt="icon"
                />
                GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                className={'linkButton'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: '20px' }}
                  src="./images/icons/deploy.png"
                  alt="icon"
                />
                Deploy
              </a>
            )}
          </span>
        </>
      ) : (
        <div className={'loaderWrapper'}>
          <Loader bgColor="#000" />
        </div>
      )}
    </>
  );
};

export default ProjectImage;
