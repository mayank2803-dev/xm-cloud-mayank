import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

interface GraphQLItem {
  title: Field<string>;
  content: Field<string>;
}

interface GraphQLData {
  item: GraphQLItem;
}

interface ComponentProps {
  fields: {
    data: GraphQLData;
  };
}

export const Default = ({ fields }: ComponentProps) => {
  const item = fields.data.item;

  return (
    <div>
      <Text tag="h2" className="contentTitle" field={item.title} />
      <RichText tag="p" field={item.content} />
    </div>
  );
};
