export type TLoginData = {
    email: string,
    password: string
}

export type TLoginResponse = {
    reset: boolean,
    redirect_link: string | null,
    data: { token: string | null }
    status?: number,
    message: string
}

export type TLoginReset = {
    old_password: string,
    new_password: string,
}