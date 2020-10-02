//schemas name saved in db
export const schemaName = {
    admin: "project_name_admin",
    adminLog: "project_name_admin_log",
    audio: "project_name_audios",
    errorLog: "project_name_server_error_log",
    listen: "project_name_users_listen",
    users: "project_name_users",
    usersOTP: "project_name_users_otp",
    usersLog: "project_name_users_log",
    mainList: "project_name_main_list",
    subList: "project_name_sub_list"
};

//gender possible values
export const userGender = {
    male: "M",
    female: "F",
    other: "O"
};

//constant for english or hindi for user language
export const userLang = {
    hindi: "HI",
    english: "EN"
};

//possible values in language for enum
export const languageList = [ "HI", "EN" ];

//possible values in gender for enum
export const genderList = ["F", "M", "O"];

//saluations for the person
export const saluationObj = {
    man: "MR",
    girl: "MISS",
    woman: "MRS"
};

//possible values of saluation for a person
export const saluationArr = [ "MR", "MISS", "MRS" ];
