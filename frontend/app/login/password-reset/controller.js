import Ember from 'ember'

export default Ember.Controller.extend({
  login: Ember.inject.controller(),
  errorMessage: {},
  actions: {
    async passwordreset(identification) {
      this.set('errorMessage.visible', null)

      if (!identification) {
        this.set('errorMessage',
          this.notify.error('Please provide an username', { closeAfter: null }))
        return
      }

      try {
        // Send mail
        // await password reset

        this.notify.success('Instructions to reset your password have been sent to your email')
        this.set('login.identification', identification)
        this.transitionToRoute('login')
      }
      catch (e) {
        this.set('errorMessage',
          this.notify.error(e.message, { closeAfter: null }))
      }
    }
  }
})
