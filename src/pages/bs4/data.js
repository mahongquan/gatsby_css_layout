export const colourOptions = [
  { value: 'ocean', span: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', span: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', span: 'Purple', color: '#5243AA' },
  { value: 'red', span: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', span: 'Orange', color: '#FF8B00' },
  { value: 'yellow', span: 'Yellow', color: '#FFC400' },
  { value: 'green', span: 'Green', color: '#36B37E' },
  { value: 'forest', span: 'Forest', color: '#00875A' },
  { value: 'slate', span: 'Slate', color: '#253858' },
  { value: 'silver', span: 'Silver', color: '#666666' },
];

export const flavourOptions = [
  { value: 'vanilla', span: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', span: 'Chocolate', rating: 'good' },
  { value: 'strawberry', span: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', span: 'Salted Caramel', rating: 'crazy' },
];

export const stateOptions = [
  { value: 'AL', span: 'Alabama' },
  { value: 'AK', span: 'Alaska' },
  { value: 'AS', span: 'American Samoa' },
  { value: 'AZ', span: 'Arizona' },
  { value: 'AR', span: 'Arkansas' },
  { value: 'CA', span: 'California' },
  { value: 'CO', span: 'Colorado' },
  { value: 'CT', span: 'Connecticut' },
  { value: 'DE', span: 'Delaware' },
  { value: 'DC', span: 'District Of Columbia' },
  { value: 'FM', span: 'Federated States Of Micronesia' },
  { value: 'FL', span: 'Florida' },
  { value: 'GA', span: 'Georgia' },
  { value: 'GU', span: 'Guam' },
  { value: 'HI', span: 'Hawaii' },
  { value: 'ID', span: 'Idaho' },
  { value: 'IL', span: 'Illinois' },
  { value: 'IN', span: 'Indiana' },
  { value: 'IA', span: 'Iowa' },
  { value: 'KS', span: 'Kansas' },
  { value: 'KY', span: 'Kentucky' },
  { value: 'LA', span: 'Louisiana' },
  { value: 'ME', span: 'Maine' },
  { value: 'MH', span: 'Marshall Islands' },
  { value: 'MD', span: 'Maryland' },
  { value: 'MA', span: 'Massachusetts' },
  { value: 'MI', span: 'Michigan' },
  { value: 'MN', span: 'Minnesota' },
  { value: 'MS', span: 'Mississippi' },
  { value: 'MO', span: 'Missouri' },
  { value: 'MT', span: 'Montana' },
  { value: 'NE', span: 'Nebraska' },
  { value: 'NV', span: 'Nevada' },
  { value: 'NH', span: 'New Hampshire' },
  { value: 'NJ', span: 'New Jersey' },
  { value: 'NM', span: 'New Mexico' },
  { value: 'NY', span: 'New York' },
  { value: 'NC', span: 'North Carolina' },
  { value: 'ND', span: 'North Dakota' },
  { value: 'MP', span: 'Northern Mariana Islands' },
  { value: 'OH', span: 'Ohio' },
  { value: 'OK', span: 'Oklahoma' },
  { value: 'OR', span: 'Oregon' },
  { value: 'PW', span: 'Palau' },
  { value: 'PA', span: 'Pennsylvania' },
  { value: 'PR', span: 'Puerto Rico' },
  { value: 'RI', span: 'Rhode Island' },
  { value: 'SC', span: 'South Carolina' },
  { value: 'SD', span: 'South Dakota' },
  { value: 'TN', span: 'Tennessee' },
  { value: 'TX', span: 'Texas' },
  { value: 'UT', span: 'Utah' },
  { value: 'VT', span: 'Vermont' },
  { value: 'VI', span: 'Virgin Islands' },
  { value: 'VA', span: 'Virginia' },
  { value: 'WA', span: 'Washington' },
  { value: 'WV', span: 'West Virginia' },
  { value: 'WI', span: 'Wisconsin' },
  { value: 'WY', span: 'Wyoming' },
];

export const optionLength = [
  { value: 1, span: 'general' },
  {
    value: 2,
    span:
      'Evil is the moment when I lack the strength to be true to the Good that compels me.',
  },
  {
    value: 3,
    span:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const dogOptions = [
  { id: 1, span: 'Chihuahua' },
  { id: 2, span: 'Bulldog' },
  { id: 3, span: 'Dachshund' },
  { id: 4, span: 'Akita' },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export const groupedOptions = [
  {
    span: 'Colours',
    options: colourOptions,
  },
  {
    span: 'Flavours',
    options: flavourOptions,
  },
];