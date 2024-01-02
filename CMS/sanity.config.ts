import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'CMS',
  projectId: '8tszoh22',
  dataset: 'production',

  plugins: [dashboardTool({
    widgets: [
      projectInfoWidget(),
      projectUsersWidget(),
      netlifyWidget({
        sites: [
          {
            title: "Art of Akume",
            apiId: import.meta.env.SANITY_STUDIO_NETLIFY_PROJECT_ID,
            buildHookId: import.meta.env.SANITY_STUDIO_NETLIFY_HOOK_ID,
            name: "artofakume",
            url: "https://www.artofakume.com",
          },
        ],
      }),
    ],
  }), deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
