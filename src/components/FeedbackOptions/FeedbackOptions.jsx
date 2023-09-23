import { Btn, Wrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Wrap>
        {options.map(itm => (
          <Btn key={itm} name={itm} onClick={onLeaveFeedback} type='button'>{itm}</Btn>
        ))}
      </Wrap>
    </>
  );
};
