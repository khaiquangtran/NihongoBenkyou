from google.cloud.texttospeech_v1beta1 import VoiceSelectionParams, AudioConfig, AudioEncoding, SynthesizeSpeechRequest, SynthesisInput, TextToSpeechClient
import os

# Set biến môi trường để dùng credentials (từ file JSON tải từ Google Cloud)
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "H:/13_Tai_lieu/virtual.json"  # 🔁 thay đường dẫn này

def synthesize():
    client = TextToSpeechClient()

    synthesis_input = SynthesisInput(ssml="""
<speak>
    <mark name="1"/>日本へ
    <mark name="2"/>勉強に
    <mark name="3"/>行きます。
    <mark name="4"/>あなたは
    <mark name="5"/>どこへ
    <mark name="6"/>行きますか。
    <mark name="7"/>私は
    <mark name="8"/>日本へ
    <mark name="9"/>行きます。
    <mark name="10"/>あなたは
    <mark name="11"/>日本へ
    <mark name="12"/>何を
    <mark name="13"/>しに
    <mark name="14"/>行きますか。
</speak>
""")
    voice = VoiceSelectionParams(
        language_code="ja-JP",
        name="ja-JP-Neural2-B",
        ssml_gender='FEMALE'
    )

    audio_config = AudioConfig(
        audio_encoding=AudioEncoding.MP3
    )
    request = SynthesizeSpeechRequest(
    input=synthesis_input,
    voice=voice,
    audio_config=audio_config,
    enable_time_pointing=[SynthesizeSpeechRequest.TimepointType.SSML_MARK]
    )
    response = client.synthesize_speech(request=request)

    with open("tts_output.mp3", "wb") as out:
        out.write(response.audio_content)
        print("Audio content written to file 'tts_output.mp3'")

    print("Saving to:", os.getcwd())

    timepoints = list(response.timepoints)
    print(timepoints)


if __name__ == "__main__":
    synthesize()
