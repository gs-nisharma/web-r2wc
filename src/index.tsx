import r2wc from '@r2wc/react-to-web-component'

import { Todo } from './Todo'
import Timer from './Timer'
import PXJO from './PXJO'

const TodoWC = r2wc(Todo, {
  props: {
    items: 'json',
    addAction: 'function'
  }
})

const TimerWC = r2wc(Timer, {
  props: {
    message: 'string'
  }
})

const PX_JO = r2wc(PXJO, {
  props: {
    cancelAction: 'function'
  }
})

customElements.define('todo-wc', TodoWC)
customElements.define('timer-wc', TimerWC)
customElements.define('px-jo', PX_JO)
