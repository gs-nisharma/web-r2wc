import r2wc from '@r2wc/react-to-web-component'

import { Todo } from './Todo'
import Timer from './Timer'

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

customElements.define('todo-wc', TodoWC)
customElements.define('timer-wc', TimerWC)
