import {
  Controller
} from "stimulus"

export default class extends Controller {
  static targets = ["links", "template"]

  connect() {
    // this.outputTarget.textContent = 'Hello, Stimulus!'
  }

  add_association(event) {
    event.preventDefault()

    let content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime())
    this.linksTarget.insertAdjacentHTML('beforebegin', content)
  }
}
