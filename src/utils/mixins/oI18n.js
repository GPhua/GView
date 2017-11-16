import i18n from '@/i18n'

export default {
  methods: {
    tt (key, options) {
      return i18n.getT(null)(key, options)
    }
  }
}
