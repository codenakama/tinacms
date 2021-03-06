/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/**
 * TinaCMS Core Types & React Interfaces
 */
export * from './react-tinacms'
export { ActionButton } from '@tinacms/react-forms'

/**
 * The Tina CMS Class
 */
export { TinaCMS, TinaCMSConfig } from './tina-cms'
export { TinaCMS as CMS } from './tina-cms'

/**
 * Tina Sidebar
 */
export {
  TinaProvider,
  TinaProviderProps,
  // Deprecated aliases to the previous exports
  Tina,
  TinaProps,
} from './components/TinaProvider'
export { useSidebar } from './components/sidebar/SidebarProvider'

/**
 * Plugins
 */

// Plugin Types
export { AddContentPlugin } from './plugins/create-content-form-plugin'
export { GlobalFormPlugin } from './plugins/screens'
export { ScreenPlugin } from '@tinacms/react-screens'

// Pre-registered Plugins
export * from '@tinacms/fields'

/**
 * REACT COMPONENTS
 */

// Inline Editing Components
export * from '@tinacms/form-builder'

export { Wysiwyg } from 'react-tinacms-editor'

// Modal Components
export * from '@tinacms/react-modals'

// Media Manager
export * from './media'
