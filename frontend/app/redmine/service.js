import Ember  from 'ember'
import config from '../config/environment'

/**
 * Redmine Service for fetching data from a redmine instance
 *
 * @class RedmineService
 * @public
 */
export default Ember.Service.extend({

  ajax: Ember.inject.service(),

  /**
   * Redmine host name
   *
   * @property {string} host
   * @public
   */
  host: config.APP.redmine.host,

  /**
   * Fetch redmine issues from a host
   *
   * @param {Object} params Query params to filter issues
   * @return {Object}
   */
  async fetchIssues(params) {
    let res = await this.get('ajax').request(`/api/proxy/${this.host}/issues.json`, { data: params })

    return {
      issues: res.issues,
      total:  res.total_count,
      offset: res.offset,
      limit:  res.limit
    }
  },

  /**
   * Fetch redmine projects from a redmine host
   *
   * @param {Object} params Query params to filter projects
   * @return {Object}
   */
  async fetchProjects(params) {
    let res = await this.get('ajax').request(`/api/proxy/${this.host}/projects.json`, { data: params })

    return {
      projects: res.projects,
      total:    res.total_count,
      offset:   res.offset,
      limit:    res.limit
    }
  }
})
