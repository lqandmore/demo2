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
import userMenusResult from '@/static/menu.json'

const loginMudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //实现登录逻辑
      const loginResult = await accountLgoinRequest(payload)
      const { id, token } = loginResult
      commit('saveToken', token)
      localCache.setCache('token', token)

      const userInfo = await requestUserInfoById(id)
      commit('saveUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      const userMenus = await requestUserMenusByRoleId(1)
      commit('saveUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('saveToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    }
  }
}

export default loginMudle
