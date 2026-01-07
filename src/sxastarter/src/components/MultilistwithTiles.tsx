import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Tiles: [];
  Summary: Field<string>;
}
interface TilesFields {
  Title: Field<string>;
  Summary: Field<string>;
  fields: Fields;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};
const MultilistwithTiles = (props: PromoProps): JSX.Element => {
  console.log(props);
  return (
    <div>
      <h2>{props.fields.Title.value}</h2>
      {props.fields.Tiles.map((balance: TilesFields) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <li>{balance.fields.Title.value}</li>
          </div>
        );
      })}
    </div>
  );
};

export default MultilistwithTiles;
