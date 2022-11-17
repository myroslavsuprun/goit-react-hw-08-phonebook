import { ThreeDots } from 'react-loader-spinner';

import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#96C4EC"
        ariaLabel="three-dots-loading"
        wrapperStyle={true}
      />
    </LoaderWrapper>
  );
}
