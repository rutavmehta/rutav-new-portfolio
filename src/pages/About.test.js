// Runtime validation coverage for the About page CV actions.
import assert from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

describe('About page CV actions', () => {
  let vite
  let markup

  before(async () => {
    vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
    const { default: About } = await vite.ssrLoadModule('/src/pages/About.jsx')
    markup = renderToStaticMarkup(React.createElement(About))
  })

  after(async () => {
    await vite?.close()
  })

  it('describes the CV section and opens the PDF in a new tab', () => {
    assert.match(markup, /<h2[^>]*>My Resume<\/h2>/)
    assert.match(markup, /Explore my academic background, technical skills, projects and professional experience\./)
    assert.match(
      markup,
      /aria-label="View CV PDF in a new tab"[^>]*href="\/documents\/Rutav_Ritesh_Mehta_Updated_CV\.pdf"[^>]*rel="noreferrer"[^>]*target="_blank"/,
    )
  })

  it('downloads the PDF using the requested filename', () => {
    assert.match(
      markup,
      /aria-label="Download CV as Rutav_Ritesh_Mehta_CV\.pdf"[^>]*download="Rutav_Ritesh_Mehta_CV\.pdf"[^>]*href="\/documents\/Rutav_Ritesh_Mehta_Updated_CV\.pdf"/,
    )
  })
})
