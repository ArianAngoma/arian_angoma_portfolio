import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <div>
        <a
          href=""
          target="_blank" rel="noreferrer"
        >
          <BsTwitter/>
        </a>
      </div>
      <div>
        <a
          href=""
          target="_blank" rel="noreferrer"
        >
          <FaFacebookF/>
        </a>
      </div>
      <div>
        <a
          href=""
          target="_blank" rel="noreferrer"
        >
          <BsInstagram/>
        </a>
      </div> */}
      <div>
        <a
          href="https://www.linkedin.com/in/arian-angoma-vilchez/"
          target="_blank" rel="noreferrer"
        >
          <BsLinkedin/>
        </a>
      </div>
    </div>
  );
};
