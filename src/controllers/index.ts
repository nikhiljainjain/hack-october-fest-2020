import { AdminController } from "./admin";
import { AdminLoginController } from "./otp";
import { ClearDBController } from "./cleardb";
import { UsersController } from "./users";

const adminController = new AdminController();
const adminLoginController = new AdminLoginController();
const clearDBController = new ClearDBController();
const usersController = new UsersController();

export {
    adminController,
    adminLoginController,
    clearDBController,
    usersController
};
