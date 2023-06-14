import {instance} from "common/api/common.api";

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: any) => {
        return instance.post('auth/login', arg)
    }
}

// types
export type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
};
export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>;

export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token'|'tokenDeathTime'|'avatar'>;
}

// export type UserType = Omit<LoginResponseType, 'token'|'tokenDeathTime'|'avatar'>;

export type ProfileType = {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: string;
	updated: string;
	__v: number;

	token: string;
	tokenDeathTime: number;
	avatar: string;
}