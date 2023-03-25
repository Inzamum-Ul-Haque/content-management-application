import React from "react";
import "./PostCard.css";
import img from "../../assets/images/unsplash-1.jpg";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const PostCard = () => {
  let text =
    "শাল, পিয়াল, মহুয়ায় ঘেরা অযোধ্যা পাহাড়। অপূর্ব তার সৌন্দর্য্য।পশ্চিমবঙ্গের পুরুলিয়া জেলায় এর অবস্থান। চারিদিকে পাহাড় ঘেরা একটি ছোট্ট মালভূমি। শাল, পিয়াল, মহুয়ায় ঘেরা অযোধ্যা পাহাড়। অপূর্ব তার সৌন্দর্য্য। পশ্চিমবঙ্গের পুরুলিয়া জেলায় এর অবস্থান। চারিদিকে পাহাড় ঘেরা একটি ছোট্ট মালভূমি। শাল, পিয়াল, মহুয়ায় ঘেরা অযোধ্যা পাহাড়। অপূর্ব তার সৌন্দর্য্য। পশ্চিমবঙ্গের পুরুলিয়া জেলায় এর অবস্থান। চারিদিকে পাহাড় ঘেরা একটি ছোট্ট মালভূমি। শাল, পিয়াল, মহুয়ায় ঘেরা অযোধ্যা পাহাড়। অপূর্ব তার সৌন্দর্য্য। পশ্চিমবঙ্গের পুরুলিয়া জেলায় এর অবস্থান। চারিদিকে পাহাড় ঘেরা একটি ছোট্ট মালভূমি";

  return (
    <div className="postcard-container">
      <div className="postcard-wrapper">
        <div className="postcard-left-content">
          <div className="left-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="postcard-right-content">
          <div className="title-container">
            <h1 className="post-title">
              ডিগ্রি নিলেই নমশূদ্র কখনো ব্রাহ্মণ হয় না।
            </h1>
            <div className="edit-delete-btn">
              <AiFillEdit title="Edit" />
              <AiFillDelete title="Delete" />
            </div>
          </div>
          <div className="author-date">
            <div>
              <span className="posted">Posted by</span>{" "}
              <span className="author">Naveen Chari, </span>
              <span className="date">February 25, 2022</span>
            </div>
            <div>
              <span className="viewed">Views: </span>{" "}
              <span className="views">25</span>{" "}
            </div>
          </div>
          <p className="post-desc">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
