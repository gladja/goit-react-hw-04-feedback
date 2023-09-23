import { Item, List } from '../Statistics/Statistics.styled';

export const Notification = ({ message }) => {
  return (
    <List>
      <Item>{message}</Item>
    </List>
  );
};
