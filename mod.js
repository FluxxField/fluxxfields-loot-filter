const COLORS = {
  Beige: '$FontColorBeige',
  Black: '$FontColorBlack',
  Blue: '$FontColorBlue',
  CurrencyGold: '$FontColorCurrencyGold',
  DarkGold: '$FontColorDarkGold',
  DarkGrayBlue: '$FontColorDarkGrayBlue',
  DarkGrayGold: '$FontColorDarkGrayGold',
  DarkGreen: '$FontColorDarkGreen',
  Gold: '$FontColorGold',
  GoldYellow: '$FontColorGoldYellow',
  Gray: '$FontColorGray',
  Green: '$FontColorGreen',
  LightBlue: '$FontColorLightBlue',
  LightGold: '$FontColorLightGold',
  LightGray: '$FontColorLightGray',
  LightPurple: '$FontColorLightPurple',
  LightRed: '$FontColorLightRed',
  LightTeal: '$FontColorLightTeal',
  LightYellow: '$FontColorLightYellow',
  Orange: '$FontColorOrange',
  PartyGreen: '$FontColorPartyGreen',
  PartyOrange: '$FontColorPartyOrange',
  Red: '$FontColorRed',
  Transparent: '$FontColorTransparent',
  VeryLightGray: '$FontColorVeryLightGray',
  White: '$FontColorWhite',
  Yellow: '$FontColorYellow'
};

const VARIABLES = [
  'DefaultColor',
  'QuestColor',
  'RareColor',
  'CraftedColor',
  'TemperedColor',
  'MagicColor',
  'SetColor',
  'UniqueColor',
  'SocketedColor',
  'EtherealColor',
  'HealthPotionColor',
  'ManaPotionColor',
  'RejuvPotionColor',
  'GoldColor',
  'RuneColor',
  'EventItemsColors'
]

const PROFILE_HD_FILE_PATH = 'global\\ui\\layouts\\_profilehd.json';
const PROFILE_LV_FILE_PATH = 'global\\ui\\layouts\\_profilelv.json';
const CONTROLLER_PROFILE_LV_FILE_PATH = 'global\\ui\\layouts\\controller\\_profilelv.json';

function changeProfileColors(...profiles) {
  profiles.forEach(profile => {
    VARIABLES.forEach(variable => {
      const color = COLORS[config[variable]];

      if (!color) {
        profile.TooltipStyle[variable] = color;
      }
    })
  });
}

const profileHD = D2RMM.readJson(PROFILE_HD_FILE_PATH);
const profileLV = D2RMM.readJson(PROFILE_LV_FILE_PATH);
const controllerProfileLV = D2RMM.readJson(CONTROLLER_PROFILE_LV_FILE_PATH);

changeProfileColors([profileHD, profileLV, controllerProfileLV]);

D2RMM.writeJson(PROFILE_HD_FILE_PATH, profileHD);
D2RMM.writeJson(PROFILE_LV_FILE_PATH, profileLV);
D2RMM.writeJson(CONTROLLER_PROFILE_LV_FILE_PATH, controllerProfileLV);

