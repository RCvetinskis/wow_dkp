export const Class = {
  WARRIOR: "WARRIOR",
  PALADIN: "PALADIN",
  HUNTER: "HUNTER",
  ROGUE: "ROGUE",
  PRIEST: "PRIEST",
  DEATH_KNIGHT: "DEATH_KNIGHT",
  SHAMAN: "SHAMAN",
  MAGE: "MAGE",
  WARLOCK: "WARLOCK",
  DRUID: "DRUID",
} as const;

export type Class = (typeof Class)[keyof typeof Class];

export const Specialization = {
  ARMS: "ARMS",
  FURY: "FURY",
  PROTECTION_WARRIOR: "PROTECTION_WARRIOR",

  HOLY_PALADIN: "HOLY_PALADIN",
  PROTECTION_PALADIN: "PROTECTION_PALADIN",
  RETRIBUTION: "RETRIBUTION",

  BEAST_MASTERY: "BEAST_MASTERY",
  MARKSMANSHIP: "MARKSMANSHIP",
  SURVIVAL: "SURVIVAL",

  ASSASSINATION: "ASSASSINATION",
  COMBAT: "COMBAT",
  SUBTLETY: "SUBTLETY",

  DISCIPLINE: "DISCIPLINE",
  HOLY_PRIEST: "HOLY_PRIEST",
  SHADOW: "SHADOW",

  BLOOD: "BLOOD",
  FROST_DK: "FROST_DK",
  UNHOLY: "UNHOLY",

  ELEMENTAL: "ELEMENTAL",
  ENHANCEMENT: "ENHANCEMENT",
  RESTORATION_SHAMAN: "RESTORATION_SHAMAN",

  ARCANE: "ARCANE",
  FIRE: "FIRE",
  FROST_MAGE: "FROST_MAGE",

  AFFLICTION: "AFFLICTION",
  DEMONOLOGY: "DEMONOLOGY",
  DESTRUCTION: "DESTRUCTION",

  BALANCE: "BALANCE",
  FERAL_DPS: "FERAL_DPS",
  FERAL_TANK: "FERAL_TANK",
  RESTORATION_DRUID: "RESTORATION_DRUID",
} as const;

export type Specialization =
  (typeof Specialization)[keyof typeof Specialization];

export type SpecializationItem = {
  id: number;
  enum: Specialization;
  name: string;
};

export type ClassItem = {
  id: number;
  enum: Class;
  name: string;
  specializations: SpecializationItem[];
};
