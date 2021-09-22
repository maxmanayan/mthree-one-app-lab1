import React, { useState } from "react";
import styles from "../styles.css";

const Body = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Your Name"
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Mail Id"
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
          />
        </div>
        <div>
          <input
            placeholder="Mobile Number"
            onChange={(e) =>
              setFormInfo({ ...formInfo, phone: e.target.value })
            }
          />
        </div>
        <div>
          <textarea
            placeholder="Your Feedback"
            onChange={(e) =>
              setFormInfo({ ...formInfo, feedback: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Body;
