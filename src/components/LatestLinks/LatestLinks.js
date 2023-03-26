import React from "react";
import { Link } from "react-router-dom";
import "./LatestLinks.css";

const LatestLinks = () => {
  return (
    <div className="latest-links-container">
      <div className="latest-links-wrapper">
        <h2>Latest Links</h2>
        <ul>
          <Link>ডিগ্রি নিলেই নমশূদ্র কখনো ব্রাহ্মণ হয় না।</Link>
          <Link>বাংগালী জাতি কেন পাকিস্তান থেকে আলাদা হতে চেয়েছিলো?</Link>
          <Link>The Real Story Of Atlantis – An Underwater Utopia</Link>
          <Link>Boy Wakes Up And Can’t Speak A Lick Of English</Link>
          <Link>How Much Of Reality Is Shared?</Link>
        </ul>
      </div>
    </div>
  );
};

export default LatestLinks;
