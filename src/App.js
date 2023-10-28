import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import TranslateIcon from "@mui/icons-material/Translate";
import { Search } from "@mui/icons-material";
const App = () => {
  return (
    <>
      <header>
        <nav>
          <div id="top-nav">
            <div className="tn-left">
              <a href="#">E-court</a>
              <a href="#">E-committee</a>
              <a href="#">India Code</a>
            </div>
            <div className="tn-right">
              <span>
                <input type="text" /> <Search />
              </span>
              <TranslateIcon />
            </div>
          </div>
          <div id="mid-nav">
            <div id="logo">
              <img src="./imgs/logo.jpg" alt="" />
            </div>
            <div id="mid-left">
              <div id="bulb">
                <img src="./imgs/bulb.jpg" alt="" />
              </div>
              <div id="chasma">
                <img src="./imgs/chasma.jpg" alt="" />
              </div>
              <div id="log">
                <a href="#">LOGIN</a>
                <span>|</span>
                <a href="#">REGISTER</a>
              </div>
            </div>
          </div>
          <div id="bot-nav">
            <a href="#" id="nav-link">
              HOME
            </a>
            <a href="#" id="nav-link">
              ABOUT
            </a>
            <a href="#" id="nav-link">
              FEATURES
            </a>
            <a href="#" id="nav-link">
              HOW IT WORKS
            </a>
            <a href="#" id="nav-link">
              CONTACT
            </a>
            <a href="#" id="nav-link">
              FAQ
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section id="slider-section">
          <Swiper
            pagination={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./imgs/sld1.jpg" className="slider-img" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./imgs/sld1.jpg" className="slider-img" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./imgs/sld1.jpg" className="slider-img" alt="" />
            </SwiperSlide>
          </Swiper>
        </section>
        <section id="imp-notice">
          <div className="imp-n-left">IMPORTANT NOTICE</div>
          <div className="imp-n-right">
            This website is made for Smart India Hackathon 2023
          </div>
        </section>
        <section id="about">
          <div className="sec-title">ABOUT</div>
          <div className="ab-desc">
            {" "}
            <p>
              The objective of this project is to develop a secure and
              user-friendly blockchain-based eVault system for legal records.
            </p>
            <p>
              This system will ensure security, transparency, and accessibility
              for all stakeholders, including lawyers, judges, clients, and
              administrators.
            </p>
            <p>
              It will allow for the secure storage, management, and sharing of
              legal records, with seamless integration into existing legal
              databases and case management systems.
            </p>
            <p>
              The project aims to make the justice system in India more
              efficient and transparent.
            </p>
          </div>
          <div id="points-grid">
            <div className="pg-left">
              <div className="sec-title">FEATURES</div>
              <div className="points">
                <span>Access Control</span>
                <span>Better Security</span>
                <span>Encryption & Authentic Mechanism with blockchain</span>
                <span>Digitalization & Transparency</span>
              </div>
            </div>
            <div className="pg-right">
              <div className="sec-title">WHAT'S NEW ?</div>
              <div className="points">
                <span>
                  Indian government have legal database, our project will help
                  them to add blockchain as security channel to keep legal data
                  safe and secure.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="hathodi"></section>
        <section id="comp">
          <div id="com-title">
            <strong>
              Chaining <br /> Legal <br /> Records
            </strong>
            <small>with</small>
            <big>
              Ethereum <br /> Blockchain
            </big>
          </div>
          <div id="pts">
            <div className="com-points">
              <div className="sec-title">How it Work ?</div>
              <ul>
                <li>
                  LOGIN with your respected role i.e Administrator , Judge,
                  Lawyer, Client.
                </li>
                <li>If you don t have an account please Register here !!</li>
                <li>
                  After registration login to portal and please fill details of
                  case, as per your roles you will have your rights
                </li>
              </ul>
            </div>
            <div className="com-points">
              <div className="sec-title">Roles and Responsibilities</div>
              <ul>
                <li>
                  LOGIN with your respected role i.e Administrator , Judge,
                  Lawyer, Client.
                </li>
                <li>If you don t have an account please Register here !!</li>
                <li>
                  After registration login to portal and please fill details of
                  case, as per your roles you will have your rights
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="team">
          <div className="sec-title">CONTACT TEAM</div>
          <div className="team-mem">
            <div className="tm-l">
              <ul>
                <li>Mac"K"book</li>
                <li>Priyansh Khunt</li>
                <li>Viengiri Goswami</li>
              </ul>
            </div>
            <div className="tm-r">
              <ul>
                <li>Devanshi Sonara</li>
                <li>Drashti Ashara</li>
                <li>Ritu Sharma </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="sec-title">FAQ?</div>
          <ul className="faq-points">
            <li>
              LOGIN with your respected role i.e Administrator , Judge, Lawyer,
              Client
            </li>
            <li>If you don t have an account please Register here !!</li>
            <li>
              After registration login to portal and please fill details of
              case, as per your roles you will have your right
            </li>
            <li>
              LOGIN with your respected role i.e Administrator , Judge, Lawyer,
              Client
            </li>
            <li>If you don t have an account please Register here !!</li>
            <li>
              After registration login to portal and please fill details of
              case, as per your roles you will have your right
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <img src="./imgs/blk-logo.jpg" alt="" />
        <img src="./imgs/ftr-bulb.jpg" alt="" />
      </footer>
    </>
  );
};

export default App;
