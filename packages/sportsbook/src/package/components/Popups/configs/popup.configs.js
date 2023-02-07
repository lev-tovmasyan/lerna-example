import LoginPopup from '../LoginPopup/LoginPopup';
import SettingPopup from '../SettingsPopup/SettingPopup';
import StatisticPopup from '../StatisticPopup/StatisticPopup';

export const POPUPS_IDS = {
  LOGIN: 1,
  SETTINGS: 2,
  STATISTIC: 3,
};
const { LOGIN, SETTINGS, STATISTIC } = POPUPS_IDS;

export const POPUPS_CONFIGS = {
  [LOGIN]: LoginPopup,
  [SETTINGS]: SettingPopup,
  [STATISTIC]: StatisticPopup,
};
