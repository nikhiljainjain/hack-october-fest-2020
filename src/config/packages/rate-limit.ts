import { ONE_DAY_TIME_IN_MSEC } from "../index";

export const rateLimitOptions = {
	max: 100, //max requests
	windowMs: ONE_DAY_TIME_IN_MSEC, // one day lockout
	message: "TOO MANY REQUEST"
}
