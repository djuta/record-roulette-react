export default class Video {
  constructor(video) {
    const { videoId, title, image } = video
    this.videoId = videoId
    this.title = title
    this.image = image
  }
}
