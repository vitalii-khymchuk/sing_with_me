class SoundRecorder {
  static audioStream = null;
  static audioRecorder = null;
  static chunks = [];

  static async stopRecording() {
    await this.audioRecorder.stop();
    await this.audioStream
      .getTracks()
      .forEach(async (track) => await track.stop());
  }

  static async startRecording(callback) {
    this.audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    this.audioRecorder = new MediaRecorder(this.audioStream);

    this.audioRecorder.addEventListener("dataavailable", (event) => {
      this.chunks.push(event.data);
    });
    this.audioRecorder.addEventListener("stop", () => {
      const blob = new Blob(this.chunks);
      callback(blob);
      this.chunks = [];
    });
    this.audioRecorder.start();
  }
}

export {SoundRecorder};
