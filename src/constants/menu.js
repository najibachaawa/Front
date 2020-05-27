const data = [{
    id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: "/user/app/dashboards",
    subs: [{
        icon: "simple-icon-briefcase",
        label: "menu.default",
        to: "/user/app/dashboards/default"
      },
      {
        icon: "simple-icon-pie-chart",
        label: "menu.analytics",
        to: "/user/app/dashboards/analytics"
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "menu.ecommerce",
        to: "/user/app/dashboards/ecommerce"
      },
      {
        icon: "simple-icon-doc",
        label: "menu.content",
        to: "/user/app/dashboards/content"
      }
    ]
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/user/app/pages",
    subs: [{
        id: "pages-authorization",
        label: "menu.authorization",
        to: "/user",
        subs: [{
            icon: "simple-icon-user-following",
            label: "menu.login",
            to: "/user/login",
            newWindow: true
          },
          {
            icon: "simple-icon-user-follow",
            label: "menu.register",
            to: "/user/register",
            newWindow: true
          },
          {
            icon: "simple-icon-user-following",
            label: "menu.forgot-password",
            to: "/user/forgot-password",
            newWindow: true
          },
          {
            icon: "simple-icon-user-unfollow",
            label: "menu.reset-password",
            to: "/user/reset-password",
            newWindow: true
          }
        ]
      },
      {
        id: "pages-product",
        label: "menu.product",
        to: "/user/app/pages/product",
        subs: [{
            icon: "simple-icon-credit-card",
            label: "menu.data-list",
            to: "/user/app/pages/product/data-list"
          },
          {
            icon: "simple-icon-list",
            label: "menu.thumb-list",
            to: "/user/app/pages/product/thumb-list"
          },
          {
            icon: "simple-icon-grid",
            label: "menu.image-list",
            to: "/user/app/pages/product/image-list"
          },
          {
            icon: "simple-icon-picture",
            label: "menu.details",
            to: "/user/app/pages/product/details"
          },
          {
            icon: "simple-icon-book-open",
            label: "menu.details-alt",
            to: "/user/app/pages/product/details-alt"
          },
        ]
      },
      {
        id: "pages-profile",
        label: "menu.profile",
        to: "/user/app/pages/profile",
        subs: [{
            icon: "simple-icon-share",
            label: "menu.social",
            to: "/user/app/pages/profile/social"
          },
          {
            icon: "simple-icon-link",
            label: "menu.portfolio",
            to: "/user/app/pages/profile/portfolio"
          },

        ]
      },
      {
        id: "pages-blog",
        label: "menu.blog",
        to: "/user/app/pages/blog",
        subs: [{
            icon: "simple-icon-share",
            label: "menu.blog-list",
            to: "/user/app/pages/blog/blog-list"
          },
          {
            icon: "simple-icon-link",
            label: "menu.blog-detail",
            to: "/user/app/pages/blog/blog-detail"
          },

        ]
      },
      {
        id: "pages-miscellaneous",
        label: "menu.miscellaneous",
        to: "/user/app/pages/miscellaneous",
        subs: [{
            icon: "simple-icon-question",
            label: "menu.faq",
            to: "/user/app/pages/miscellaneous/faq"
          },
          {
            icon: "simple-icon-graduation",
            label: "menu.knowledge-base",
            to: "/user/app/pages/miscellaneous/knowledge-base"
          },

          {
            icon: "simple-icon-diamond",
            label: "menu.prices",
            to: "/user/app/pages/miscellaneous/prices"
          },
          {
            icon: "simple-icon-magnifier",
            label: "menu.search",
            to: "/user/app/pages/miscellaneous/search"
          },
          {
            icon: "simple-icon-envelope-open",
            label: "menu.mailing",
            to: "/user/app/pages/miscellaneous/mailing"
          },
          {
            icon: "simple-icon-bag",
            label: "menu.invoice",
            to: "/user/app/pages/miscellaneous/invoice"
          },

          {
            icon: "simple-icon-exclamation",
            label: "menu.error",
            to: "/error",
            newWindow: true
          }
        ]
      },
    ]
  },
  {
    id: "applications",
    icon: "iconsminds-air-balloon-1",
    label: "menu.applications",
    to: "/user/app/user/applications",
    subs: [{
        icon: "simple-icon-check",
        label: "menu.todo",
        to: "/user/app/user/applications/todo"
      },
      {
        icon: "simple-icon-calculator",
        label: "menu.survey",
        to: "/user/app/user/applications/survey"
      },
      {
        icon: "simple-icon-bubbles",
        label: "menu.chat",
        to: "/user/app/user/applications/chat"
      }
    ]
  },
  {
    id: "ui",
    icon: "iconsminds-pantone",
    label: "menu.ui",
    to: "/user/app/ui",
    subs: [

      {
        id: "ui-forms",
        label: "menu.forms",
        to: "/user/app/ui/forms",
        subs: [{
            icon: "simple-icon-notebook",
            label: "menu.layouts",
            to: "/user/app/ui/forms/layouts"
          },
          {
            icon: "simple-icon-puzzle",
            label: "menu.components",
            to: "/user/app/ui/forms/components"
          },
          {
            icon: "simple-icon-check",
            label: "menu.validations",
            to: "/user/app/ui/forms/validations"
          },
          {
            icon: "simple-icon-magic-wand",
            label: "menu.wizard",
            to: "/user/app/ui/forms/wizard"
          }
        ]
      },
      {
        id: "ui-components",
        label: "menu.components",
        to: "/user/app/ui/components",
        subs: [{
            icon: "simple-icon-bell",
            label: "menu.alerts",
            to: "/user/app/ui/components/alerts"
          },
          {
            icon: "simple-icon-badge",
            label: "menu.badges",
            to: "/user/app/ui/components/badges"
          },
          {
            icon: "simple-icon-control-play",
            label: "menu.buttons",
            to: "/user/app/ui/components/buttons"
          },
          {
            icon: "simple-icon-layers",
            label: "menu.cards",
            to: "/user/app/ui/components/cards"
          },
          {
            icon: "simple-icon-picture",
            label: "menu.carousel",
            to: "/user/app/ui/components/carousel"
          },
          {
            icon: "simple-icon-chart",
            label: "menu.charts",
            to: "/user/app/ui/components/charts"
          },
          {
            icon: "simple-icon-arrow-up",
            label: "menu.collapse",
            to: "/user/app/ui/components/collapse"
          },
          {
            icon: "simple-icon-arrow-down",
            label: "menu.dropdowns",
            to: "/user/app/ui/components/dropdowns"
          },
          {
            icon: "simple-icon-book-open",
            label: "menu.editors",
            to: "/user/app/ui/components/editors"
          },

          {
            icon: "simple-icon-star",
            label: "menu.icons",
            to: "/user/app/ui/components/icons"
          },
          {
            icon: "simple-icon-note",
            label: "menu.input-groups",
            to: "/user/app/ui/components/input-groups"
          },
          {
            icon: "simple-icon-screen-desktop",
            label: "menu.jumbotron",
            to: "/user/app/ui/components/jumbotron"
          },
          {
            icon: "simple-icon-map",
            label: "menu.maps",
            to: "/user/app/ui/components/maps"
          },
          {
            icon: "simple-icon-docs",
            label: "menu.modal",
            to: "/user/app/ui/components/modal"
          },
          {
            icon: "simple-icon-cursor",
            label: "menu.navigation",
            to: "/user/app/ui/components/navigation"
          },
          {
            icon: "simple-icon-pin",
            label: "menu.popover-tooltip",
            to: "/user/app/ui/components/popover-tooltip"
          },
          {
            icon: "simple-icon-shuffle",
            label: "menu.sortable",
            to: "/user/app/ui/components/sortable"
          },
          {
            icon: "simple-icon-grid",
            label: "menu.tables",
            to: "/user/app/ui/components/tables"
          }
        ]
      }
    ]
  },
  {
    id: "menu",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.menu",
    to: "/user/app/menu",
    subs: [{
        icon: "simple-icon-logout",
        label: "menu.types",
        to: "/user/app/menu/types"
      },
      {
        icon: "simple-icon-layers",
        label: "menu.levels",
        to: "/user/app/menu/levels",
        subs: [{
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-1",
            to: "/user/app/menu/levels/third-level-1"
          },
          {
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-2",
            to: "/user/app/menu/levels/third-level-2"
          },
          {
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-3",
            to: "/user/app/menu/levels/third-level-3"
          }
        ]
      }
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.blank-page",
    to: "/user/app/blank-page"
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow: true
  }
];
export default data;