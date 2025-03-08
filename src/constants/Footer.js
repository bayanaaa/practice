import twitter from "../assets/Footer/twitter.svg";
import insta from "../assets/Footer/insta.svg";
import facebook from "../assets/Footer/facebook.svg";
import github from "../assets/Footer/github.svg";
import location from "../assets/Footer/location.svg";
import email from "../assets/Footer/email.svg";
import phone from "../assets/Footer/phone.svg";

export const media = [twitter, insta, facebook, github];

export const footerArr = [
  {
    title: "Quicklinks",
    info: [
      {
        desc: "Home",
        link: "/",
      },
      {
        desc: "Pricing Plan",
        link: "/pricingPlan",
      },
      {
        desc: "Service",
        link: "/service",
      },
      {
        desc: "Blog",
        link: "/blog",
      },
      {
        desc: "Our Team",
        link: "/ourTeam",
      },
    ],
  },
  {
    title: "Support",
    info: [
      {
        desc: "About Us",
        link: "/aboutUs",
      },
      {
        desc: "Contact Us",
        link: "/contactUs",
      },
      {
        desc: "FAQ",
        link: "/faq",
      },
      {
        desc: "Terms & Conditions",
        link: "/termsConditions",
      },
      {
        desc: "Privace Policy",
        link: "/privacyPolicy",
      },
    ],
  },
  {
    title: "Need Help?",
    info: [
      {
        desc: "Tanjung Sari Street no.48, Pontianak City",
        img: location,
      },
      {
        desc: "Support@VRNas.com",
        img: email,
      },
      {
        desc: "+123 456 7890",
        img: phone,
      },
    ],
  },
];
