export const NAV_LINKS = [
  {
    label: "Home",
    key: "home",
    path: "/",
  },
  {
    label: "Saved Locations",
    key: "locations",
    path: "/locations",
  },
  {
    label: "Events",
    key: "events",
    path: "/events",
  },
  {
    label: "Community",
    key: "community",
    path: "/community",
  },
];

export const USER_LINKS = [
  {
    label: "View Profile",
    key: "profile",
    path: "/profile",
    borderTop: false,
  },
  {
    label: "Account Settings",
    key: "account",
    path: "/settings",
    borderTop: false,
  },
  {
    label: "Logout",
    key: "logout",
    path: "/logout",
    borderTop: true,
  },
];

export const NOTIFICATION_DATA = {
  activity: [
    {
      message: "You are currently at the Autonomy Hall",
      id: 1,
      timeStamp: new Date().toISOString(),
    },
    {
      message: "You have to be at the Lecture Hall for your 10am lecture",
      id: 2,
      timeStamp: new Date().toDateString(),
    },
  ],

  highlights: [
    {
      message:
        "Important new, products updates, and milestones associated with your account will appear here.",
      id: 1,
      timeStamp: false,
    },
  ],
};
