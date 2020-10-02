//checking name only contains alphabets
export const nameRegexp = new RegExp("^[a-zA-z]{5,26}$");

//gender value should be either M, F or O
export const genderRegExp = new RegExp("[MFO]{1}");

//regex for checking language of the user
export const langRegExp = new RegExp("^(HI|EN)$");

//regexp for ipv4
export const ipv4RegExp = "^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$";

//regex for ipv6
export const ipv6RegExp = "^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$";

