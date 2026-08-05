module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css')

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  })

  return {
    pathPrefix: '/Blog/',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
  }
}
