// Third party
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { useGetContactsQuery } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const useContacts = () => {
  const filter = useSelector(selectFilter);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        if (filter === '') {
          return contacts;
        }

        return contacts.filter(contact => {
          const contactName = contact.name.toLowerCase();
          return contactName.includes(filter.toLowerCase());
        });
      }
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        data: selectFilteredContacts(result, filter),
      };
    },
  });
};
