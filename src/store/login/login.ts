import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginMudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state () {
    return {
      token:'',
      userInfo:{},
      usrMenus:[]
    }
  },
  getters: {},
  mutations:{
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus:any) {
      state.usrMenus = userMenus
    }
  },
  actions: {
    // async accountLoginAction({ commit }),payload: IAccount {

    // }
  }
}
