import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contactsSlice';
import { Input, Label, Span } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(setStatusFilter(event.currentTarget.value));

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" onChange={onChange} />
    </Label>
  );
};
