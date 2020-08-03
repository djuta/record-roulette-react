export default class Channel {
  constructor(channel) {
    const { channelId, title, image } = channel
    this.channelId = channelId
    this.title = title
    this.image = image
  }
}
