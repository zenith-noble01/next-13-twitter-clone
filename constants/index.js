import { RiHome7Fill, RiUserLine } from "react-icons/ri"
import { HiBell, } from "react-icons/hi"
import { HiOutlineCog6Tooth, } from "react-icons/hi2"


export const sidebarRoutes = [
    {
        name: "Home", path: "/", icon: RiHome7Fill
    },
    {
        name: "Notification", path: "/notification", icon: HiBell
    },
    {
        name: "Profile", path: "/profile/35467890", icon: RiUserLine
    },
    {
        name: "Settings", path: "/settings", icon: HiOutlineCog6Tooth
    },
]

export const usersToFollow = [
    {
        name: "john doe",
        username: "johndoe",
        profilePic: "/Images/user1.jpg"
    },
    {
        name: "john muller",
        username: "johnmuller",
        profilePic: "/Images/user2.jpg"
    },
    {
        name: "john doe",
        username: "johndoe",
        profilePic: "/Images/user1.jpg"
    },
    {
        name: "john muller",
        username: "johnmuller",
        profilePic: "/Images/user2.jpg"
    }
]


export const userPosts = [
    {
        name: "john muller",
        username: "johnmuller",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?"
    },
    {
        name: "john muller",
        username: "johnmuller",
        image: "/Images/img1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?"
    },
    {
        name: "john muller",
        username: "johnmuller",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?"
    },
    {
        name: "john muller",
        username: "johnmuller",
        image: "/Images/img2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?"
    },

]

export const settingsRoutes = [
    {
        name: "User data",
        path: "/settings"
    },
    {
        name: "Password",
        path: "/settings/password"
    },
    {
        name: "display",
        path: "/settings/display"
    }
]