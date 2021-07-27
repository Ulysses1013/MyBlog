import React from "react";
import {Link} from "gatsby"
type Props = {
    items: any
}
const Toc: React.FC<Props> = props => {
  return (
    
      <div className="toc__content">
        <ul>
            {props.items.map((item) => (
                <li>
                    <Link to={item.url}>{item.title}</Link>
                    {item.items && (
                        <Toc items={item.items} />
                    )}
                </li>
            ))}
        </ul>
      </div>
    
  );
};

export default Toc;