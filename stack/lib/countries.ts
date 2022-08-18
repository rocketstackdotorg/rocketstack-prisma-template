const countries = [
  { code: 'AD', label: 'Andorra', phone: '376', postCodes: /A[0-9][0-9]{3}/ },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374', postCodes: /(37)?[0-9]{4}/ },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  {
    code: 'AR',
    label: 'Argentina',
    phone: '54'
    // postCodes: /([A-HJ-NP-Z])?[0-9]{4}([A-Z]{3})?/
  },
  { code: 'AS', label: 'American Samoa', phone: '1-684', postCodes: /96799/ },
  { code: 'AT', label: 'Austria', phone: '43', postCodes: /[0-9]{4}/ },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
    postCodes: /[0-9]{4}/
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  {
    code: 'AX',
    label: 'Alland Islands',
    phone: '358',
    postCodes: /22[0-9]{3}/
  },
  { code: 'AZ', label: 'Azerbaijan', phone: '994', postCodes: /[0-9]{4}/ },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
    postCodes: /[0-9]{5}/
  },
  {
    code: 'BB',
    label: 'Barbados',
    phone: '1-246'
    //  postCodes: /(BB[0-9]{5})?/
  },
  { code: 'BD', label: 'Bangladesh', phone: '880', postCodes: /[0-9]{4}/ },
  { code: 'BE', label: 'Belgium', phone: '32', postCodes: /[0-9]{4}/ },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359', postCodes: /[0-9]{4}/ },
  {
    code: 'BH',
    label: 'Bahrain',
    phone: '973'
    // postCodes: /((1[0-2]|[2-9])[0-9]{2})?/
  },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  {
    code: 'BM',
    label: 'Bermuda',
    phone: '1-441',
    postCodes: /[A-Z]{2}[ ]?[A-Z0-9]{2}/
  },
  {
    code: 'BN',
    label: 'Brunei Darussalam',
    phone: '673',
    postCodes: /[A-Z]{2}[ ]?[0-9]{4}/
  },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  {
    code: 'BR',
    label: 'Brazil',
    phone: '55',
    postCodes: /[0-9]{5}[-]?[0-9]{3}/
  },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375', postCodes: /[0-9]{6}/ },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
    // eslint-disable-next-line max-len
    postCodes: /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z]d/
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
    postCodes: /6799/
  },
  { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
  { code: 'CF', label: 'Central African Republic', phone: '236' },
  { code: 'CG', label: 'Congo, Republic of the', phone: '242' },
  { code: 'CH', label: 'Switzerland', phone: '41', postCodes: /[0-9]{4}/ },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682', postCodes: /[0-9]{4}/ },
  { code: 'CL', label: 'Chile', phone: '56', postCodes: /[0-9]{7}/ },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86', postCodes: /[0-9]{6}/ },
  { code: 'CO', label: 'Colombia', phone: '57' },
  {
    code: 'CR',
    label: 'Costa Rica',
    phone: '506',
    postCodes: /[0-9]{4,5}|[0-9]{3}-[0-9]{4}/
  },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238', postCodes: /[0-9]{4}/ },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61', postCodes: /6798/ },
  { code: 'CY', label: 'Cyprus', phone: '357', postCodes: /[0-9]{4}/ },
  {
    code: 'CZ',
    label: 'Czech Republic',
    phone: '420',
    postCodes: /[0-9]{3}[ ]?[0-9]{2}/
  },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
    postCodes: /[0-9]{5}/
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45', postCodes: /[0-9]{4}/ },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
    postCodes: /[0-9]{5}/
  },
  { code: 'DZ', label: 'Algeria', phone: '213', postCodes: /[0-9]{5}/ },
  {
    code: 'EC',
    label: 'Ecuador',
    phone: '593'
    // postCodes: /([A-Z][0-9]{4}[A-Z]|(?:[A-Z]{2})?[0-9]{6})?/
  },
  { code: 'EE', label: 'Estonia', phone: '372', postCodes: /[0-9]{5}/ },
  { code: 'EG', label: 'Egypt', phone: '20', postCodes: /[0-9]{5}/ },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34', postCodes: /[0-9]{5}/ },
  { code: 'ET', label: 'Ethiopia', phone: '251', postCodes: /[0-9]{4}/ },
  { code: 'FI', label: 'Finland', phone: '358', postCodes: /[0-9]{5}/ },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
    postCodes: /FIQQ 1ZZ/
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691'
    // postCodes: /(9694[1-4])([ -][0-9]{4})?/
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298', postCodes: /[0-9]{3}/ },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
    postCodes: /[0-9]{2}[ ]?[0-9]{3}/
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  {
    code: 'GB',
    label: 'United Kingdom',
    phone: '44',
    // eslint-disable-next-line max-len
    postCodes: /GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)([0-9][A-Z]?[ ]?[0-9][ABD-HJLN-UW-Z]{2}))|BFPO[ ]?[0-9]{1,4}/
  },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995', postCodes: /[0-9]{4}/ },
  {
    code: 'GF',
    label: 'French Guiana',
    phone: '594',
    postCodes: /9[78]3[0-9]{2}/
  },
  {
    code: 'GG',
    label: 'Guernsey',
    phone: '44',
    postCodes: /GY[0-9][A-Z]?[ ]?[0-9][ABD-HJLN-UW-Z]{2}/
  },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299', postCodes: /39[0-9]{2}/ },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224', postCodes: /[0-9]{3}/ },
  {
    code: 'GP',
    label: 'Guadeloupe',
    phone: '590',
    postCodes: /9[78][01][0-9]{2}/
  },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  {
    code: 'GR',
    label: 'Greece',
    phone: '30',
    postCodes: /[0-9]{3}[ ]?[0-9]{2}/
  },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
    postCodes: /SIQQ 1ZZ/
  },
  { code: 'GT', label: 'Guatemala', phone: '502', postCodes: /[0-9]{5}/ },
  {
    code: 'GU',
    label: 'Guam',
    phone: '1-671'
    // postCodes: /969[123]d([ -][0-9]{4})?/
  },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245', postCodes: /[0-9]{4}/ },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
    postCodes: /[0-9]{4}/
  },
  {
    code: 'HN',
    label: 'Honduras',
    phone: '504'
    // postCodes: /(?:[0-9]{5})?/
  },
  { code: 'HR', label: 'Croatia', phone: '385', postCodes: /[0-9]{5}/ },
  { code: 'HT', label: 'Haiti', phone: '509', postCodes: /[0-9]{4}/ },
  { code: 'HU', label: 'Hungary', phone: '36', postCodes: /[0-9]{4}/ },
  { code: 'ID', label: 'Indonesia', phone: '62', postCodes: /[0-9]{5}/ },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972', postCodes: /[0-9]{5}/ },
  {
    code: 'IM',
    label: 'Isle of Man',
    phone: '44',
    postCodes: /IM[0-9][A-Z]?[ ]?[0-9][ABD-HJLN-UW-Z]{2}/
  },
  { code: 'IN', label: 'India', phone: '91', postCodes: /[0-9]{6}/ },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
    postCodes: /BBND 1ZZ/
  },
  { code: 'IQ', label: 'Iraq', phone: '964', postCodes: /[0-9]{5}/ },
  { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },
  { code: 'IS', label: 'Iceland', phone: '354', postCodes: /[0-9]{3}/ },
  { code: 'IT', label: 'Italy', phone: '39', postCodes: /[0-9]{5}/ },
  {
    code: 'JE',
    label: 'Jersey',
    phone: '44',
    postCodes: /JE[0-9][A-Z]?[ ]?[0-9][ABD-HJLN-UW-Z]{2}/
  },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962', postCodes: /[0-9]{5}/ },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
    postCodes: /[0-9]{3}-[0-9]{4}/
  },
  { code: 'KE', label: 'Kenya', phone: '254', postCodes: /[0-9]{5}/ },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996', postCodes: /[0-9]{6}/ },
  { code: 'KH', label: 'Cambodia', phone: '855', postCodes: /[0-9]{5}/ },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },
  { code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
  {
    code: 'KR',
    label: 'Korea, Republic of',
    phone: '82',
    postCodes: /[0-9]{3}[-][0-9]{3}/
  },
  { code: 'KW', label: 'Kuwait', phone: '965', postCodes: /[0-9]{5}/ },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7', postCodes: /[0-9]{6}/ },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
    postCodes: /[0-9]{5}/
  },
  {
    code: 'LB',
    label: 'Lebanon',
    phone: '961'
    // postCodes: /([0-9]{4}([ ]?[0-9]{4})?)?/
  },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  {
    code: 'LI',
    label: 'Liechtenstein',
    phone: '423',
    postCodes: /(948[5-9])|(949[0-7])/
  },
  { code: 'LK', label: 'Sri Lanka', phone: '94', postCodes: /[0-9]{5}/ },
  { code: 'LR', label: 'Liberia', phone: '231', postCodes: /[0-9]{4}/ },
  { code: 'LS', label: 'Lesotho', phone: '266', postCodes: /[0-9]{3}/ },
  { code: 'LT', label: 'Lithuania', phone: '370', postCodes: /[0-9]{5}/ },
  { code: 'LU', label: 'Luxembourg', phone: '352', postCodes: /[0-9]{4}/ },
  { code: 'LV', label: 'Latvia', phone: '371', postCodes: /[0-9]{4}/ },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212', postCodes: /[0-9]{5}/ },
  { code: 'MC', label: 'Monaco', phone: '377', postCodes: /980[0-9]{2}/ },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
    postCodes: /[0-9]{4}/
  },
  { code: 'ME', label: 'Montenegro', phone: '382', postCodes: /8[0-9]{4}/ },
  { code: 'MF', label: 'Saint Martin (French part)', phone: '590' },
  { code: 'MG', label: 'Madagascar', phone: '261', postCodes: /[0-9]{3}/ },
  {
    code: 'MH',
    label: 'Marshall Islands',
    phone: '692'
    // postCodes: /969[67]d([ -][0-9]{4})?/
  },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
    postCodes: /[0-9]{4}/
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976', postCodes: /[0-9]{6}/ },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670'
    // postCodes: /9695[012]([ -][0-9]{4})?/
  },
  {
    code: 'MQ',
    label: 'Martinique',
    phone: '596',
    postCodes: /9[78]2[0-9]{2}/
  },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  {
    code: 'MT',
    label: 'Malta',
    phone: '356',
    postCodes: /[A-Z]{3}[ ]?[0-9]{2,4}/
  },
  {
    code: 'MU',
    label: 'Mauritius',
    phone: '230'
    // postCodes: /([0-9]{3}[A-Z]{2}[0-9]{3})?/
  },
  { code: 'MV', label: 'Maldives', phone: '960', postCodes: /[0-9]{5}/ },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52', postCodes: /[0-9]{5}/ },
  { code: 'MY', label: 'Malaysia', phone: '60', postCodes: /[0-9]{5}/ },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  {
    code: 'NC',
    label: 'New Caledonia',
    phone: '687',
    postCodes: /988[0-9]{2}/
  },
  { code: 'NE', label: 'Niger', phone: '227', postCodes: /[0-9]{4}/ },
  { code: 'NF', label: 'Norfolk Island', phone: '672', postCodes: /2899/ },
  {
    code: 'NG',
    label: 'Nigeria',
    phone: '234'
    // postCodes: /([0-9]{6})?/
  },
  {
    code: 'NI',
    label: 'Nicaragua',
    phone: '505'
    // postCodes: /(([0-9]{4}-)?[0-9]{3}-[0-9]{3}(-[0-9]{1})?)?/
  },
  {
    code: 'NL',
    label: 'Netherlands',
    phone: '31',
    postCodes: /[0-9]{4}[ ]?[A-Z]{2}/
  },
  { code: 'NO', label: 'Norway', phone: '47', postCodes: /[0-9]{4}/ },
  { code: 'NP', label: 'Nepal', phone: '977', postCodes: /[0-9]{5}/ },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64', postCodes: /[0-9]{4}/ },
  { code: 'OM', label: 'Oman', phone: '968', postCodes: /(PC )?[0-9]{3}/ },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  {
    code: 'PF',
    label: 'French Polynesia',
    phone: '689',
    postCodes: /987[0-9]{2}/
  },
  {
    code: 'PG',
    label: 'Papua New Guinea',
    phone: '675',
    postCodes: /[0-9]{3}/
  },
  { code: 'PH', label: 'Philippines', phone: '63', postCodes: /[0-9]{4}/ },
  { code: 'PK', label: 'Pakistan', phone: '92', postCodes: /[0-9]{5}/ },
  { code: 'PL', label: 'Poland', phone: '48', postCodes: /[0-9]{2}-[0-9]{3}/ },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
    postCodes: /9[78]5[0-9]{2}/
  },
  { code: 'PN', label: 'Pitcairn', phone: '870', postCodes: /PCRN 1ZZ/ },
  {
    code: 'PR',
    label: 'Puerto Rico',
    phone: '1'
    // postCodes: /00[679][0-9]{2}([ -][0-9]{4})?/
  },
  { code: 'PS', label: 'Palestine, State of', phone: '970' },
  {
    code: 'PT',
    label: 'Portugal',
    phone: '351'
    // postCodes: /[0-9]{4}([-][0-9]{3})?/
  },
  { code: 'PW', label: 'Palau', phone: '680', postCodes: /96940/ },
  { code: 'PY', label: 'Paraguay', phone: '595', postCodes: /[0-9]{4}/ },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262', postCodes: /9[78]4[0-9]{2}/ },
  { code: 'RO', label: 'Romania', phone: '40', postCodes: /[0-9]{6}/ },
  { code: 'RS', label: 'Serbia', phone: '381', postCodes: /[0-9]{6}/ },
  {
    code: 'RU',
    label: 'Russian Federation',
    phone: '7',
    postCodes: /[0-9]{6}/
  },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966', postCodes: /[0-9]{5}/ },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  {
    code: 'SE',
    label: 'Sweden',
    phone: '46',
    postCodes: /[0-9]{3}[ ]?[0-9]{2}/
  },
  { code: 'SG', label: 'Singapore', phone: '65', postCodes: /[0-9]{6}/ },
  {
    code: 'SH',
    label: 'Saint Helena',
    phone: '290',
    postCodes: /(ASCN|STHL) 1ZZ/
  },
  { code: 'SI', label: 'Slovenia', phone: '386', postCodes: /[0-9]{4}/ },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
    postCodes: /[0-9]{4}/
  },
  {
    code: 'SK',
    label: 'Slovakia',
    phone: '421',
    postCodes: /[0-9]{3}[ ]?[0-9]{2}/
  },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378', postCodes: /4789d/ },
  { code: 'SN', label: 'Senegal', phone: '221', postCodes: /[0-9]{5}/ },
  { code: 'SO', label: 'Somalia', phone: '252', postCodes: /[0-9]{5}/ },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  { code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },
  { code: 'SY', label: 'Syrian Arab Republic', phone: '963' },
  { code: 'SZ', label: 'Swaziland', phone: '268', postCodes: /[HLMS][0-9]{3}/ },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
    postCodes: /TKCA 1ZZ/
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  { code: 'TF', label: 'French Southern Territories', phone: '262' },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66', postCodes: /[0-9]{5}/ },
  { code: 'TJ', label: 'Tajikistan', phone: '992', postCodes: /[0-9]{6}/ },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993', postCodes: /[0-9]{6}/ },
  { code: 'TN', label: 'Tunisia', phone: '216', postCodes: /[0-9]{4}/ },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90', postCodes: /[0-9]{5}/ },
  { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Province of China',
    phone: '886'
    // postCodes: /[0-9]{3}([0-9]{2})?/
  },
  { code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },
  { code: 'UA', label: 'Ukraine', phone: '380', postCodes: /[0-9]{5}/ },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true
    // postCodes: /[0-9]{5}([ -][0-9]{4})?/
  },
  { code: 'UY', label: 'Uruguay', phone: '598', postCodes: /[0-9]{5}/ },
  { code: 'UZ', label: 'Uzbekistan', phone: '998', postCodes: /[0-9]{6}/ },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
    postCodes: /00120/
  },
  { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },
  { code: 'VE', label: 'Venezuela', phone: '58', postCodes: /[0-9]{4}/ },
  { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340'
    // postCodes: /008(([0-4]d)|(5[01]))([ -][0-9]{4})?/
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  {
    code: 'WF',
    label: 'Wallis and Futuna',
    phone: '681',
    postCodes: /986[0-9]{2}/
  },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383', postCodes: /[0-9]{5}/ },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262', postCodes: /976[0-9]{2}/ },
  { code: 'ZA', label: 'South Africa', phone: '27', postCodes: /[0-9]{4}/ },
  { code: 'ZM', label: 'Zambia', phone: '260', postCodes: /[0-9]{5}/ },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' }
]

export default countries

const countryToFlag: (c: string) => string | null = isoCode => {
  if (isoCode !== null) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
        ?.toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
      : isoCode
  }
  return null
}

const flags = countries.map(country => countryToFlag(country.code))

const countriesSuggestions: (
  i: string
) => Array<{ flag: string | null, query: string, withTag: string }> = input =>
  countries
    .filter(country =>
      country.label.toLowerCase().startsWith(input.toLowerCase())
    )
    .map(country => ({
      flag: countryToFlag(country.code),
      query: country.label,
      withTag: country.label.replace(input, `<em>${input}</em>`)
    }))

export { flags, countryToFlag, countriesSuggestions }
