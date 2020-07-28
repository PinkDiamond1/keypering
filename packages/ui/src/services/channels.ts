import type { Channel } from '@keypering/specs'

const {
  ipcRenderer: { invoke },
} = window

export const channelName: { [key: string]: Channel.ChannelName } = {
  createWallet: 'create-wallet',
  getMnemonic: 'get-mnemonic',
  importKeystore: 'import-keystore',
  getAuthList: 'get-auth-list',
  deleteAuth: 'delete-auth',
}

export const createWallet = (params: Channel.CreateWallet.Params): Promise<Channel.CreateWallet.Response> =>
  invoke(channelName.createWallet, params)
export const getMnemonic = (): Promise<Channel.GetMnemonic.Response> => invoke(channelName.getMnemonic)
export const importKeystore = (params: Channel.ImportKeystore.Params): Promise<Channel.ImportKeystore.Response> =>
  invoke(channelName.importKeystore, params)

export const getAuthList = (): Promise<Channel.GetAuthList.Response> => invoke(channelName.getAuthList)

export const revokeAuth = (params: Channel.DeleteAuth.Params): Promise<Channel.DeleteAuth.Response> =>
  invoke(channelName.deleteAuth, params)
