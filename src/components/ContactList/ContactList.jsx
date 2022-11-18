import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Text>
              {contact.name}: {contact.number}
            </Text>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
