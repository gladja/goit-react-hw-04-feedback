import {Sect} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Sect>{title}</Sect>
      {children}
    </>
  );
};
