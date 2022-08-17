const Sidebar = [
  {
    id: "menu-1",
    title: "insights",
    subMenus: ["Dashboard"],
  },
  {
    id: "menu-2",
    title: "realm management",
    subMenus: ["Tenants", "Accounts", "Account Pools", "Licenses", "Services"],
  },
  {
    id: "menu-3",
    title: "other",
    subMenus: ["Notifications", "Settings", "Billing", "Ensemble"],
  },
];

return (
  // ROOT STACK START
  VStack({ alignment: cTopLeading })(
    // LOGO Stack START
    HStack({ spacing: 20 })(
      Icon(IconLibrary.Code).size(45),
      Text("BPM GENESIS").fontSize("16px").marginTop("10px")
    )
      .height(100)
      .width("25%")
      .backgroundColor("#2B3873")
      .fontWeight(500)
      .paddingLeft("15px")
      .paddingTop("45px")
      .paddingBottom("50px")
      .paddingRight("40px"),
    // LOGO END

    // MENU Stack
    Sidebar.map((item) =>
      VStack({ alignment: cTopLeading, spacing: 20 })(
        Text(item.title)
          .textTransform("uppercase")
          .fontSize("16px")
          .paddingLeft("15px"),

        item.subMenus.map((i) =>
          VStack({ alignment: cTopLeading, spacing: 20 })(
            Text(i).paddingLeft("30px").paddingTop("10px").marginBottom("10px")
          ).background({ hover: "#cfd4c5" })
        )
      )
        .width("25%")
        .height("auto")
        .paddingTop("30px")
        .paddingBottom("30px")
        .backgroundColor("#2B3873")
        .fontSize("16px")
        .borderBottom("1px solid gray")
    )
  )
    .foregroundColor("#FFF")
    .fontFamily("Roboto")
  // Menu Stack End

  // ROOT STACK END
);
