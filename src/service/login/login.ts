import lqRequst from '..'
import { IAccount, ILoginResult } from './types'

enum LoginAPI {
  AccountLgoin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLgoinRequest(account: IAccount) {
  return lqRequst.post<ILoginResult>({
    url: LoginAPI.AccountLgoin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return lqRequst.get({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return lqRequst.get({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
