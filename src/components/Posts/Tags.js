import React from 'react';
import { Link } from 'gatsby';


const Tag = ({ tag }) => (
  <>
    <Link to={`/category/${tag}`} className="category"><span>{tag}</span></Link>
  </>
);

const Tags = ({ category }) => (
  <>
    {(category || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </>
);

export default Tags