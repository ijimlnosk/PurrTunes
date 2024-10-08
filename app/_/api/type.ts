export type YouTubeSearchResponse = {
    kind: string
    etag: string
    nextPageToken?: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: YouTubeSearchItem[]
}

export type YouTubeSearchItem = {
    kind: string
    etag: string
    id: {
        kind: string
        videoId: string
    }
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: YouTubeThumbnail
            medium: YouTubeThumbnail
            high: YouTubeThumbnail
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
    }
}

export type YouTubeThumbnail = {
    url: string
    width: number
    height: number
}
