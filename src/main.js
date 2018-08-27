import { vnode } from './core/vnode/node'
import { createElement } from './core/vnode/createElement'

const vdom = (
  <div id="_Q5" style="border: 1px solid red;">
      <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" height="56" style="border: none; margin: 8px 0px;"></img>
          hello world!
      </div>
  </div>)

document.body.appendChild(createElement(vdom))