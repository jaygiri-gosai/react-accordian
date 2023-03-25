import React, { useState } from "react";
import { BLOGS } from "../utils/constants";

const Section = ({ title, desc, visible, setVisible }) => {
  return (
    <div>
      <h2 onClick={() => setVisible()} style={{ cursor: "pointer" }}>
        {title}
      </h2>

      {visible && (
        <div>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

const Accordian = () => {
  const [blogs, setBlogs] = useState(BLOGS);
  const [visibleSection, setVisibleSection] = useState(0);
  return (
    <div className="main-container">
      {blogs.map((item) => (
        <Section
          key={item.id}
          title={item.title}
          desc={item.body}
          visible={visibleSection === item.id}
          setVisible={() =>
            setVisibleSection(item.id === visibleSection ? 0 : item.id)
          }
        />
      ))}
    </div>
  );
};

export default Accordian;
