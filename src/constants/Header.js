import arrow from "../assets/Header/arrow.svg";

export const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/aboutUs",
  },
  {
    title: "Service",
    link: "/service",
  },
  {
    title: "Page",
    arrow: arrow,
    link: "/page",
    openLink: [
        {
            text: "Pricing Plan",
            href: "/pricingPlan"
        },
        {
            text: "FAQ",
            href: "/faq"
        },
        {
            text: "Terms & Conditions",
            href: "/termsConditions"
        },
        {
            text: "Privacy Policy",
            href: "/privacyPolicy"
        }
    ]
  },
  {
    title: "Blog",
    arrow: arrow,
    link: "/blog",
    openLink: [
        {
            text: "Recent Articles",
            href: "/recentArticles"
        },
        {
            text: "Our Team",
            href: "/ourteam"
        },
        {
            text: "Detail Service",
            href: "/detailService"
        },]
  }
];
