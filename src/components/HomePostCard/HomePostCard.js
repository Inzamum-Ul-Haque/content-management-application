import React from "react";
import "./HomePostCard.css";
import img from "../../assets/images/background-1.jpg";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";

const HomePostCard = () => {
  return (
    <div className="home-post-card-container">
      <div className="home-post-card-wrapper">
        <h1 className="post-title">
          এখন দায়িত্ব স্বাধীনতার সুফল ঘরে ঘরে পৌঁছে দেওয়া
        </h1>
        <p className="post-writer">
          Written by <span>Naveen Chari</span> March 26, 2022, 12:05:09
        </p>
        <hr />
        <div className="post-img">
          <img src={img} alt="" />
        </div>
        <div className="post-desc">
          <p>
            কলকাতার ঐতিহ্যশালী সংস্কৃত কলেজ, বর্তমানের সংস্কৃত বিশ্ববিদ্যালয়ের
            একটি কক্ষ থেকে উদ্ধার হওয়া সিন্দুকে মিলল শতাব্দীর ইতিহাস। ২০০ পুরানো
            সিন্দুক, তা খোলা অতি দুঃসাধ্য। চাবি তৈরি করেও চারটি চাবি দিয়ে
            সিন্দুক খুলতে ব্যর্থ হয়ে পাঁচ ঘণ্টার চেষ্টায় শেষে সিন্দুকের নাটবল্টু
            খুলতে হয়। বিশ্ববিদ্যালয়ের উপাচার্য সোমা বন্দোপাধ্যায়ের বক্তব্য
            অনুযায়ী- মুখবন্ধ শীল্ড খাম পাওয়া গেছে যার উপরে লেখা আছে লিস্ট অব্
            অ্যাসেটস্। সংস্কৃত কলেজের গুরুত্বপূর্ণ নথি এই খামের মধ্যে আছে। কি
            সেই নথি?সবচেয়ে গুরুত্বপূর্ণ নথি হল “মুক্তকেশী দেবীর বিধবা ফান্ড”
            নামাঙ্কিত ফান্ডটি সংস্কৃত কলেজে ঈশ্বরচন্দ্র বিদ্যাসাগরেরে তৈরি
            বিধবাদের জন্য ফান্ড। বিধবাদের জন্য মাসিক ২ টাকা করে বরাদ্দ করা
            হয়েছিল। আটজন বিধবার নাম উল্লেখ আছে এই নথিতে যাঁরা বিধবা ভাতা পেতেন।
            নথিটি ১৯৫৬ সালের। সংস্কৃত কলেজের গুরুত্বপূর্ণ নথি এই খামের মধ্যে
            আছে। কি সেই নথি?সবচেয়ে গুরুত্বপূর্ণ নথি হল “মুক্তকেশী দেবীর বিধবা
            ফান্ড” নামাঙ্কিত ফান্ডটি সংস্কৃত কলেজে ঈশ্বরচন্দ্র বিদ্যাসাগরেরে
            তৈরি বিধবাদের জন্য ফান্ড। বিধবাদের জন্য মাসিক ২ টাকা করে বরাদ্দ করা
            হয়েছিল। আটজন বিধবার নাম উল্লেখ আছে এই নথিতে যাঁরা বিধবা ভাতা পেতেন।
            নথিটি ১৯৫৬ সালের।
          </p>
          <Link to="/dashboard">See More</Link>
        </div>
        <div className="post-views-comments">
          <div className="post-views">
            <span className="post-view-icon">
              <BsEye />
            </span>
            <span className="post-views-count">26</span>
          </div>
          <div className="post-comments">
            <span className="post-comments-icon">
              <FaComments />
            </span>
            <span className="post-comments-count">15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePostCard;
