import prisma from "../src/db";

const guildData = [
  { name: "Lucidity", faction: "ALLIANCE" },
  { name: "HordeKings", faction: "HORDE" },
  { name: "Aliance", faction: "ALLIANCE" },
] as const;

async function main() {
  console.log("Start seeding...");

  // clean DB
  await prisma.character.deleteMany();
  await prisma.guild.deleteMany();

  // 1. create guilds first
  const guilds = [];

  for (const g of guildData) {
    const guild = await prisma.guild.create({
      data: g,
    });

    guilds.push(guild);
    console.log(`Created guild: ${guild.name} (${guild.id})`);
  }

  // 2. create characters linked to guilds
  const characters = [
    {
      name: "DarkForeBitt",
      faction: "ALLIANCE",
      guildId: guilds[0].id,
      isMain: true,
    },
    {
      name: "JonasMain",
      faction: "ALLIANCE",
      guildId: guilds[0].id,
      isMain: true,
    },
    {
      name: "JonasAlt1",
      faction: "ALLIANCE",
      guildId: guilds[0].id,
      isMain: false,
      mainId: 2,
    },
    {
      name: "Algis",
      faction: "ALLIANCE",
      guildId: guilds[1].id,
      isMain: true,
    },
  ];

  for (const c of characters) {
    const char = await prisma.character.create({
      data: c,
    });

    console.log(`Created character: ${char.name}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
