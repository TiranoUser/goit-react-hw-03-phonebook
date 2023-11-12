export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, i) => {
        return (
          <li key={i}>
            {contact.name} <br /> {contact.number}{' '}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
