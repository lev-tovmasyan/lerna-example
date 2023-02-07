import { useDispatch, useSelector } from 'react-redux';
import ModeSwitcherContainer from '../../../../components/ModeSwitcherContainer/ModeSwitcherContainer';
import { selectTheme } from '../../../../redux/reducers/configs/configs.slice';
import { closePopup } from '../../../../redux/reducers/popups/popups.slice';
import { ODDS_FORMATS_CONFIGS } from '../../../providers/OddFormatProvider/constants/oddFormat.constants';
import { useOddFormat } from '../../../providers/OddFormatProvider/OddFormatProvider';
import {
  Body__styled,
  BodyInner__styled,
  Close__styled,
  Select__styled,
  SelectBody__styled,
  SelectHead__styled,
  SelectItem__styled,
  SelectRatio__styled,
  SelectSquare__styled,
  SelectSquareInner__styled,
  SelectText__styled,
  Theme__styled,
  ThemeCheckbox__styled,
  ThemeTitle__styled,
  Title__styled,
} from './SettingsPopup.styled';

const SettingPopup = ({ popupId }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const { format, toggleFormat } = useOddFormat();

  const isLightExist = theme !== 'purple';

  const onClose = () => {
    dispatch(closePopup(popupId));
  };

  return (
    <Body__styled onClick={onClose}>
      <BodyInner__styled onClick={e => e.stopPropagation()}>
        <Title__styled>Settings</Title__styled>
        <Close__styled onClick={onClose}>
          <svg>
            <use xlinkHref={'#close'} />
          </svg>
        </Close__styled>
        {isLightExist && (
          <Theme__styled>
            <ThemeTitle__styled>Dark</ThemeTitle__styled>
            <ThemeCheckbox__styled>
              <ModeSwitcherContainer />
            </ThemeCheckbox__styled>
          </Theme__styled>
        )}
        <Select__styled>
          <SelectHead__styled>Odds Format</SelectHead__styled>
          <SelectBody__styled>
            {ODDS_FORMATS_CONFIGS.map(item => (
              <SelectItem__styled
                key={item.value}
                onClick={() => toggleFormat(item.value)}>
                <SelectText__styled>{item.name}</SelectText__styled>
                <SelectRatio__styled>{item.view}</SelectRatio__styled>
                <SelectSquare__styled>
                  {format === item.value && <SelectSquareInner__styled />}
                </SelectSquare__styled>
              </SelectItem__styled>
            ))}
          </SelectBody__styled>
        </Select__styled>
      </BodyInner__styled>
    </Body__styled>
  );
};

export default SettingPopup;
