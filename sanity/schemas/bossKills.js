export default {
  title: "Boss Kills",
  name: "bossKills",
  type: "document",

  fields: [
    {
      title: "Boss Order",
      name: "bossOrder",
      type: "number"
    },
    {
      title: "Boss Name",
      name: "bossName",
      type: "string"
    },
    {
      title: "Boss Kill Image",
      name: "bossKillImage",
      type: "image",
    },
    {
      title: "Raid Instance",
      name: "raidInstance",
      type: "string"
    }
  ],
  orderings: [
    {
      title: "Boss Order",
      name: "bossOrder",
      by: [
        {field: "bossOrder", direction: "asc"}
      ]
    }
  ]
}
