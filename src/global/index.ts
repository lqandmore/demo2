import { App } from 'vue'
import { registerEl } from './elementRegister'

export default function globalRegister(app: App): void {
  registerEl(app)
}
