import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '../../service/login/types'
import {
  accountLgoinRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '../../service/login/login'
import localCache from '../../utils/cache'
import router from '../../router'

const loginMudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      usrMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.usrMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //实现登录逻辑
      const loginResult = await accountLgoinRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // const userInfoResult = await requestUserInfoById(id)
      // const userInfo = userInfoResult.data
      // commit('changeUserInfo', userInfo)
      // localCache.setCache('userInfo', userInfo)

      const userMenusResult = await requestUserMenusByRoleId(1)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginMudle
