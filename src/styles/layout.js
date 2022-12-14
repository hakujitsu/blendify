/** LAYOUT CONSTANTS **/

export const MIN_WIDTH = "800px"

export const HEADER_HEIGHT = "64px"

export const DRAWER_WIDTH = "240px";

export const FOOTER_HEIGHT = " 96px"

export const BODY_MARGIN = "64px"

export const BODY_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`

export const BODY_WIDTH = `calc(max(100vw, ${MIN_WIDTH}) - ${DRAWER_WIDTH} - ${BODY_MARGIN})`

/** PLAYLIST BODY CONSTANTS **/

export const PLAYLIST_TITLE_HEIGHT = "228px"

export const PLAYLIST_TABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${PLAYLIST_TITLE_HEIGHT})`

/** PLAYLIST GRID BODY CONSTANTS **/

export const PLAYLIST_GRID_WIDTH = `calc(max(100vw, ${MIN_WIDTH}) - ${DRAWER_WIDTH} - ${BODY_MARGIN} + 16px)`
