function profile(view) {
  return {
    path: "/profile",
    component: view("Layout.Layout"),
    redirect: "nonredirect",
    children: [
      {
        path: "",
        component: view("Profile.Index"),
        name: "profile",
        meta: {
          title: "profile",
          icon: "fa fa-user"
        }
      }
    ]
  };
}

export default profile;
