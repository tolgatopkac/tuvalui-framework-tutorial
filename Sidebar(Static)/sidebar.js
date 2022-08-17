return VStack({ alignment: cTopLeading })(
  // LOGO STACK START

  HStack({ spacing: 20 })(
    Icon(IconLibrary.Code).size(45),
    Text("BPM GENESIS").fontSize("15px").marginTop("10px").fontWeight(500)
  )
    .height(100)
    .width("25%")
    .background("#2B3873")
    .paddingLeft("15px")
    .paddingTop("45px")
    .paddingBottom("70px")
    .paddingRight("39px"),
  // LOGO STACK END

  // INSIGHTS STACK START
  VStack({ alignment: cTopLeading, spacing: 20 })(
    Text("insights")
      .textTransform("uppercase")
      .paddingLeft("15px")
      .fontSize("18px"),
    Text("Dashboard")
      .paddingLeft("30px")
      .fontSize("16px")
      .background({ hover: "red" })
  )
    .height("auto")
    .width("25%")
    .borderBottom("1px solid #fff")
    .backgroundColor("#2B3873")
    .borderBottom("1px solid #fff")
    .paddingBottom("35px"),
  // INSIGHT STACK END

  // REAL MANAGEMENT START
  VStack({ alignment: cTopLeading })(
    Text("real management")
      .paddingTop("24px")
      .textTransform("uppercase")
      .paddingLeft("15px")
      .fontSize("18px"),

    VStack({ alignment: cLeading, spacing: 10 })(
      Text("Tenants"),
      Text("Accounts"),
      Text("Account Pools"),
      Text("Licenses"),
      Text("Services")
    )
      .paddingTop("15px")
      .paddingLeft("30px")
      .fontSize("16px")
      .cursor("pointer")
  )
    .borderBottom("1px solid #fff")
    .backgroundColor("#2B3873")
    .width("25%")
    .height("auto")
    .paddingBottom("50px"),
  // REAL MANAGEMENT END

  // OTHER START
  VStack({ alignment: cLeading })(
    Text("other")
      .textTransform("uppercase")
      .paddingLeft("15px")
      .paddingTop("24px")
      .fontSize("18px"),

    VStack({ alignment: cLeading, spacing: 10 })(
      Text("Notifications"),
      Text("Settings"),
      Text("Billing"),
      Text("Ensemble")
    )
      .paddingTop("15px")
      .paddingLeft("30px")
      .paddingBottom("60px")
      .fontSize("16px")
      .cursor("pointer").hover
  )
    .borderBottom("1px solid #fff")
    .backgroundColor("#2B3873")
    .width("25%")
    .height("auto")
  // OTHER END
)
  .foregroundColor("#fff")
  .fontFamily("Roboto")
  .width("100%");
