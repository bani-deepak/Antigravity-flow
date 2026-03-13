import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'bani-studio',
  title: 'BANI Studio',

  projectId: 'ywcem2gl',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      // Post
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
          {name: 'author', title: 'Author', type: 'reference', to: [{type: 'author'}]},
          {name: 'mainImage', title: 'Main Image', type: 'image', options: {hotspot: true}},
          {name: 'categories', title: 'Categories', type: 'array', of: [{type: 'reference', to: {type: 'category'}}]},
          {name: 'publishedAt', title: 'Published At', type: 'datetime'},
          {name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3},
          {name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]},
        ],
      },
      // Author
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {name: 'name', title: 'Name', type: 'string'},
          {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 96}},
          {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          {name: 'bio', title: 'Bio', type: 'text'},
        ],
      },
      // Category
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
        ],
      },
    ],
  },
})
