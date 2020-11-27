import React from 'react';
import { Checkable, WhiteSpace } from '@td-design/react-native';

export default function ListItemDemo() {
  return (
    <>
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple
        options={[{ label: 'Apple', value: 1, disabled: true }, { label: 'Banana', value: 2, disabled: true }, { label: 'Peer', value: 3 }]}
        defaultValue={[1, 3]}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple
        options={['apple', 'banana', 'peer']}
        onChange={value => {
          console.log(value);
          // setValue(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple={false}
        options={[1, 2, 3]}
        defaultValue={[1, 3]}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        options={[{ label: 'Apple', value: 1, disabled: true }, { label: 'Banana', value: 2 }, { label: 'Peer', value: 3 }]}
        defaultValue={[1, 3]}
        multiple={false}
        // disabled
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        multiple={false}
        options={['苹果', '香蕉', '梨']}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        multiple
        options={[1, 2, 3]}
        onChange={value => {
          console.log(value);
        }}
      />
    </>
  );
}
