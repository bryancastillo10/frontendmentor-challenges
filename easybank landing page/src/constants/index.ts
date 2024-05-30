import { navLinksProps, aboutFeaturesProps, newsFeaturesProps, socialMediaProps } from "./type";
import { Online, Budget, OnBoard, Api } from "../assets";
import { Money, Restaurant, Plane, Party } from "../assets";
import { Facebook,YouTube, Twitter,Pinterest, Instagram } from "../assets";
const navLinks: navLinksProps[] = [
    {
        id: 1,
        title: "Home",
        link: "home",
    },
    {
        id: 2,
        title: "About",
        link: "about",
    },
    {
        id: 3,
        title: "Contact",
        link: "contact",
    },
    {
        id: 4,
        title: "Blog",
        link: "blog",
    },
    {
        id: 5,
        title: "Careers",
        link: "careers",
    },
]

const aboutFeatures: aboutFeaturesProps[] = [{
    id: 1,
    title: "Online Banking",
    image: Online,
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
},
{
    id: 2,
    title: "Simple Budgeting",
    image: Budget,
    description: "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
},
{
    id: 3,
    title: "Fast Onboarding",
    image: OnBoard,
    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
},
{
    id: 4,
    title: "Open API",
    image: Api,
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
}
]

const newsFeatures: newsFeaturesProps[] = [
    {
        id: 1,
        title: "Receive money in any currency with no fees",
        author: "By Claire Robinson",
        content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        image: Money,
    },
    {
        id: 2,
        title: "Treat yourself without worrying about money",
        author: "By Wilson Hutton",
        content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you …",
        image: Restaurant,
    },
    {
        id: 3,
        title: "Take your Easybank card wherever you go",
        author: "By Wilson Hutton",
        content: " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.We’ll even show you …",
        image: Plane,
    },
    {
        id: 4,
        title: "Our invite-only Beta accounts are now live!",
        author: "By Claire Robinson",
        content: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        image: Party,
    },
]

const socialMedia: socialMediaProps[] = [
    {
        id: 1,
        icon: Facebook,
    },
    {
        id: 2,
        icon:YouTube,
    },
    {
        id: 3,
        icon: Twitter,
    },
    {
        id: 4,
        icon:Pinterest,
    },
    {
        id: 5,
        icon:Instagram
    }
]
export { navLinks, aboutFeatures, newsFeatures, socialMedia };