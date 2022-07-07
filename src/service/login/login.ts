import lqRequst from '..'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  AccountLgoin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLgoinRequest(account: IAccount) {
  return lqRequst.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLgoin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return lqRequst.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return lqRequst.get<IDataType>({
    url: LoginAPI.UserMenus + '1' + '/menu',
    showLoading: false
  })
}
