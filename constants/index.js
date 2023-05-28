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
        name: "Profile", path: "/profile", icon: RiUserLine
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