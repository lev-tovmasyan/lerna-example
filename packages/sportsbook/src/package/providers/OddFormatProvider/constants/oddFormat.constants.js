export const ODDS_FORMAT_TYPES = {
  DECIMAL: 'decimal',
  FRACTIAL: 'fractional',
  AMERICAN: 'moneyline',
  HONK_KONG: 'hongKong',
  MALAY: 'malay',
  INDONESIAN: 'indonesian',
};

const { DECIMAL, FRACTIAL, AMERICAN, HONK_KONG, MALAY, INDONESIAN } =
  ODDS_FORMAT_TYPES;

export const ODDS_FORMATS_CONFIGS = [
  { name: 'Decimal', value: DECIMAL, view: '2.5' },
  { name: 'Fractional', value: FRACTIAL, view: '3/2' },
  { name: 'American', value: AMERICAN, view: '150.00' },
  { name: 'Hong Kong', value: HONK_KONG, view: '1.50' },
  { name: 'Malay', value: MALAY, view: '-0.66' },
  { name: 'Indonesian', value: INDONESIAN, view: '1.50' },
];
