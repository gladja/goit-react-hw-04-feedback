import { Item, List } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  return (
    <>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {good + bad + neutral}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </List>
    </>
  );
};
