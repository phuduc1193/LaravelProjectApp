function project(view) {
  return {
    path: "/projects",
    component: view("Layout.Layout"),
    redirect: "noredirect",
    name: "projects",
    meta: {
      title: "projects",
      icon: "fa fa-briefcase",
      scopes: ["admin"]
    },
    children: [
      {
        path: "list",
        component: view("Project.List"),
        name: "list",
        meta: {
          title: "list",
          icon: "fa fa-list-ul",
          scopes: ["admin"]
        }
      },
      {
        path: "create",
        component: view("Project.Create"),
        name: "create",
        meta: {
          title: "create",
          icon: "fa fa-pencil",
          scopes: ["admin"]
        }
      },
      {
        path: "view/:id",
        component: view("Project.View"),
        name: "view",
        hidden: true,
        meta: {
          title: "view",
          scopes: ["admin"]
        }
      },
      {
        path: "edit/:id",
        component: view("Project.Edit"),
        name: "edit",
        hidden: true,
        meta: {
          title: "edit",
          scopes: ["admin"]
        }
      }
    ]
  };
}

export default project;
