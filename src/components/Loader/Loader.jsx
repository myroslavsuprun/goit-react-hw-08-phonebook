import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader({ height = 80 }) {
  return (
    <LoaderWrapper>
      <ThreeDots
        height={height}
        width="80"
        radius="9"
        color="#96C4EC"
        ariaLabel="three-dots-loading"
        wrapperStyle={true}
      />
    </LoaderWrapper>
  );
}

Loader.propTypes = {
  height: PropTypes.number,
};
